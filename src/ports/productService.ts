export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
}

export abstract class ProductService {
  abstract fetchProducts(): Promise<Product[]>;
}