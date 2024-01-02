import { client } from "..";

export type SalesProduct = {
  product_option_id: number;
  photo_url: string;
  product_name: string;
  product_color: string;
  product_size: string;
  product_price: number;
  product_stock: number;
  category: string;
  product_finish: string;
};

type AddPhoto = {
  photo_url: string;
  photo_type: boolean;
};

type AddOption = {
  color: string;
  product_size: string;
  stock: number;
};

export type AddProduct = {
  product_name: string;
  category: string;
  product_price: number;
  finish_at: string;
  photo: AddPhoto[];
  option: AddOption[];
};

export const getSellingProduct = async (): Promise<SalesProduct[]> => {
  const response = await client.get(`/v1/api/admin/my-page/sales-status`);
  return response.data;
};

export const addProduct = async (payload: AddProduct) => {
  const response = await client.post(`/v1/api/customer/reg`, payload);
  return response;
};
