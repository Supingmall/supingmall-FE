"use client";

import { mockData } from "@/app/mock";
import * as S from "./MainLayout.style";
import { NaviBar } from "../naviBar/NaviBar";
import { CategoryTitle } from "../categoryTitle/CategoryTitle";
import Item from "../Item/Item";

const MainLayout = () => {
  /**Item render하는 함수 */
  const renderItem = () => {
    const data = mockData; // 이 부분 통신 로직으로 수정
    if (data.code === "SU") {
      return data.product_list.map((item) => {
        return <Item key={item.product_id} item={item} />;
      });
    }
  };

  // useEffect(()=>{},[]) // 무한스크롤
  return (
    <S.MainLayout>
      <S.HeaderWrap>헤더입니다.</S.HeaderWrap>
      <NaviBar />
      <S.ItemContainerWrap>
        <CategoryTitle />
        <S.ItemContainer>{renderItem()}</S.ItemContainer>
      </S.ItemContainerWrap>
    </S.MainLayout>
  );
};

export default MainLayout;
