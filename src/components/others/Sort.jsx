import React from 'react';
import styles from "./sort.module.css";
import { BiChevronDown, BiCheck } from "react-icons/bi"; 
import { useRecoilState, useRecoilValue } from "recoil";
import { itemsSortState, sortState } from "../../recoil/atoms";

const Sort = () => {
    const [sort, setSort] = useRecoilState(sortState);
    const options = useRecoilValue(itemsSortState);

    const selectSortMethod = (option) => {
        setSort(option);
    }

    return (
        <div className={styles._}>
            Sort by:
            <button className={styles.dropbtn}>{sort} <BiChevronDown /></button>
            <div className={styles.content}>
                {options.map((option) => (
                    <button className={styles.btn} value={option} key={option} onClick={() => selectSortMethod(option)}>
                        {option === sort &&
                            <BiCheck className={styles.icon} fontSize={20} />
                        }
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sort;