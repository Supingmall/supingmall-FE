import SalesTable from "@/components/mypage/SalesTable/SalesTable";
import styles from "./page.module.css";

export default function SalesStatus() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>판매 현황</h2>
        <input />
        {/* 검색 창 들어갈 자리 */}
      </div>
      <SalesTable />
    </section>
  );
}
