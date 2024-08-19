import React from 'react';
import styles from './breadcrumb.module.css';
// import { useRecoilValue } from 'recoil';
// import { selectedCategoryState } from '../../recoil/atoms';
import { BiChevronRight } from "react-icons/bi";

const Breadcrumb = () => {
    // const selectedCategory = useRecoilValue(selectedCategoryState);

    return (
        <nav className={styles._}>
            <ol className={styles.ol}>
                <li className={styles.li}>
                    <span className={styles.link}>All Products</span>
                </li>
                {selectedCategory &&
                    <>
                    <li className={styles.li}>
                        <BiChevronRight size={22}/>
                    </li>
                    <li className={styles.li}>
                        <span className={styles.link}>{selectedCategory}</span>
                    </li>
                    </>
                }
            </ol>
        </nav>
    );
};

export default Breadcrumb;