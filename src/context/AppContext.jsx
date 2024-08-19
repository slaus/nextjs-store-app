"use client";
import React, { createContext, useState, useContext } from 'react';
import data from '../data';

const ItemsContext = createContext();
const SelectedCategoryContext = createContext();
const ItemsSortContext = createContext();
const SortContext = createContext();
const QtyInCartContext = createContext();
const GoodsInCartContext = createContext();

export const useItems = () => useContext(ItemsContext);
export const useSelectedCategory = () => useContext(SelectedCategoryContext);
export const useItemsSort = () => useContext(ItemsSortContext);
export const useSort = () => useContext(SortContext);
export const useQtyInCart = () => useContext(QtyInCartContext);
export const useGoodsInCart = () => useContext(GoodsInCartContext);

export const AppProviders = ({ children }) => {
  const [items, setItems] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [itemsSort, setItemsSort] = useState(["Default", "Ascending", "Descending", "Title (A-Z)", "Title (Z-A)", "Price (Min)", "Price (Max)",]);
  const [sort, setSort] = useState('Default');
  const [qtyInCart, setQtyInCart] = useState(0);
  const [goodsInCart, setGoodsInCart] = useState([]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <SelectedCategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
        <ItemsSortContext.Provider value={{ itemsSort, setItemsSort }}>
          <SortContext.Provider value={{ sort, setSort }}>
            <QtyInCartContext.Provider value={{ qtyInCart, setQtyInCart }}>
              <GoodsInCartContext.Provider value={{ goodsInCart, setGoodsInCart }}>
                {children}
              </GoodsInCartContext.Provider>
            </QtyInCartContext.Provider>
          </SortContext.Provider>
        </ItemsSortContext.Provider>
      </SelectedCategoryContext.Provider>
    </ItemsContext.Provider>
  );
};
