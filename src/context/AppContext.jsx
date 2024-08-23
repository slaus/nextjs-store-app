"use client";
import React, { createContext, useState, useContext, useCallback, useMemo } from 'react';
import data from '../data';

// Contexts
const ItemsContext = createContext();
const SelectedCategoryContext = createContext();
const ItemsSortContext = createContext();
const SortContext = createContext();
const QtySelectedItemsContext = createContext();
const GoodsInCartContext = createContext();
const CartLengthContext = createContext();
const CartTotalContext = createContext();
const DeliveryContext = createContext();
const DeliveryFeeContext = createContext();
const FormStateContext = createContext();

// Custom hooks for accessing contexts
export const useItems = () => useContext(ItemsContext);
export const useSelectedCategory = () => useContext(SelectedCategoryContext);
export const useItemsSort = () => useContext(ItemsSortContext);
export const useSort = () => useContext(SortContext);
export const useQtySelectedItems = () => useContext(QtySelectedItemsContext);
export const useGoodsInCart = () => useContext(GoodsInCartContext);
export const useCartLength = () => useContext(CartLengthContext);
export const useCartTotal = () => useContext(CartTotalContext);
export const useDelivery = () => useContext(DeliveryContext);
export const useDeliveryFee = () => useContext(DeliveryFeeContext);
export const useFormState = () => useContext(FormStateContext);

// Hook for refreshing the cart state
export const useRefreshCart = () => {
  const { goodsInCart, setGoodsInCart } = useGoodsInCart();
  const { setQtySelectedItems } = useQtySelectedItems();
  const { setCartLength } = useCartLength();
  const { setCartTotal } = useCartTotal();

  const refreshCart = useCallback(({ item, n }) => {
    const currentCart = { ...goodsInCart };

    if (n === 1) {
      // Add item to cart
      currentCart[item.id] = { ...item, qty: 1 };
    } else if (n > 0 && n <= item.stock) {
      // Update item quantity in cart
      currentCart[item.id] = { ...item, qty: n };
    } else if (n < 1) {
      // Remove item from cart
      delete currentCart[item.id];
    }

    const cartToArray = Object.values(currentCart);
    let total = 0;
    cartToArray.forEach((item) => {
      const actualPrice = item.offerPrice || item.price;
      total += actualPrice * item.qty;
    });

    setGoodsInCart(currentCart); // Update cart state
    setQtySelectedItems(cartToArray.length); // Update cart length
    setCartTotal(total); // Update cart total
  }, [goodsInCart, setGoodsInCart, setQtySelectedItems, setCartLength, setCartTotal]);

  return { refreshCart };
};

// Hook for checking if an item is in the cart
export const useIsInCart = (item) => {
  const { goodsInCart } = useGoodsInCart();
  return goodsInCart[item.id] ? goodsInCart[item.id].qty : 0;
};

// Hook for getting order details
export const useOrderDetails = () => {
  const { goodsInCart } = useGoodsInCart();
  const { cartTotal } = useCartTotal();
  const { delivery } = useDelivery();
  const { deliveryFee } = useDeliveryFee();
  const { formState } = useFormState();

  // Calculating order details
  const orderDetails = useMemo(() => {
    const cartItems = Object.values(goodsInCart);
    const subTotal = cartTotal;
    const shippingCost = delivery ? deliveryFee : 0;
    const total = subTotal + shippingCost;

    return {
      cartItems,
      subTotal: subTotal.toFixed(2),
      withDelivery: delivery,
      shippingCost: shippingCost.toFixed(2),
      total: total.toFixed(2),
      formData: formState,
    };
  }, [goodsInCart, cartTotal, delivery, deliveryFee, formState]);

  return orderDetails;
};

// AppProviders component to provide all contexts
export const AppProviders = ({ children }) => {
  const [items, setItems] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [itemsSort, setItemsSort] = useState([
    "Default", "Ascending", "Descending", "Title (A-Z)", "Title (Z-A)", "Price (Min)", "Price (Max)"
  ]);
  const [sort, setSort] = useState('Default');
  const [qtySelectedItems, setQtySelectedItems] = useState(0);
  const [goodsInCart, setGoodsInCart] = useState({});
  const [cartLength, setCartLength] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [delivery, setDelivery] = useState(true);
  const [deliveryFee, setDeliveryFee] = useState(14);
  const [formState, setFormState] = useState({});

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <SelectedCategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
        <ItemsSortContext.Provider value={{ itemsSort, setItemsSort }}>
          <SortContext.Provider value={{ sort, setSort }}>
            <QtySelectedItemsContext.Provider value={{ qtySelectedItems, setQtySelectedItems }}>
              <GoodsInCartContext.Provider value={{ goodsInCart, setGoodsInCart }}>
                <CartLengthContext.Provider value={{ cartLength, setCartLength }}>
                  <CartTotalContext.Provider value={{ cartTotal, setCartTotal }}>
                    <DeliveryContext.Provider value={{ delivery, setDelivery }}>
                      <DeliveryFeeContext.Provider value={{ deliveryFee, setDeliveryFee }}>
                        <FormStateContext.Provider value={{ formState, setFormState }}>
                          {children}
                        </FormStateContext.Provider>
                      </DeliveryFeeContext.Provider>
                    </DeliveryContext.Provider>
                  </CartTotalContext.Provider>
                </CartLengthContext.Provider>
              </GoodsInCartContext.Provider>
            </QtySelectedItemsContext.Provider>
          </SortContext.Provider>
        </ItemsSortContext.Provider>
      </SelectedCategoryContext.Provider>
    </ItemsContext.Provider>
  );
};
