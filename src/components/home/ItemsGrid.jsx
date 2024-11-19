import React from 'react';
import styles from "./items-grid.module.css";
import ItemsCard from './ItemCard';
import { useItems, useSelectedCategory } from '@/context/AppContext';
import { useItemsSort, useSort } from '@/context/AppContext';

const ItemsGrid = () => {
    const { items, setItems } = useItems();
    const { itemsSort, setItemsSort } = useItemsSort();
    const { sort, setSort } = useSort();
    const { selectedCategory } = useSelectedCategory();

    const filteredItems = selectedCategory ? items.filter(item => item.category === selectedCategory) : items;

    const sortItems = (items, itemsSort) => {
        switch (itemsSort) {
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

    const sortedItems = sortItems(filteredItems, sort);

    return (
        <div className={styles._}>
            {sortedItems.map(item => (
                <ItemsCard item={item} key={item.id} />
            ))}
        </div>
    );
};

export default ItemsGrid;