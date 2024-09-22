import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  products: any[];
  isFetching: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  isFetching: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.isFetching = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<any[]>) {
      state.isFetching = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;
export default productsSlice.reducer;