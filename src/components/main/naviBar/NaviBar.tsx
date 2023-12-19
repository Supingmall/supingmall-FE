"use client";
import "./naviBar.css";
import { useRecoilState } from "recoil";
import { categoryAtom } from "@/store/atoms";

export function NaviBar() {
  const categoryList = ["전체", "상의", "하의", "신발"];
  const [active, setActive] = useRecoilState(categoryAtom);

  /**active 구별해주는 함수 */
  const checkActiveClass = (category: string): "active" | "nav-item" => {
    if (category === active) {
      return "active";
    }
    return "nav-item";
  };

  /**카테고리 클릭하는 함수 */
  const clickCategory = (category: string) => {
    setActive(category);
  };

  return (
    <nav>
      {categoryList.map((category) => {
        return (
          <div
            className={checkActiveClass(category)}
            key={category}
            onClick={() => clickCategory(category)}
          >
            {category}
          </div>
        );
      })}
    </nav>
  );
}
