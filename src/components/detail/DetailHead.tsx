"use client"

import Counter from "../common/counter/Counter"
import "./DetailHead.css"

const DetailHead = () => {
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
                    {/* 별점 컴포넌트로 대체 */}
                    <div>
                        별표 평점 평가하는곳
                    </div>
                    <div>
                        200,000원
                    </div>
                    {/* 셀렉터 컴포넌트로 대체 */}
                    <div>
                        색상<select>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                        </select>
                    </div>
                    {/* 사이즈 컴포넌트로 대체 */}
                    <div>
                        사이즈
                        {/* 신발일떄 */}
                        <select>
                            <option value="220">220</option>
                            <option value="230">230</option>
                            <option value="240">240</option>
                            <option value="250">250</option>
                            <option value="260">260</option>
                            <option value="270">270</option>
                            <option value="280">280</option>
                            <option value="290">290</option>
                            <option value="300">300</option>
                        </select>
                        {/* 옷일때 */}
                        <select>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                        </select>
                    </div>
                    {/* 맥스는 재고수량까지 */}
                    <Counter width={"500px"} height={"20px"} />
                    {/* 버튼들 */}
                    <div className='detail-head__buttonbox'>
                        <button>구매하기</button>
                        <button>장바구니</button>
                    </div>
                </div>
            </div>
            {/* 제품설명 상세이미지 */}
            <div className='detail-body__deatil_image_container'>
                <img className='detail-body__deatil_image' src="/detailpage/detailimage.jpeg" alt="" />
            </div>
        </div >
    );
};

export default DetailHead;