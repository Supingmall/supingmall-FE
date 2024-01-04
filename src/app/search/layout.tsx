import MyPageSideBar from "@/components/mypage/MyPageSideBar/MyPageSideBar";
import styles from "./layout.module.css";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={styles.wrapper}>{children}</main>;
}
