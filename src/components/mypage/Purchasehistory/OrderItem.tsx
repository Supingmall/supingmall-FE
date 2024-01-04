"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { orderitemAtom } from "@/store/MypageAtom";
import { useState } from "react";
import OrderDetails from "./OrderDetails";
import { Order } from "@/store/MypageAtom";
import styles from "./OrderItem.module.css";
import { client } from "@/app/apis";

const OrderItem = () => {
  const [orders, setOrders] = useRecoilState<Order[]>(orderitemAtom);
  const [activeOrderId, setActiveOrderId] = useState<number | null>(null);
  console.log(orders)
  const toggleAccordion = (orderId: number) => {
    setActiveOrderId(activeOrderId === orderId ? null : orderId);
  };

  useEffect(() => {
    const OrderData = async () => {
      const res = await client.get("/v1/api/account/my-page/order-history");
      setOrders(res.data);
    };
    OrderData();
  }, []);

  console.log(orders);

  return (
    <div className={styles.wrapper}>

      {orders.length === 0 ? (
        <div>구매내역이 없습니다.</div>
      ) : (
        orders.map((order) => {
          const statusClass =
            order.order_status === "배송중"
              ? styles.item_statusinprogress
              : order.order_status === "배송완료"
              ? styles.item_statuscompleted
              : "";
          return (
            <div key={order.order_id} className={styles.item_wrapper}>
              <div
                onClick={() => toggleAccordion(order.order_id)}
                className={styles.item_info}
              >
                <p className={styles.item_infotitle}>
                  주문번호({order.order_id}) - {order.order_at}
                </p>
                <div className={styles.item_infoship}>
                  <div className={styles.item_shipdetail}>
                    <div>배송지</div>
                    <div>{order.ship}</div>
                  </div>
                  <div className={styles.item_shipdetail}>
                    <div>주문 요청</div>
                    <div>{order.order_request}</div>
                  </div>
                  <div className={styles.item_shipdetail}>
                    <div>총 금액</div>
                    <div>{order.order_total_price}원</div>
                  </div>
                  <div className={styles.item_shipdetail}>
                    <div>배송상태</div>
                    <div className={statusClass}>{order.order_status}</div>
                  </div>
                </div>
              </div>
              {activeOrderId === order.order_id && (
                <OrderDetails order={order} />
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrderItem;
