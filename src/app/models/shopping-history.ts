import { Product } from './product';

export interface ShoppingHistory extends Product {
  purchaseDate: number,
}
