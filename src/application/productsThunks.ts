import { AppDispatch } from '../store';  // Asume que tienes un tipo para AppDispatch
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../domain/productsSlice';
import { ApiProductService } from '../adapters/apiProductService';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  const productService = new ApiProductService('https://api.escuelajs.co/api/v1/products?limit=10&offset=1');

  dispatch(fetchProductsStart());
  
  try {
    const products = await productService.fetchProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchProductsFailure(error.message));
    } else {
      dispatch(fetchProductsFailure('An unknown error occurred'));
    }
  }
};