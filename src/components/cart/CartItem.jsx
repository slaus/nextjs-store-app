import React from 'react';
import styles from "./cart-item.module.css";
import { IoCloseOutline } from "react-icons/io5";
import CounterBtn from '../ui/CounterBtn';

const CartItem = ({ item }) => {
    const { id, title, price, img, offerPrice, counter } = item;

    const unitPrice = offerPrice !== undefined ? offerPrice || price : price;

    return (
        <>
            <div className={styles._}>
                <div className={styles.img}>
                    <img alt={title} src={`/images/${img}`} className={styles.pict} />
                </div>
                <div className={styles.block}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.price}>Unit Price ${(unitPrice || 0).toFixed(2)}{counter > 1 ?  " x " + counter : undefined}</p>
                    <div className={styles.btns}>
                        <CounterBtn id={id} counter={counter} type="cart" />
                    </div>
                </div>
                <p className={styles.total}>${((unitPrice || 0) * counter).toFixed(2)}</p>
                <button className={styles.delete}>
                    <IoCloseOutline size={20} />
                </button>
            </div>
        </>
    );
};

export default CartItem;
