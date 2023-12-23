"use client"
import { useState, useEffect } from "react";
import Style from "./StarPoint.module.css"

interface StarPointProps {
    starPoint: number;
    setStarPoint: (value: number) => void;
}

/**
 * 별점을 클릭하여 평점을 매길 수 있는 StarPoint 컴포넌트입니다.
 * `starPoint` prop은 현재 선택된 별점을 나타내고, `setStarPoint` prop은 선택된 별점을 설정하는 함수입니다.
 * 사용될 부모 컴포넌트에서 starPoint의 상태를 만들어주고 초기값을 1 넣어주세요
 */

const StarPoint: React.FC<StarPointProps> = ({ starPoint, setStarPoint }) => {

    const starPointHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        let id = Number(e.currentTarget.id)
        setStarPoint(id)
    }
    return (
        <div>
            <div className={Style["star_wrap"]}>
                <div className={Style["star_wrap"]}>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} onClick={starPointHandler} id={value.toString()}>
                            <img className={Style["star"]} src={starPoint >= value ? "/detailpage/star_after.svg" : "/detailpage/star_before.svg"} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default StarPoint;