import styles from "./AddProductForm.module.css";

export default function AddProductForm() {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="">상품명</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">카테고리</label>
        <select>
          <option value="">상의</option>
          <option value="">하의</option>
          <option value="">신발</option>
        </select>
      </div>
      <div>
        <label htmlFor="">수량</label>
        <input type="number" className={styles.numberInput} />
      </div>
      <div>
        <label htmlFor="">메인 이미지</label>
        <input type="file" />
      </div>
      <div>
        <label htmlFor="">상세 이미지</label>
        <input type="file" />
      </div>
    </form>
  );
}
