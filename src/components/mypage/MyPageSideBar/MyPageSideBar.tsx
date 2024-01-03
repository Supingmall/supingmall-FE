"use client";

import { useRecoilValue } from "recoil";
import UserMenu from "../UserMenu/UserMenu";
import UserProfile from "../UserProfile/UserProfile";
import styles from "./MyPageSideBar.module.css";
import { useSsrComplectedState, userState } from "@/store/userState";
import { useEffect } from "react";

export default function MyPageSideBar() {
  const setSsrCompleted = useSsrComplectedState();
  useEffect(setSsrCompleted, [setSsrCompleted]);
  const userInfo = useRecoilValue(userState);

  return (
    <aside className={styles.container}>
      <UserProfile
        imgUrl="https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758_640.jpg"
        nickname={userInfo.username}
      />
      <hr />
      <UserMenu userRole={userInfo.role} />
    </aside>
  );
}
