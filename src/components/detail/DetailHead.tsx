"use client"

import { useRef, useState } from "react";
import Counter from "../common/counter/Counter"
import StarPoint from "../common/starpoint/StarPoint";
import Selector from "./Selector";
import DetailReview from "./DetailReview";
import style from "./DetailHead.module.css"
import SelectRadio from "../common/selectradio/SelectRadio";
import { shoppingBasketAPI } from "@/app/apis/detailageApi";
import { url } from "inspector";
import axios from "axios";

const DetailHead = ({ testData }: any) => {
    console.log(testData)
    const [selectOptionId, setSelectOptionId] = useState<number | null>(null)
    const amount = useRef<HTMLInputElement | null>(null)
    const shoppingBasket = async () => {
        try {
            const cleanToken = (token: string | null) => {
                return token ? token.replace(/["']/g, '') : null;
            }
            const token = cleanToken(window.localStorage.getItem("Token"));
            const body = {
                "product_option_id": selectOptionId,
                "add_amount": Number(amount.current?.value),
            }
            const url = `http://ec2-52-79-235-118.ap-northeast-2.compute.amazonaws.com:8080/v1/api/cart`
            // const url = `15.164.96.117:8080/v1/api/cart`
            const response = await shoppingBasketAPI(url, body, token)
            console.log(response);
            console.log(response.data);
        } catch (error) {
            console.error('Error', error);
        }
    }

    if (testData) {
        return (
            <div className={style["detailpage"]}>
                <div className={style['detail-head__container']}>
                    <div className={style['detail-head__imagebox']}>
                        <img className={style['detail-head__image']} src={testData.productPhoto
                        [0].photo_url} alt="product_img" />
                    </div>
                    <div className={style['detail-head__description_area']}>
                        <div >
                            <h2>{testData.productName}</h2>
                        </div>
                        <div>
                            <div className={style["starpoint-container"]}>
                                평점 : {testData.scoreAvg} <StarPoint starPoint={testData.scoreAvg} setStarPoint={() => { }} />
                            </div>
                        </div>
                        <div>
                            가격 : {testData.productPrice}
                        </div>
                        {/* 옵션선택 라디오컴포넌트  */}
                        <SelectRadio optionList={testData.productDetailList} option={setSelectOptionId} />

                        {/* 맥스는 재고수량까지 */}
                        <Counter ref={amount} width={"300px"} height={"40px"} />
                        {/* 버튼들 */}
                        <div className={style['detail-head__buttonbox']}>
                            <button onClick={shoppingBasket}>장바구니</button>
                        </div>
                    </div>
                </div>
                <DetailReview reviewlist={testData.productReview} />
                {/* 제품설명 상세이미지 */}
                <div className={style['detail-body__deatil_image_container']}>
                    <img className={style['detail-body__deatil_image']} src={testData.productPhoto
                    [1].photo_url} alt="" />
                </div>
            </div >
        );
    } else {
        return (
            <>
                데이터안옴
            </>
        )
    }
};

export default DetailHead;