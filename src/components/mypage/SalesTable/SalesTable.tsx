"use client";

import Link from "next/link";
import styles from "./SalesTable.module.css";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getSellingProduct } from "@/app/apis/client/sales";

export default function SalesTable() {
  const { data: sales_status } = useQuery({
    queryKey: ["salesProduct"],
    queryFn: getSellingProduct,
  });

  const transDate = (date: string) => {
    return date.split("T")[0];
  };

  const transImg = (imgUrl: string) => {
    return imgUrl.startsWith("http") ? imgUrl : "/mypage/no-image.png";
  };
  return (
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.header}`}>
        <div className={styles.cell}>상품명</div>
        <div className={styles.cell}>판매가</div>
        <div className={styles.cell}>색상</div>
        <div className={styles.cell}>사이즈</div>
        <div className={styles.cell}>카테고리</div>
        <div className={styles.cell}>재고</div>
        <div className={styles.cell}>판매 종료일</div>
        <div className={styles.cell}>더보기</div>
      </div>
      {sales_status
        ? [...sales_status].reverse().map((status) => {
            return (
              <div key={status.product_option_id} className={styles.row}>
                <div className={styles.cell}>
                  <Link
                    href={`/detail/${status.product_option_id}`}
                    className={styles.link}
                  >
                    <Image
                      src={transImg(status.photo_url)}
                      width={100}
                      height={100}
                      alt="이미지"
                    />
                    <p>{status.product_name}</p>
                  </Link>
                </div>
                <div className={styles.cell}>{status.product_price}</div>
                <div className={styles.cell}>{status.product_color}</div>
                <div className={styles.cell}>{status.product_size}</div>
                <div className={styles.cell}>{status.category}</div>
                <div className={styles.cell}>{status.product_stock}</div>
                <div className={styles.cell}>
                  {transDate(status.product_finish)}
                </div>
                <div className={styles.cell}>
                  ...
                  {/* <button>수정</button>
              <button className={styles.delete}>삭제</button> */}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
