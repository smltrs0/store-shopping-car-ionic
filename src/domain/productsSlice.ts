import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../ports/productService';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  textToast: string;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  textToast: ''
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;
export default productsSlice.reducer;
