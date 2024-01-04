import React from "react";
import { CartItem as CartItemType, CartProductOption } from "@/store/CartAtom";
import styles from "./CartItem.module.css";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const renderOptions = (options: CartProductOption[]) => {
    return options.map((option) => (
      <div key={option.option_id} className={styles.option}>
        <p>
          색상: {option.color}, 사이즈: {option.size}
        </p>
        <p>가격: {option.price}</p>
        <p>수량: {option.quantity}</p>
      </div>
    ));
  };

  return (
    <div className={styles.cart_box}>
      <h3 className={styles.cart_title}>{item.product_name}</h3>
      <div className={styles.cart_itembox}>
        <div>
          {item.product_img[0] && (
            <img
              className={styles.cart_img}
              src={item.product_img[0]}
              alt={item.product_name}
            />
          )}
        </div>
        <div className={styles.options}>
          {renderOptions(item.product_option_response)}
        </div>
      </div>
      <div className={styles.cart_total_price}>
        <p>총 가격: {item.product_total_price} 원</p>
      </div>
    </div>
  );
};

export default CartItem;
