import Link from "next/link";
import styles from "./UserMenu.module.css";

type UserMenuProps = {
  userRole: string;
};

export default function UserMenu({ userRole }: UserMenuProps) {
  return (
    <div className={styles.container}>
      <Link href={"/mypage"}>내 정보</Link>
      {/* {userRole === "ROLE_USER" ? (
        <>
          <Link href={"/mypage/purchasehistory"}>구매 내역</Link>
        </>
      ) : (
        <>
          <Link href={"/mypage/salesstatus"}>판매 현황</Link>
          <Link href={"/mypage/addproduct"}>상품 등록</Link>
        </>
      )} */}
      <Link href={"/mypage/purchasehistory"}>구매 내역</Link>
      <Link href={"/mypage/salesstatus"}>판매 현황</Link>
      <Link href={"/mypage/addproduct"}>상품 등록</Link>
    </div>
  );
}
// TODO-YD : userRole 나오면 바꿔줘야함. 스타일 수정 필요
