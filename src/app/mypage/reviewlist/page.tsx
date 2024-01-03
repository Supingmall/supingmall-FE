"use client"

// // 필요한 라이브러리 및 모듈 임포트
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // 리뷰 목록을 보여주는 컴포넌트
// const ReviewList: React.FC = () => {
//     const [reviews, setReviews] = useState([]);

//     const cleanToken = (token: string | null) => {
//         // 만약 토큰이 존재하고 문자열이라면 따옴표를 제거하여 반환
//         return token ? token.replace(/["']/g, '') : null;
//     };
//     useEffect(() => {

//         const token = cleanToken(window.localStorage.getItem("Token"));
//         console.log(token)
//         console.log(typeof token)
//         const headers = {
//             token: token
//         };
//         // 리뷰 목록을 조회하는 API 호출
//         axios.get('http://ec2-52-79-235-118.ap-northeast-2.compute.amazonaws.com:8080/v1/api/review/list', { headers })
//             .then(response => {
//                 setReviews(response.data);
//                 console.log(response)
//             })
//             .catch(error => {
//                 console.error('Error fetching reviews:', error);
//             });
//     }, []);


//     return (
//         <div>
//             <h1>리뷰목록</h1>
//             <ul>
//                 {/* 리뷰 목록에 따른 JSX 표시를 추가하세요 */}
//             </ul>
//         </div>
//     );
// };

// export default ReviewList;



import { getRivewAPI } from '@/app/apis/review'
import React from 'react'

const page = () => {
    const cleanToken = (token: string | null) => {
        return token ? token.replace(/["']/g, '') : null
    };
    const token = cleanToken(window.localStorage.getItem("Token"))
    const url = "http://ec2-52-79-235-118.ap-northeast-2.compute.amazonaws.com:8080/v1/api/review/list"
    getRivewAPI(url, token)
        .then(res => console.log(res))

    return (
        <div>

        </div>
    );
};

export default page;