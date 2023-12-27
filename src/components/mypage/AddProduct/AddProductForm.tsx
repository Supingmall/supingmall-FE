"use client";

import { MouseEventHandler, useRef, useState } from "react";
import OptionInput from "../OptionInput/OptionInput";
import styles from "./AddProductForm.module.css";
import OptionList from "../OptionList/OptionList";

export interface AddProductOption {
  color: string;
  product_size: string;
  stock: number;
}

export default function AddProductForm() {
  const [optionList, setOptionList] = useState<AddProductOption[]>([]);
  const colorRef = useRef<HTMLInputElement>(null);
  const sizeRef = useRef<HTMLInputElement>(null);
  const stockRef = useRef<HTMLInputElement>(null);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (
      !colorRef.current?.value ||
      !sizeRef.current?.value ||
      !stockRef.current?.value
    )
      return;
    let arr = [...optionList];
    let addOptionObj: AddProductOption = {
      color: colorRef.current.value,
      product_size: sizeRef.current.value,
      stock: Number(stockRef.current.value),
    };
    arr.push(addOptionObj);
    setOptionList(arr);
  };

  const deleteOption = (index: number) => {
    const editArr = [...optionList];
    setOptionList(editArr.filter((_, i) => i !== index));
  };

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="productName">상품명</label>
        <input type="text" name="productName" id="productName" />
      </div>
      <div>
        <label htmlFor="category">카테고리</label>
        <select id="category" name="category">
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="신발">신발</option>
        </select>
      </div>
      <div>
        <label>옵션</label>
        <div className={styles.optionBox}>
          <div className={styles.addOption}>
            <OptionInput label="색상" name="color" inputRef={colorRef} />
            <OptionInput
              label="사이즈"
              name="product_size"
              inputRef={sizeRef}
            />
            <OptionInput
              label="수량"
              name="stock"
              inputRef={stockRef}
              isNumber
            />
            <button onClick={handleClick}>+++</button>
          </div>
          <OptionList optionList={optionList} deleteOption={deleteOption} />
        </div>
      </div>
      <div>
        <label>메인 이미지</label>
        <input type="file" style={{ display: "none" }} />
      </div>
      <div>
        <label>상세 이미지</label>
        <input type="file" />
      </div>
    </form>
  );
}

//상품 사진과 옵션은 배열로 받고 사진은 photo_type으로 대표사진과 상품설명사진을 구분합니다.
// {
//   "product_name": "목 늘어난 티셔츠",
//   "category": "상의",
//   "product_price": 3000,
//   "finish_at":"2025-12-18",

//    "photo": [
//   {
//     "photo_url": "대표상품사진1",
//     "photo_type": true
//   },
//   {
//     "photo_url": "상품사진1",
//     "photo_type": false
//   },
//   {
//     "photo_url": "상품사진2",
//     "photo_type": false
//   }
// ],

// "option": [
//   {
//     "color": "검정",
//     "product_size": "XL",
//     "stock": 50
//   },
//   {
//     "color": "노랑",
//     "product_size": "L",
//     "stock": 30
//   },
//   {
//     "color": "파랑",
//     "product_size": "M",
//     "stock": 10
//   }
// ]
// }
