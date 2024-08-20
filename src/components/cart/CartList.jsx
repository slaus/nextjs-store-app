import React from 'react';
import styles from "./cart-list.module.css";
import Alert from '../others/Alert';
import CartItem from './CartItem';
import { useGoodsInCart } from '@/context/AppContext';

const CartList = () => {

    const { goodsInCart } = useGoodsInCart();
    
    return (
        <>
            {Object.values(goodsInCart).length === 0 ? (
                <Alert />
            ) : (
                <div className={styles._}>
                    {Object.values(goodsInCart).map(item => (
                        <CartItem item={item} key={item.id} />
                    ))}
                </div>
            )}
        </>
    );
};

export default CartList;