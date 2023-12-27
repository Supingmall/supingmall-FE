import React from "react";
import { Order } from "@/store/MypageAtom";
import Image from "next/image";
import styles from "./OrderDetails.module.css";

interface OrderDetailsType {
  order: Order;
}

const OrderDetails = ({ order }: OrderDetailsType) => {
  return (
    <div className={styles.item_box}>
      {order.product_response_list.map((item) => (
        <>
          <div key={item.product_id} className={styles.item_titlebox}>
            <Image src="" alt="" className={styles.item_img} />
            <h4>{item.product_name}</h4>
          </div>
          <>
            {item.product_option_response.map((option) => (
              <>
                <p key={option.option_id}>
                  색상: {option.color}, 사이즈: {option.size}, 가격:{" "}
                  {option.price}, 수량: {option.quantity}
                </p>
              </>
            ))}
          </>
          <button>리뷰등록하기</button>
        </>
      ))}
    </div>
  );
};

export default OrderDetails;
