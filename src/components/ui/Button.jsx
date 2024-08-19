import React from 'react';
import styles from "./button.module.css";

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} type="button" className={styles._}>{children}</button>
    );
};

export default Button;