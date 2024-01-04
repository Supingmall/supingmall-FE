"use client"
import StarPoint from '@/components/common/starpoint/StarPoint';
import React, { useRef, useState } from 'react';
import styles from './ReviewModal.module.css'
import axios from 'axios';

interface ReviewModalProps {
    onClose: () => void;
    productid: number
}




const ReviewModal: React.FC<ReviewModalProps> = ({ onClose, productid }) => {
    const text = useRef("댓글을입력해주세요")
    const [star, setStar] = useState(1)
    const creatteRivew = async (productid: number) => {


        const url = `http://ec2-52-79-235-118.ap-northeast-2.compute.amazonaws.com:8080/v1/api/review/${productid}/createReview`
        const body = {
            "review_contents": text.current.value,  // 리뷰내용
            "score": star                  // 평점
        }
        await axios.post(url, body)
            .then((res) => {
                onClose()
                console.log(res)
            }
            )
            .catch((error) => console.log(error))

    }

    const [starPoint, setStarPoint] = useState(1)
    return (
        <div>
            <div>
                <div>
                    <textarea ref={text} name="" id="" cols={100} rows={5} placeholder='리뷰를입력해주세요'></textarea>
                    <div className={styles.displayflex}>
                        <StarPoint starPoint={star} setStarPoint={setStar}></StarPoint>
                        <button className={styles.button} onClick={() => { creatteRivew(productid) }}>등록하기</button>
                        <button className={styles.button} onClick={onClose}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;