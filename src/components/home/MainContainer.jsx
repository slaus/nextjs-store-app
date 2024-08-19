import React from 'react';
import styles from "./main-container.module.css";
import Bread from '@/components/others/Bread';
import ItemsGrid from './ItemsGrid';
import Banner from '../others/Banner';

const MainContainer = ({showSidebar}) => {
    return (
        <main className={`${showSidebar ? styles._ : styles._ + " " + styles.full}`}>
            <Banner/>
            <Bread/>
            <ItemsGrid/>
        </main>
    );
};

export default MainContainer;