import { atom } from "recoil";

interface UserData {
  name: string;
  gender: string;
  email: string;
  nick_name: string;
  password: string;
  address?: string;
  created_at?: string;
  image_url?: string;
  new_password?: string | null;
  new_password_confirm?: string | null;
  phone_number?: string;
  user_roles?: string[];
}

//내 정보
export const mydataAtom = atom<UserData>({
  key: "mydataAtom",
  default: {
    name: "",
    gender: "",
    email: "",
    nick_name: "",
    password: "",
    address: "",
    created_at: "",
    image_url: "",
    new_password: null,
    new_password_confirm: null,
    phone_number: "",
    user_roles: [],
  },
});
export interface ProductOption {
  option_id: number;
  color?: string;
  size?: string;
  price?: number;
  quantity?: number;
}

export interface ProductResponse {
  product_id: number;
  product_name?: string;
  product_img?: string[];
  product_option_response?: ProductOption[];
  product_total_price?: number;
}

export interface Order {
  order_id: number;
  order_status?: string;
  ship?: string;
  order_request?: string;
  order_at?: string;
  product_response_list?: ProductResponse[];
  order_total_price?: number;
}

//내 구매내역
export const orderitemAtom = atom<Order[]>({
  key: "orderitemAtom",
  default: [],
});
