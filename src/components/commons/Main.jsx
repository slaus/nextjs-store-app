import React from 'react';
import styles from "./main.module.css";

const Main = ({children}) => {
    return (
        <main className={styles._}>
            {children}
        </main>
    );
};

export default Main;