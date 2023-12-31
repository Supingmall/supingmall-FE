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

export const getSellingProduct = async (): Promise<SalesProduct[]> => {
  const response = await client.get(`/v1/api/admin/my-page/sales-status`);
  return response.data;
};
