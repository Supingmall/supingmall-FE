"use client";
import { categoryAtom } from "@/store/atoms";
import { useRecoilValue } from "recoil";
import "./categoryTitle.css";

export function CategoryTitle() {
  const category = useRecoilValue(categoryAtom);
  return (
    <h2>
      현재 카테고리 : <span>{category}</span>
    </h2>
  );
}
