import React from 'react';
import styles from "./attention.module.css";
import { BiMessageRoundedError } from "react-icons/bi";

const Attention = () => {
    return (
        <div className={styles._}>
            <BiMessageRoundedError size={46} />
            <div className={styles.title}>No goods in the basket!</div>
            <div className={styles.desc}>Your cart is empty. You haven't purchased anything yet.</div>
        </div>
    );
};

export default Attention;