"use client";

import { mockData } from "@/app/mock";
import * as S from "./MainLayout.style";
import { NaviBar } from "../naviBar/NaviBar";
import Button from "@/components/common/button/Button";
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

  const click = () => {
    alert("눌렸어요");
  };

  // useEffect(()=>{},[]) // 무한스크롤
  return (
    <S.MainLayout>
      <Button
        desc="굵고 흰색 글씨로"
        size="big"
        bg="#00305B"
        color="#fff"
        bold={700}
        onClick={click}
      />
      <Button desc="초록배경이여랏" size="medium" bg="#9BE400" bold={300} />
      <Button desc="내용을 넣어볼까?" size="small" color="#FA6C67" />
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
