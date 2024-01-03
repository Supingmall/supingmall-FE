import StarPoint from '@/components/common/starpoint/StarPoint';
import React, { useState } from 'react';
import styles from './ReviewModal.module.css'

interface ReviewModalProps {
    onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ onClose }) => {
    const [starPoint, setStarPoint] = useState(1)
    return (
        <div>
            <form>
                <div>
                    <textarea name="" id="" cols={100} rows={5} placeholder='리뷰를입력해주세요'></textarea>
                    <div className={styles.displayflex}>
                        <StarPoint starPoint={starPoint} setStarPoint={setStarPoint}></StarPoint>
                        <button className={styles.button}>등록하기</button>
                        <button className={styles.button} onClick={onClose}>취소</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReviewModal;