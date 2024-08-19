import React from 'react';
import styles from './bread.module.css';
import Sort from '@/components/others/Sort';
import Breadcrumb from '@/components/others/Breadcrumb';

const Bread = () => {
    return (
        <div className={styles._}>
            <Breadcrumb />
            <Sort />
        </div>
    );
};

export default Bread;