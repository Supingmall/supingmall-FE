export interface Product {
  product_id: number;
  user_id: number;
  product_name: string;
  product_price: number;
  category: string;
  create_at: string;
  photo_url: string;
  review_count: number;
  score_avg: number;
}

export interface ProductList {
  content: Product[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface ResponseData {
  code: string;
  message: string;
  product_list: ProductList;
  nextPage: number;
}

export interface ErrorResponse {
  code: string;
  message: string;
}
