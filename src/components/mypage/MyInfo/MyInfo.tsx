"use client";
import React from "react";
import styles from "./MyInfo.module.css";
import UserProfile from "../UserProfile/UserProfile";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/userState";

const MyInfo = () => {
  const userInfo = useRecoilValue(userState);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>내 정보</div>
        <div className={styles.profile_box}>
          <div>
            <UserProfile imgUrl="https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758_640.jpg" />
          </div>
          <div className={styles.profile_nickname}>{userInfo.username}</div>
        </div>
        <div>
          <div>이메일 : 확인요망</div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
