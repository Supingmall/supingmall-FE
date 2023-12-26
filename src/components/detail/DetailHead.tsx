"use client"

import { useRef, useState } from "react";
import Counter from "../common/counter/Counter"
import StarPoint from "../common/starpoint/StarPoint";
import Selector from "./Selector";
import DetailReview from "./DetailReview";
import style from "./DetailHead.module.css"

const DetailHead = ({ testData }: any) => {
    const option1 = useRef(null)
    const option2 = useRef(null)
    const option3 = useRef(null)


    const shoppingBasket = () => {
        console.log(option1.current.value)
        console.log(option2.current.value)
        console.log(option3.current.value)

    }
    if (testData) {
        return (
            <div className={style["detailpage"]}>
                <div className={style['detail-head__container']}>
                    <div className={style['detail-head__imagebox']}>
                        <img className={style['detail-head__image']} src="/detailpage/testimage.jpg" alt="product_img" />
                    </div>
                    <div className={style['detail-head__description_area']}>
                        <div >
                            <h2>제품이름</h2>
                        </div>
                        <div>
                            <div className={style["starpoint-container"]}>

                                평점 : {testData.scoreAvg} <StarPoint starPoint={testData.scoreAvg} setStarPoint={() => { }} />
                            </div>
                        </div>
                        <div>
                            가격 : {testData.productPrice}
                        </div>
                        <div>
                            색상
                            <Selector ref={option1} item={testData.productDetailList.map(item => item['color'])} />
                        </div>
                        {/* 사이즈 컴포넌트로 대체 */}
                        <div>
                            사이즈
                            <Selector ref={option2} item={testData.productDetailList.map(item => item['product_size'])} />
                        </div>
                        {/* 맥스는 재고수량까지 */}
                        <Counter ref={option3} width={"300px"} height={"40px"} />
                        {/* 버튼들 */}
                        <div className={style['detail-head__buttonbox']}>
                            <button>구매하기</button>
                            <button onClick={shoppingBasket}>장바구니</button>
                        </div>
                    </div>
                </div>
                <DetailReview reviewlist={testData.productReview} />
                {/* 제품설명 상세이미지 */}
                <div className={style['detail-body__deatil_image_container']}>
                    <img className={style['detail-body__deatil_image']} src="/detailpage/detailimage.jpeg" alt="" />
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