import React from 'react';
import styles from "./cart-list.module.css";
import Alert from '../others/Alert';
import CartItem from './CartItem';
import { useRecoilValue } from "recoil";
import { cartState } from "../../recoil/atoms";

const CartList = () => {
    const cartItems = useRecoilValue(cartState);
    // console.log(cartItems);

    return (
        <>
            {Object.values(cartItems) === 0 ? (
                <Alert />
            ) : (
                <div className={styles._}>
                    {Object.values(cartItems).map(item => (
                        <CartItem item={item} key={item.id} />
                    ))}
                </div>
            )}
        </>
    );
};

export default CartList;