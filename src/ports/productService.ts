export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  createdAt?: string;
}

export abstract class ProductService {
  abstract fetchProducts(): Promise<Product[]>;
}