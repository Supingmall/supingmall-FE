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
  cart_product_option_response: CartProductOption[];
  product_total_price: number;
}

export interface Cart {
  cartResponseList: CartItem[];
  total_quantity: number;
  in_cart_total_price: number;
}

export const cartitemAtom = atom<Cart>({
  key: "cartitemAtom",
  default: {
    cartResponseList: [
      {
        product_id: 6,
        product_name: "유행지난 후드티",
        product_img: ["대표상품사진1", "대표상품사진2"],
        cart_product_option_response: [
          {
            option_id: 8,
            color: "흰색",
            size: "M",
            price: 300,
            quantity: 6,
          },
        ],
        product_total_price: 1800,
      },
      {
        product_id: 7,
        product_name: "후줄근한 바지",
        product_img: ["대표상품사진1", "대표상품사진2"],
        cart_product_option_response: [
          {
            option_id: 11,
            color: "흰색",
            size: "M",
            price: 300,
            quantity: 5,
          },
          {
            option_id: 10,
            color: "투명",
            size: "L",
            price: 300,
            quantity: 5,
          },
          {
            option_id: 12,
            color: "파랑",
            size: "XL",
            price: 300,
            quantity: 6,
          },
        ],
        product_total_price: 4800,
      },
    ],
    total_quantity: 22,
    in_cart_total_price: 6600,
  },
});
