import { atom } from "recoil";

export interface CartProductOption {
  option_id: number;
  color: string;
  size: string;
  price: number;
  quantity: number;
}
export interface CartItem {
  product_id: number;
  product_name: string;
  product_img: string[];
  product_option_response: CartProductOption[];
  product_total_price: number;
}
export interface Cart {
  product_response_list: CartItem[];
  total_quantity: number;
  in_cart_total_price: number;
}

export const cartitemAtom = atom<Cart | null>({
  key: "cartitemAtom",
  default: null,
});
