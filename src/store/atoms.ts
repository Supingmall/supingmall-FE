import { atom, selector } from "recoil";

export const categoryAtom = atom({
  key: "categoryAtom",
  default: "전체",
});

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => get(categoryAtom),
  set: ({ set }, newCategory) => set(categoryAtom, newCategory),
});
