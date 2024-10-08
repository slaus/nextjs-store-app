import React from 'react';
import styles from "./sidebar.module.css";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useItems, useSelectedCategory } from '@/context/AppContext';

const Sidebar = ({ showSidebar, mobile }) => {

    const { items } = useItems();
    const { selectedCategory, setSelectedCategory } = useSelectedCategory();
    const uniqueCategories = [...new Set(items.map(item => item.category))];

    const handleClick = (category) => {
        setSelectedCategory(category);
    };

    const handleShowAll = () => {
        setSelectedCategory('');
    };

    return (
        <>
            <aside className={`${showSidebar ? styles._ + " " + styles.open : styles._}`}>
                <div className={styles.radiogroup}>
                    <button
                        type="button"
                        className={`${selectedCategory === '' ? styles.btn + " " + styles.active : styles.btn}`}
                        onClick={handleShowAll}
                    >
                        <div className={styles.item}>
                            {selectedCategory === '' ? <BiPlus size={26} /> : <BiMinus size={26} />}
                            All Products
                        </div>
                    </button>

                    {uniqueCategories.map((category, index) => (
                        <button
                            type="button"
                            className={`${selectedCategory === category ? styles.btn + " " + styles.active : styles.btn}`}
                            key={index}
                            onClick={() => handleClick(category)}
                        >
                            <div className={styles.item}>
                                {selectedCategory === category ? <BiPlus size={26} /> : <BiMinus size={26} />}
                                {category}
                            </div>
                        </button>
                    ))}
                </div>
            </aside>
            {mobile && showSidebar && <div className={styles.overlay}></div>}
        </>
    );
};

export default Sidebar;