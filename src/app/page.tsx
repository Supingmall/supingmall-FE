import { NaviBar } from "@/components/main/naviBar/NaviBar";
import S from "./page.module.css";
import { CategoryTitle } from "@/components/main/categoryTitle/CategoryTitle";
import { mockData } from "./mock";
import Item from "@/components/main/Item/Item";
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
      <header className={S.headerWrap}>헤더입니다.</header>
      <NaviBar />
      <main className={S.itemContainerWrap}>
        <CategoryTitle />
        <div className={S.itemContainer}>{renderItem()}</div>
      </main>
    </div>
  );
}
