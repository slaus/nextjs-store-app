// import React from 'react';
// import styles from '../page.module.css';
// import Header from '@/components/commons/Header';
// import Main from "@/components/commons/Main";
// import Footer from '@/components/commons/Footer';

// const Checkout = () => {
//     return (
//         <>
//             <div className={styles.main}>
//                 <Header/>

//                 <Main>
//                     Checkout;
//                 </Main>
//             </div>

//             <Footer />
//         </>
//     );
// };

// export default Checkout;
"use client";

import React from 'react';
import { useQtySelectedItems, useGoodsInCart } from '@/context/AppContext';

const Checkout = () => {
    const { qtySelectedItems } = useQtySelectedItems();
    const { goodsInCart } = useGoodsInCart();

    return (
        <div>
            <h1>Checkout</h1>
            <p>Total Items in Cart: {qtySelectedItems}</p>
            <ul>
                {goodsInCart.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Checkout;
