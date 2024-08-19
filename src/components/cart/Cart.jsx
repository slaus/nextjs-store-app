import React from 'react';
import styles from "./cart.module.css";
import { IoCloseOutline } from "react-icons/io5";
import Overlay from '../others/Overlay';
import CartList from './CartList';
import CartFooter from './CartFooter';
import { useRecoilState } from "recoil";
import { cartState } from "../../recoil/atoms";

const Cart = ({ setShowCart }) => {
    const [cart, setCart] = useRecoilState(cartState);

    const hideCart = () => {
        setShowCart(false)
    }

    return (
        <Overlay setShowCart={setShowCart}>
            <div className={styles._}>
                <section className={styles.block}>
                    <div className={styles.head}>
                        <h2 className={styles.title}>Shopping Cart</h2>
                        <button className={styles.close} onClick={hideCart}>
                            <IoCloseOutline size={34} />
                        </button>
                    </div>
                    <CartList cart={cart} />
                    <CartFooter cart={cart} />
                </section>
            </div>
        </Overlay>
    );
};

export default Cart;