import React from 'react';
import styles from "./overlay.module.css";

const Overlay = ({children}) => {
    return (
        <div className={styles._}>{children}</div>
    );
};

export default Overlay;