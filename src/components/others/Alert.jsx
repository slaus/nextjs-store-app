import React from 'react';
import styles from "./alert.module.css";
import { BiMessageRoundedError } from "react-icons/bi";

const Alert = () => {
    return (
        <div className={styles._}>
            <BiMessageRoundedError size={46} />
            <div className={styles.title}>No Items Added Yet!</div>
            <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
        </div>
    );
};

export default Alert;