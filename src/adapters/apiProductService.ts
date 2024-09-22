import axios from 'axios';
import { ProductService, Product } from '../ports/productService';

export class ApiProductService extends ProductService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    super();
    this.apiUrl = apiUrl;
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(`${this.apiUrl}`);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Error fetching products: ' + error.message);
      } else {
        throw new Error('Error fetching products');
      }
    }
  }
}

