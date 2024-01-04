"use client";
import React from "react";
import styles from "./CartSummary.module.css";
import { useRecoilValue } from "recoil";
import { cartitemAtom } from "@/store/CartAtom";

const CartSummary = () => {
  const cartData = useRecoilValue(cartitemAtom);
  console.log(cartData);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tatal_box}>
        총가격{" "}
        <span className={styles.total_price}>
          {cartData?.in_cart_total_price}
        </span>
      </div>
    </div>
  );
};

export default CartSummary;
