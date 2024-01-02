"use client";

import { useRef, useState } from "react";
import OptionInput from "../OptionInput/OptionInput";
import styles from "./AddProductForm.module.css";
import OptionList from "../OptionList/OptionList";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import AWS from "aws-sdk";
import { addProduct } from "@/app/apis/client/sales";
import { useRouter } from "next/navigation";

export interface AddProductOption {
  color: string;
  product_size: string;
  stock: number;
}

const region = "ap-northeast-2";
const bucket = "supingmall-image-uploader";
const ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY;
const SECRET_KEY = process.env.NEXT_PUBLIC_AWS_SECRET_KEY;

export default function AddProductForm() {
  const router = useRouter();
  const productNameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const finishRef = useRef<HTMLInputElement>(null);
  const [optionList, setOptionList] = useState<AddProductOption[]>([]);
  const [imgList, setImgList] = useState<File[]>([]);
  const colorRef = useRef<HTMLInputElement>(null);
  const sizeRef = useRef<HTMLInputElement>(null);
  const stockRef = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState<string>("상의");

  AWS.config.update({
    region: region,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  });

  const s3 = new AWS.S3();

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const uploadFile = async (files: any) => {
    if (files.length === 0) return;

    const uploadPromise = files.map((file: any) => {
      const params = {
        Bucket: bucket,
        Key: `upload/${Date.now()}.${file.name}`,
        Body: file,
      };
      return s3.upload(params).promise();
    });

    const results = await Promise.all(uploadPromise);
    const locations = results.map((result) => result.Location);
    return locations;
  };

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

  const handleImageUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !productNameRef.current?.value ||
      !priceRef.current?.value ||
      !finishRef.current?.value ||
      optionList.length === 0 ||
      imgList.length !== 2
    )
      return;

    const imgLinks = await uploadFile(imgList);
    if (imgLinks?.length !== 2) return;
    addProduct({
      product_name: productNameRef.current?.value,
      category: category,
      product_price: Number(priceRef.current?.value),
      finish_at: finishRef.current?.value,
      photo: [
        {
          photo_url: imgLinks[0],
          photo_type: true,
        },
        {
          photo_url: imgLinks[1],
          photo_type: false,
        },
      ],
      option: optionList,
    }).then((result) => {
      if (result.status === 200) {
        alert("상품이 등록되었습니다.");
        router.push("/mypage/salesstatus");
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={handleImageUpload}>
      <div>
        <label htmlFor="productName">상품명</label>
        <input
          type="text"
          name="productName"
          id="productName"
          ref={productNameRef}
        />
      </div>
      <div>
        <label htmlFor="category">카테고리</label>
        <select
          id="category"
          name="category"
          onChange={handleChangeCategory}
          value={category}
        >
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="신발">신발</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">가격</label>
        <input type="number" name="price" id="price" ref={priceRef} />
      </div>
      <div>
        <label htmlFor="finish">판매 종료일</label>
        <input
          type="text"
          name="finish"
          id="finish"
          ref={finishRef}
          placeholder="예시) 2024-05-01"
        />
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
        <label>이미지</label>
        <div>
          <ImageUploader images={imgList} setImages={setImgList} max={2} />
        </div>
      </div>
      <button>상품 등록</button>
    </form>
  );
}
