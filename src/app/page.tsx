import { NaviBar } from "@/components/main/naviBar/NaviBar";
import S from "./page.module.css";
import { CategoryTitle } from "@/components/main/categoryTitle/CategoryTitle";
import { mockData } from "./mock";
import Item from "@/components/main/Item/Item";
import Button from "@/components/common/button/Button";
export default function Home() {
  /**Item render하는 함수 */
  const renderItem = () => {
    const data = mockData; // 이 부분 통신 로직으로 수정
    if (data.code === "SU") {
      return data.product_list.map((item) => {
        return <Item key={item.product_id} item={item} />;
      });
    }
  };

  return (
    <div className={S.mainWrap}>
      <Button
        desc="버튼이에요"
        size="big"
        bg="#00305B"
        color="#fff"
        bold={700}
      />
      <Button desc="버튼이에요" size="medium" bg="#9BE400" bold={300} />
      <Button desc="버튼이에요" size="small" color="#FA6C67" />
      <header className={S.headerWrap}>헤더입니다.</header>
      <NaviBar />
      <main className={S.itemContainerWrap}>
        <CategoryTitle />
        <div className={S.itemContainer}>{renderItem()}</div>
      </main>
    </div>
  );
}
