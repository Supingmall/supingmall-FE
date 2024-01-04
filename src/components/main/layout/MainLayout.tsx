"use client";

import * as S from "./MainLayout.style";
import { NaviBar } from "../naviBar/NaviBar";
import { CategoryTitle } from "../categoryTitle/CategoryTitle";
import Item from "../Item/Item";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMainItem, getSearchItem } from "@/app/apis/client/mainItem";
import { useRecoilValue } from "recoil";
import { categorySelector } from "@/store/atoms";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const MainLayout = () => {
  const category = useRecoilValue(categorySelector);
  // const [ref, inView] = useInView();
  // console.log("category ::", category);

  // const page = 0;

  const { data: getItem, isError } = useQuery({
    queryKey: ["getProduct", { category }],
    queryFn: () => getMainItem({ category, pageParam: 0 }),
  });

  // console.log("getItem ::", getItem);
  /**Item render하는 함수 */
  // const renderItem = () => {
  //   if (getItem?.code === "SU") {
  //     return getItem.product_list.content.map((item) => {
  //       return <Item key={item.product_id} item={item} />;
  //     });
  //   }
  // };

  // const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
  // ["getProductList"],
  // // ({ pageParam = 0 }) => getMainItem({ category, page: pageParam }),
  //  ({ pageParam = 1 }) => getMainItem({category,pageParam}),
  //  {
  //     select: data => ({
  //       pages: data.pages,
  //       pageParams: data.pageParams,
  //     }),
  //     getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  //   }
  // );
  // {
  //   getNextPageParam:(lastPage) =>{
  //     const page = lastPage.data.page;
  //     if()
  //   }
  // }
  // );

  // useEffect(() => {
  //   if (inView && hasNextPage) {
  //     fetchNextPage();
  //   }
  // }, [inView, hasNextPage, fetchNextPage]);
  return (
    <S.MainLayout>
      <NaviBar />

      <S.ItemContainerWrap>
        <CategoryTitle /> {isError && <p>검색어와 일치하는 상품이 없습니다.</p>}
        {!isError && (
          <S.ItemContainer>
            {getItem?.product_list.content.map((item) => (
              <Item key={item.product_id} item={item} />
            ))}
          </S.ItemContainer>
        )}
      </S.ItemContainerWrap>
    </S.MainLayout>
  );
};

export default MainLayout;
