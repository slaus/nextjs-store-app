import React from 'react';
import styles from "./counter-btn.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import Button from '../ui/Button';
// import { useRecoilState } from "recoil";
// import { qtyInCartState, cartState } from "../../recoil/atoms";
import { useQtySelectedItems, useGoodsInCart } from '@/context/AppContext';

const CounterBtn = ({ id, counter, setCounter, addProductToCart }) => {
    // const [qtyInCart, setQtyInCart] = useRecoilState(qtyInCartState);
    // const [cart, setCart] = useRecoilState(cartState);
    const { qtySelectedItems, setQtySelectedItems } = useQtySelectedItems();
    const { goodsInCart, setGoodsInCart } = useGoodsInCart();
    
    //console.log(cart);

    // const existingItem = cart.find(item => item.id === id);
    // const counter = existingItem ? existingItem.counter : 0;
    
    const removeCounter = () => {
        if (counter === 0) return;
    
        setCounter(prevCounter => prevCounter - 1);
    
        if (counter === 1) {
            setQtySelectedItems(prevQtySelectedItems => prevQtySelectedItems - 1);
            setGoodsInCart(prevGoodsInCart => prevGoodsInCart.filter(item => item.id !== id));
        } else {
            const updatedGoodsInCart = goodsInCart.map(item => {
                if (item.id === id) {
                    return { ...item, counter: item.counter - 1 };
                }

                return item;
            });

            setGoodsInCart(updatedGoodsInCart);
        }
    };
    
    const addCounter = () => {
        setCounter(prevCounter => prevCounter + 1);

        const existingItemIndex = goodsInCart.findIndex(cartItem => cartItem.id === id);

        if (existingItemIndex !== -1) {
            const updatedGoodsInCart = goodsInCart.map((item, index) => {
                if (index === existingItemIndex) {
                    return { ...item, counter: item.counter + 1 };
                }
                return item;
            });
            
            setGoodsInCart(updatedGoodsInCart);
        } else {
            const newItem = { id, title, price, img, offerPrice, counter: 1 };
            setGoodsInCart(prevGoodsInCart => [...prevGoodsInCart, newItem]);
        }
    };

    return (
        <>
            {counter > 0 ? (
                <div className={styles._}>
                    <button onClick={removeCounter} type="button" className={styles.btn}>
                        <BiMinus size={22} />
                    </button>
                    <p className={styles.text}>{counter || 1}</p>
                    <button onClick={addCounter} type="button" className={styles.btn}>
                        <BiPlus size={22} />
                    </button>
                </div>
            ) : (
                <Button onClick={addProductToCart} type="button">Add to Cart</Button>
            )}
        </>
    );
};

export default CounterBtn;