"use client";

import { useRef, useState } from "react";
import OptionInput from "../OptionInput/OptionInput";
import styles from "./AddProductForm.module.css";
import OptionList from "../OptionList/OptionList";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import AWS from "aws-sdk";

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
  const [optionList, setOptionList] = useState<AddProductOption[]>([]);
  const [imgList, setImgList] = useState<File[]>([]);
  const colorRef = useRef<HTMLInputElement>(null);
  const sizeRef = useRef<HTMLInputElement>(null);
  const stockRef = useRef<HTMLInputElement>(null);

  AWS.config.update({
    region: region,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  });

  const s3 = new AWS.S3();

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
    console.log(locations);
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

  const handleImageUpload = (e: React.MouseEvent) => {
    e.preventDefault();
    uploadFile(imgList);
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
        <label>이미지</label>
        <div>
          <ImageUploader images={imgList} setImages={setImgList} max={2} />
        </div>
      </div>
      <button onClick={handleImageUpload}>이미지 S3 저장</button>
    </form>
  );
}
