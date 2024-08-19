import React, {useState} from 'react';
import styles from "./search.module.css";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const Search = ({setShowSearchBar}) => {
    const [searchValue, setSearchValue] = useState("");

    const hideSearchBar = () => {
        setShowSearchBar(false);
    }

    const handleChange = (e) => {
        if (e.target.value === "") {
          setTimeout(() => {
            setSearchValue("");
          }, 0);
        } else {
            setSearchValue(e.target.value);
        }
      };

    return (
        <div className={styles._}>
            <div className={styles.block}>
                <div className={styles.div}></div>
                <form className={styles.form}>
                    <input onChange={handleChange} type="search" placeholder="Search Product" className={styles.input} value={searchValue} />
                        <div className={styles.search}>
                            <button>
                                <BiSearch size={30} />
                            </button>
                        </div>
                </form>
                <button className={styles.close} onClick={hideSearchBar}>
                    <IoCloseOutline size={36} />
                </button>
            </div>
        </div>
    );
};

export default Search;