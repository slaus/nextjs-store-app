import React from 'react';
import styles from '../page.module.css';
import Header from '@/components/commons/Header';
import Main from "@/components/commons/Main";
import Footer from '@/components/commons/Footer';

const Checkout = () => {
    return (
        <>
            <div className={styles.main}>
                <Header/>

                <Main>
                    Checkout;
                </Main>
            </div>

            <Footer />
        </>
    );
};

export default Checkout;