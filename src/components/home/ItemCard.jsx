import React, { useState } from 'react';
import styles from "./item-card.module.css";
import Overlay from '../others/Overlay';
import Modal from '../ui/Modal';
import CounterBtn from '../ui/CounterBtn';
import { useRecoilState } from "recoil";
import { qtyInCartState, cartState } from "../../recoil/atoms";

const ItemsCard = ({ item }) => {
    const { id, title, price, img, offerPrice } = item;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const [qtyInCart, setQtyInCart] = useRecoilState(qtyInCartState);
    const [cart, setCart] = useRecoilState(cartState);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const addProductToCart = async () => {
        await setCounter(prevCounter => prevCounter + 1);

        const newCounter = counter + 1;
        const newItem = { id, title, price, img, offerPrice, counter: newCounter };

        setCart(prevCart => {
            const updatedCart = [...prevCart, newItem];
            return updatedCart;
        });

        await setQtyInCart(prevQtyInCart => prevQtyInCart + 1);
    }

    return (
        <>
            <div className={styles._}>
                {offerPrice && <div className={styles.sale}>SALE</div>}
                <div className={styles.img} onClick={openModal}>
                    <img alt={title} title={title} src={`/images/${img}`} className={styles.pict} />
                </div>
                <div className={styles.block}>
                    <div className={styles.prices}>
                        <p className={styles.price}>${(offerPrice || price).toFixed(2)}</p>
                        {offerPrice && <p className={styles.old}>${price.toFixed(2)}</p>}
                    </div>
                    <p className={styles.title}>{title}</p>
                </div>
                <div className={styles.btns}>
                    <CounterBtn id={id} counter={counter} setCounter={setCounter} addProductToCart={addProductToCart} />
                </div>
            </div>
            {isModalOpen &&
                <Overlay>
                    <Modal setIsModalOpen={setIsModalOpen}>
                        <img alt={title} title={title} src={`/images/${img}`} />
                    </Modal>
                </Overlay>
            }
        </>
    );
};

export default ItemsCard;