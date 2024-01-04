import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>장바구니</h1>
      <div className={styles.cartinfo}>
        <CartList />
        <CartSummary />
      </div>
    </div>
  );
};

export default page;
