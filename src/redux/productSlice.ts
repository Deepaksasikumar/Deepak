import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products, Product } from '../data/products';

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  selectedCategory: string;
  searchQuery: string;
  sortBy: 'default' | 'price-low' | 'price-high';
}

const initialState: ProductState = {
  products,
  filteredProducts: products,
  selectedCategory: 'All',
  searchQuery: '',
  sortBy: 'default'
};

const applyFilters = (state: ProductState) => {
  let filtered = [...state.products];

  if (state.selectedCategory !== 'All') {
    filtered = filtered.filter(p => p.category === state.selectedCategory);
  }

  if (state.searchQuery) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }

  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  state.filteredProducts = filtered;
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      applyFilters(state);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      applyFilters(state);
    },
    setSortBy: (state, action: PayloadAction<'default' | 'price-low' | 'price-high'>) => {
      state.sortBy = action.payload;
      applyFilters(state);
    },
    resetFilters: (state) => {
      state.selectedCategory = 'All';
      state.searchQuery = '';
      state.sortBy = 'default';
      state.filteredProducts = state.products;
    }
  }
});

export const { setCategory, setSearchQuery, setSortBy, resetFilters } = productSlice.actions;
export default productSlice.reducer;
