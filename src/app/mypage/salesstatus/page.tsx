"use client";

import SalesTable from "@/components/mypage/SalesTable/SalesTable";
import styles from "./page.module.css";
import { useQuery } from "@tanstack/react-query";
import { getSellingProduct } from "@/app/apis/client/sales";
import Pagination from "react-js-pagination";
import { useEffect, useState } from "react";

export default function SalesStatus() {
  const { data } = useQuery({
    queryKey: ["salesProduct"],
    queryFn: getSellingProduct,
  });

  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  console.log("rendering");

  const filteredData = data?.slice((page - 1) * 5, (page - 1) * 5 + 5);

  console.log("filteredData", filteredData);
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>판매 현황</h2>
        <input />
        {/* 검색 창 들어갈 자리 */}
      </div>
      <SalesTable sales_status={filteredData} />
      {data && (
        <div className={styles.pagination}>
          <Pagination
            activePage={page} // 현재 페이지
            itemsCountPerPage={5} // 한 페이지랑 보여줄 아이템 갯수
            totalItemsCount={data.length} // 총 아이템 갯수
            pageRangeDisplayed={5} // paginator의 페이지 범위
            prevPageText={"‹"} // "이전"을 나타낼 텍스트
            nextPageText={"›"} // "다음"을 나타낼 텍스트
            onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
          />
        </div>
      )}
    </section>
  );
}
