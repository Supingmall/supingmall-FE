"use client"

import { useState } from "react";
import Counter from "../common/counter/Counter"
import StarPoint from "../common/starpoint/StarPoint";
import "./DetailHead.css"
import Selector from "./Selector";
import DetailReview from "./DetailReview";

const DetailHead = ({ testData }: any) => {

    if (testData) {
        return (
            <div className='detailpage'>
                <div className='detail-head__container'>
                    <div className='detail-head__imagebox'>
                        <img className='detail-head__image' src="/detailpage/testimage.jpg" alt="product_img" />
                    </div>
                    <div className='detail-head__description_area'>
                        <div >
                            <h2>제품이름</h2>
                        </div>
                        <div>
                            평점 : {testData.scoreAvg} <StarPoint starPoint={testData.scoreAvg} setStarPoint={() => { }} />
                        </div>
                        <div>
                            가격 : {testData.productPrice}
                        </div>
                        <div>
                            색상
                            <Selector item={testData.productDetailList.map(item => item['color'])} />
                        </div>
                        {/* 사이즈 컴포넌트로 대체 */}
                        <div>
                            사이즈
                            <Selector item={testData.productDetailList.map(item => item['product_size'])} />
                        </div>
                        {/* 맥스는 재고수량까지 */}
                        <Counter width={"300px"} height={"40px"} />
                        {/* 버튼들 */}
                        <div className='detail-head__buttonbox'>
                            <button>구매하기</button>
                            <button >장바구니</button>
                        </div>
                    </div>
                </div>
                <DetailReview reviewlist={testData.productReview} />
                {/* 제품설명 상세이미지 */}
                <div className='detail-body__deatil_image_container'>
                    <img className='detail-body__deatil_image' src="/detailpage/detailimage.jpeg" alt="" />
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