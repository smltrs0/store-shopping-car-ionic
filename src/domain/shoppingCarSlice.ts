import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../ports/productService';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  textToast: string;
  statusToast: 'success' | 'secondary';
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  textToast: '',
  statusToast: 'success'
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {

      const product = state.products.find(product => product.id === action.payload.id);
      if (product) {
        state.textToast = 'Este producto ya está en tu lista de deseos';
        state.statusToast = 'secondary';
      } else {
        let product = { ...action.payload, createdAt: new Date().toISOString() };
        state.products.push(product);
        state.textToast = 'Producto añadido a tu lista de deseos';
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  }

});


export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;