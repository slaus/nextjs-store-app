import React from 'react';
import styles from "@/components/checkout/order-item.module.css";

const OrderItem = ({ item }) => {

    const { qty, title, price, offerPrice } = item;
    const itemTotal = (offerPrice ? offerPrice * qty : price * qty).toFixed(2);

    return (
        <div className={styles._}>
            <span><b>{qty}</b></span>
            <span>x</span>
            <p>{title}</p>
            <p className={styles.total}>$ {itemTotal}</p>
        </div>
    );
};

export default OrderItem;