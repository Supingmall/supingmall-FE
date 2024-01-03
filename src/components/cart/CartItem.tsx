import React, { useState } from "react";
import { CartItem as CartItemType, CartProductOption } from "@/store/CartAtom"; // CartItem 타입 가져오기

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  // 옵션별 수량 상태를 초기화합니다.
  const [quantities, setQuantities] = useState(
    item.cart_product_option_response.reduce((acc, option) => {
      acc[option.option_id] = option.quantity;
      return acc;
    }, {} as { [key: number]: number })
  );

  // 수량 변경 핸들러
  const handleQuantityChange = (optionId: number, newQuantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [optionId]: newQuantity,
    }));
  };

  // 옵션별 정보 및 수량 조절 입력 필드를 렌더링합니다.
  const renderOptions = (options: CartProductOption[]) => {
    return options.map((option) => (
      <div key={option.option_id}>
        <p>
          색상: {option.color}, 사이즈: {option.size}
        </p>
        <p>가격: {option.price}</p>
        <input
          type="number"
          value={quantities[option.option_id]}
          onChange={(e) =>
            handleQuantityChange(
              option.option_id,
              parseInt(e.target.value) || 0
            )
          }
        />
      </div>
    ));
  };

  return (
    <div className="card">
      <h3>{item.product_name}</h3>
      <div>
        {item.product_img.map((img, index) => (
          <img key={index} src={img} alt={item.product_name} />
        ))}
      </div>
      <div>{renderOptions(item.cart_product_option_response)}</div>
      <p>총 가격: {item.product_total_price}</p>
    </div>
  );
};

export default CartItem;
