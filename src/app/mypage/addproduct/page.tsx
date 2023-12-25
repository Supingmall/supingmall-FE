import AddProductForm from "@/components/mypage/AddProduct/AddProductForm";
import styles from "./page.module.css";

export default function AddProduct() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>상품 등록</h2>
      </div>
      <AddProductForm />
    </section>
  );
}
