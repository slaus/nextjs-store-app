import React from 'react';
import styles from "./modal.module.css";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ setIsModalOpen, children }) => {
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className={styles._}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={closeModal}>
                    <IoCloseOutline size={36} />
                </button>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;