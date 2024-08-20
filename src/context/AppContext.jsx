"use client";
import React, { createContext, useState, useContext, useCallback } from 'react';
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

export const useItems = () => useContext(ItemsContext);
export const useSelectedCategory = () => useContext(SelectedCategoryContext);
export const useItemsSort = () => useContext(ItemsSortContext);
export const useSort = () => useContext(SortContext);
export const useQtySelectedItems = () => useContext(QtySelectedItemsContext);
export const useGoodsInCart = () => useContext(GoodsInCartContext);
export const useCartLength = () => useContext(CartLengthContext);
export const useCartTotal = () => useContext(CartTotalContext);

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

export const useIsInCart = (item) => {
  const { goodsInCart } = useGoodsInCart();
  return goodsInCart[item.id] ? goodsInCart[item.id].qty : 0;
};

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

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <SelectedCategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
        <ItemsSortContext.Provider value={{ itemsSort, setItemsSort }}>
          <SortContext.Provider value={{ sort, setSort }}>
            <QtySelectedItemsContext.Provider value={{ qtySelectedItems, setQtySelectedItems }}>
              <GoodsInCartContext.Provider value={{ goodsInCart, setGoodsInCart }}>
                <CartLengthContext.Provider value={{ cartLength, setCartLength }}>
                  <CartTotalContext.Provider value={{ cartTotal, setCartTotal }}>
                    {children}
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
