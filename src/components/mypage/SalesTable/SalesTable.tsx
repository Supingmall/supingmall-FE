import Link from "next/link";
import styles from "./SalesTable.module.css";
import Button from "@/components/common/button/Button";
import Image from "next/image";

const sales_status = [
  {
    product_id: 1,
    product_photo: "sfsdfsfsfde",
    product_name: "운동화121321312312dfsdfsdfdfds",
    product_price: 20000,
    product_stock: 50,
    category: "신발",
    product_finish: "2024-01-15",
  },
  {
    product_id: 2,
    product_photo: "sfsdfsfsfde",
    product_name: "운동화",
    product_price: 20000,
    product_stock: 50,
    category: "신발",
    product_finish: "2024-01-15",
  },
  {
    product_id: 3,
    product_photo: "sfsdfsfsfde",
    product_name: "운동화",
    product_price: 20000,
    product_stock: 50,
    category: "신발",
    product_finish: "2024-01-15",
  },
  {
    product_id: 4,
    product_photo: "sfsdfsfsfde",
    product_name: "운동화",
    product_price: 20000,
    product_stock: 50,
    category: "신발",
    product_finish: "2024-01-15",
  },
];

export default function SalesTable() {
  return (
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.header}`}>
        <div className={styles.cell}>상품명</div>
        <div className={styles.cell}>판매가</div>
        <div className={styles.cell}>카테고리</div>
        <div className={styles.cell}>재고</div>
        <div className={styles.cell}>판매 종료일</div>
        <div className={styles.cell}>더보기</div>
      </div>
      {sales_status.map((status) => {
        return (
          <div key={status.product_id} className={styles.row}>
            <div className={styles.cell}>
              <Link
                href={`/detail/${status.product_id}`}
                className={styles.link}
              >
                <Image
                  src="/mypage/shoes.jpg"
                  width={100}
                  height={100}
                  alt="이미지"
                />
                <p>{status.product_name}</p>
              </Link>
            </div>
            <div className={styles.cell}>{status.product_price}</div>
            <div className={styles.cell}>{status.category}</div>
            <div className={styles.cell}>{status.product_stock}</div>
            <div className={styles.cell}>{status.product_finish}</div>
            <div className={styles.cell}>
              <button>수정</button>
              <button className={styles.delete}>삭제</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
