// import { useEffect, useState } from "react";
import { useRecoilCallback } from 'recoil';
import { cartState, qtyInCartState } from '../recoil/atoms';
// import styles from "@/app/page.module.css";

const useAddToCart = () => {
  return useRecoilCallback(({ set }) => async (item) => {
    // add items to cart
    set(cartState, (prevCart) => [...prevCart, item]);
    // add item qty
    set(qtyInCartState, (prevQtyInCart) => prevQtyInCart + 1);
  });
};

const useRemoveFromCart = () => {
  return useRecoilCallback(({ set, snapshot }) => async (itemId) => {
    // remove items from cart
    set(cartState, (prevCart) => prevCart.filter(item => item.id !== itemId));
    // remove item qty
    const cart = await snapshot.getPromise(cartState);
    set(qtyInCartState, cart.length);
  });
};

// const useHomePageLogic = () => {
//   const [showCart, setShowCart] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [mobile, setMobile] = useState(false);
//   const [showSearchBar, setShowSearchBar] = useState(false);

//   useEffect(() => {
//     if (showCart) {
//       document.body.classList.add(styles.open);
//     } else {
//       document.body.classList.remove(styles.open);
//     }

//     return () => {
//       document.body.classList.remove(styles.open);
//     };
//   }, [showCart]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 767) {
//         setShowSidebar(false);
//         setMobile(true);
//       } else {
//         setShowSidebar(true);
//         setMobile(false);
//       }
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return {
//     showCart,
//     setShowCart,
//     showSidebar,
//     setShowSidebar,
//     mobile,
//     showSearchBar,
//     setShowSearchBar,
//   };
// }

export { useAddToCart, useRemoveFromCart };
