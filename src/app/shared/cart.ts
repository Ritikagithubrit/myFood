import { CartItem } from './models/cartitem';

export class Cart {
  items: CartItem[] = [];
  totalPrice: number = 0;
  totalCount: number = 0;
}
