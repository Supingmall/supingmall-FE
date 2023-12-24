import React from 'react';
import StarPoint from '../common/starpoint/StarPoint';
import style from './DetailReview.module.css'
interface Rviews {
    review_id: number,
    user_id: number,
    product_id: number,
    nick_name: string,
    review_contents: string,
    create_at: string,
    score: number
}
/**
 * props로 reviewlist를 전달받아야 합니다.
 */
interface DetailReviewProps {
    reviewlist: Rviews[];
}

const DetailReview: React.FC<DetailReviewProps> = ({ reviewlist }) => {
    const year = new Date(reviewlist[0].create_at).getFullYear()
    const month = new Date(reviewlist[0].create_at).getMonth()
    const day = new Date(reviewlist[0].create_at).getDay()
    const date = `${year}-${month}-${day}`

    return (
        <div >
            {reviewlist.map((review) => (
                <div key={review.review_id} className={style["review_container"]}>
                    <div className={style["nickname"]}>{review.nick_name}</div>
                    <div>
                        <div>{review.review_contents}</div>
                        <div>
                            <div>
                                <StarPoint starPoint={review.score} />
                            </div>
                            <div>{date}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DetailReview;