import { atom } from "recoil";

export interface ProductOption {
  option_id: number;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

export interface ProductResponse {
  product_id: number;
  product_name: string;
  product_img: string[];
  product_option_response: ProductOption[];
  product_total_price: number;
}

export interface Order {
  order_id: number;
  order_status: string;
  ship: string;
  order_request: string;
  order_at: string;
  product_response_list: ProductResponse[];
  order_total_price: number;
}

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

//내 구매내역
export const orderitemAtom = atom<Order[]>({
  key: "orderitemAtom",
  default: [
    {
      //하나의 주문 안에 같은상품의 여러옵션을 구매했을경우 아래처럼 하나의 상품에 옵션을 여러개로 담아 반환 합니다.
      order_id: 1,
      order_status: "배송중",
      ship: "서울",
      order_request: "문앞",
      order_at: "2023년 12월 17일 - 19시 07분",
      product_response_list: [
        {
          product_id: 6,
          product_name: "유행지난 후드티",
          product_img: ["대표상품사진1"],
          product_option_response: [
            {
              option_id: 8,
              color: "흰색",
              size: "M",
              price: 500,
              quantity: 1,
            },
            {
              option_id: 9,
              color: "파랑",
              size: "XL",
              price: 500,
              quantity: 1,
            },
          ],
          product_total_price: 1000, //상품별 갯수, 옵션을 합한 총결제금액
        },
        {
          product_id: 7,
          product_name: "후줄근한 바지",
          product_img: ["대표상품사진1"],
          product_option_response: [
            {
              option_id: 10,
              color: "투명",
              size: "L",
              price: 300,
              quantity: 2,
            },
          ],
          product_total_price: 600,
        },
      ],
      order_total_price: 1600, // 주문별 총 금액
    },
    {
      order_id: 2,
      order_status: "배송완료",
      ship: "서울",
      order_request: "",
      order_at: "2023년 12월 13일 - 19시 07분",
      product_response_list: [
        {
          product_id: 8,
          product_name:
            "나이키 에어 조던 11 DMP 그래티튜드 CT8012-170 378038-170 데일리슈즈 한정판",
          product_img: ["대표상품사진1"],
          product_option_response: [
            {
              option_id: 14,
              color: "흰색",
              size: "260",
              price: 219000,
              quantity: 1,
            },
          ],
          product_total_price: 219000,
        },
        {
          product_id: 9,
          product_name: "목 늘어난 티셔츠",
          product_img: ["대표상품사진1"],
          product_option_response: [
            {
              option_id: 17,
              color: "노랑",
              size: "L",
              price: 3000,
              quantity: 1,
            },
          ],
          product_total_price: 3000,
        },
      ],
      order_total_price: 222000,
    },
  ],
});
