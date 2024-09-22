import { AppDispatch, RootState } from '../store';  // Asume que tienes un tipo para AppDispatch y RootState
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../domain/productsSlice';
import { ApiProductService } from '../adapters/apiProductService';

export const fetchProducts = ({ page, search }: { page: number, search : string }) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { isFetching } = getState().products;

  if (isFetching) {
    return;
  }

  let url = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=' + page;
  if (search) {
    url += `&title=${encodeURIComponent(search)}`;
  }

  const productService = new ApiProductService(url);

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