import axios from "axios";
import { client } from "..";
import { ErrorResponse, ResponseData } from "@/components/main/layout/type";

interface ItemProps {
  category: string;
  pageParam: number;
}

export const getMainItem = async (props: ItemProps): Promise<ResponseData> => {
  const { category, pageParam } = props;
  // console.log("메인페이지 카테고리 ::", category);

  const response = await axios.get(
    `http://ec2-52-79-235-118.ap-northeast-2.compute.amazonaws.com:8080/v1/api/product-category?category=${category}&size=10&page=${pageParam}`
  );

  return response.data;
};

export const getSearchItem = async (keyword: string): Promise<ResponseData> => {
  // console.log("검색 키워드 ::", keyword);
  console.log(keyword);

  const response = await axios.get<ResponseData>(
    `http://ec2-52-79-235-118.ap-northeast-2.compute.amazonaws.com:8080/v1/api/product-keyword?keyword=${keyword}`
  );
  // console.log("search ::", response);
  return response.data;
};
