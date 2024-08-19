import React from 'react';
import styles from "./banner.module.css";

const Banner = () => {
    return (
        <div className={styles._}>
            <img className={styles.img} src="/images/banner-bg.webp" />
        </div>
    );
};

export default Banner;