import React from "react";
import styles from "./page.module.css";
import OrderItem from "@/components/mypage/Purchasehistory/OrderItem";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>나의 구매 목록</h1>
        <div>
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default page;
