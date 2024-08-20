import React from 'react';
import styles from "./cart-item.module.css";
import { IoCloseOutline } from "react-icons/io5";
import CounterBtn from '../ui/CounterBtn';
import { useGoodsInCart, useRefreshCart } from '@/context/AppContext';

const CartItem = ({ item }) => {
    
    const { title, price, img, offerPrice, qty } = item;
    const { goodsInCart, setGoodsInCart } = useGoodsInCart();
    const { refreshCart } = useRefreshCart();
    const itemTotal = (offerPrice ? offerPrice * qty : price * qty).toFixed(2);
    // console.log(goodsInCart);

    return (
        <>
            <div className={styles._}>
                <div className={styles.img}>
                    <img alt={title} src={`/images/${img}`} className={styles.pict} />
                </div>
                <div className={styles.block}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.price}>Unit Price ${offerPrice || price}</p>
                    <div className={styles.btns}>
                        <CounterBtn type="cart" item={item} />
                    </div>
                </div>
                <p className={styles.total}>${itemTotal}</p>
                <button className={styles.delete} onClick={() => refreshCart({ item, n: 0 })}>
                    <IoCloseOutline size={20} />
                </button>
            </div>
        </>
    );
};

export default CartItem;
