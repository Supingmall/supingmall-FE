import React from 'react';
import StarPoint from '../common/starpoint/StarPoint';
import style from './DetailReview.module.css'
interface Rviews {
    reviewId: number,
    userId: number,
    product_id: number,
    nickName: string,
    reviewContents: string,
    createAt: string,
    score: number


}
/**
 * props로 reviewlist를 전달받아야 합니다.
 */
interface DetailReviewProps {
    reviewlist: Rviews[];
}

const DetailReview: React.FC<DetailReviewProps> = ({ reviewlist }) => {


    return (
        <div >
            {reviewlist.map((review) => (
                <div key={review.reviewId} className={style["review_container"]}>
                    <div className={style["nickname"]}>{review.nickName}</div>
                    <div>
                        <div>{review.reviewContents}</div>
                        <div>
                            <div>
                                <StarPoint starPoint={review.score} setStarPoint={() => { }} />
                            </div>
                            <div>{review.createAt}</div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DetailReview;