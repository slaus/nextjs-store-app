import React from 'react';
import styles from "./items-grid.module.css";
// import { useRecoilValue } from 'recoil';
// import { itemsState, selectedCategoryState, sortState } from '../../recoil/atoms';
import ItemsCard from './ItemCard';

const ItemsGrid = () => {
    // const items = useRecoilValue(itemsState);
    // const selectedCategory = useRecoilValue(selectedCategoryState);
    // const selectedSort = useRecoilValue(sortState);

    const filteredItems = selectedCategory ? items.filter(item => item.category === selectedCategory) : items;

    const sortItems = (items, sortState) => {
        switch (sortState) {
            case "Ascending":
                return items.slice().sort((a, b) => a.id.localeCompare(b.id));
            case "Descending":
                return items.slice().sort((a, b) => b.id.localeCompare(a.id));
            case "Title (A-Z)":
                return items.slice().sort((a, b) => a.title.localeCompare(b.title));
            case "Title (Z-A)":
                return items.slice().sort((a, b) => b.title.localeCompare(a.title));
            case "Price (Min)":
                return items.slice().sort((a, b) => (a.offerPrice || a.price) - (b.offerPrice || b.price));
            case "Price (Max)":
                return items.slice().sort((a, b) => (b.offerPrice || b.price) - (a.offerPrice || a.price));
            default:
                return items;
        }
    };

    const sortedItems = sortItems(filteredItems, selectedSort);

    return (
        <div className={styles._}>
            {sortedItems.map(item => (
                <ItemsCard item={item} key={item.id} />
            ))}
        </div>
    );
};

export default ItemsGrid;