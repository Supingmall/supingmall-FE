"use client";
import { cartitemAtom } from "@/store/CartAtom";
import React from "react";
import { useRecoilValue } from "recoil";
import CartItem from "./CartItem";

const CartList = () => {
  const { cartResponseList } = useRecoilValue(cartitemAtom);

  return (
    <div>
      {cartResponseList.map((item) => (
        <CartItem key={item.product_id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
