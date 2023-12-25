"use client"

import { useState } from "react";
import Counter from "../common/counter/Counter"
import StarPoint from "../common/starpoint/StarPoint";
import "./DetailHead.css"
import Selector from "./Selector";
import testData from './test.json';
import DetailReview from "./DetailReview";

const productDetailList = testData.productDetailList
const productReview = testData.productReview

const DetailHead = () => {
    const [starPoint, setStarPoint] = useState(testData.scoreAvg)



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
                        평점 : {starPoint} <StarPoint starPoint={starPoint} setStarPoint={() => { }} />
                    </div>
                    <div>
                        가격 : {testData.productPrice}
                    </div>
                    <div>
                        색상
                        <Selector item={productDetailList.map(item => item['color'])} />
                    </div>
                    {/* 사이즈 컴포넌트로 대체 */}
                    <div>
                        사이즈
                        <Selector item={productDetailList.map(item => item['product_size'])} />
                    </div>
                    {/* 맥스는 재고수량까지 */}
                    <Counter width={"300px"} height={"40px"} />
                    {/* 버튼들 */}
                    <div className='detail-head__buttonbox'>
                        <button>구매하기</button>
                        <button onClick={장바구니}>장바구니</button>
                    </div>
                </div>
            </div>
            <DetailReview reviewlist={productReview} />
            {/* 제품설명 상세이미지 */}
            <div className='detail-body__deatil_image_container'>
                <img className='detail-body__deatil_image' src="/detailpage/detailimage.jpeg" alt="" />
            </div>
        </div >
    );
};

export default DetailHead;