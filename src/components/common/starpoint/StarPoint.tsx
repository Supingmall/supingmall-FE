"use client"
import { useState, useEffect } from "react";
import Style from "./StarPoint.module.css"

interface StarPointProps {
    starPoint: number;
    setStarPoint: (value: number) => void;
}


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