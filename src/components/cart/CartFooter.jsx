import React from 'react';
import styles from "./cart-footer.module.css";
import { useRouter } from "next/navigation";

const CartFooter = ({ goodsInCart }) => {
    const router = useRouter();

    const total = goodsInCart.reduce((acc, item) => {
        return acc + (item.offerPrice || item.price) * item.counter;
    }, 0);

    return (
        <div className={styles._}>
            {goodsInCart.length > 0 &&
                <p className={styles.total}>Sub Total: 
                    <span className={styles.sum}>
                        ${total.toFixed(2)}
                    </span>
                </p>
            }
            <button
                onClick={() => router.push("/checkout")}
                type="button"
                className={`${goodsInCart.length === 0 ? styles.btn + " " + styles.disable : styles.btn}`}
                disabled={goodsInCart.length === 0 ? true : false}
            >CHECKOUT</button>
        </div>
    );
};

export default CartFooter;