"use client";
import { cartitemAtom } from "@/store/CartAtom";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import CartItem from "./CartItem";
import { client } from "@/app/apis";
import styles from "./CartList.module.css";

const CartList = () => {
  const [cartList, setCartList] = useRecoilState(cartitemAtom);

  useEffect(() => {
    const CartData = async () => {
      const res = await client.get("/v1/api/account/my-page/cart");
      setCartList(res.data);
      console.log(res.data);
    };
    CartData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {cartList?.product_response_list.map((item) => (
        <CartItem key={item.product_id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
