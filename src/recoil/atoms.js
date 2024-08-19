import { atom, selector } from 'recoil';
import data from '../data';

// ATOMS
export const itemsState = atom({
  key: 'itemsState',
  default: data,
});

export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: '',
});

export const itemsSortState = atom({
  key: "itemsSortState",
  default: ["Default", "Ascending", "Descending", "Title (A-Z)", "Title (Z-A)", "Price (Min)", "Price (Max)"],
});

export const sortState = atom({
  key: "sortState",
  default: "Default",
});

export const qtyInCartState = atom({
  key: "qtyInCartState",
  default: 0,
});

export const cartState = atom({
  key: 'cartState',
  default: [],
});
