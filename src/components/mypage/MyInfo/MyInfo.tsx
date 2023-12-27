"use client";
import React from "react";
import styles from "./MyInfo.module.css";
import { userInfo } from "../MyPageSideBar/MyPageSideBar";
import UserProfile from "../UserProfile/UserProfile";

const MyInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>내 정보</div>
        <div className={styles.profile_box}>
          <div>
            <UserProfile imgUrl={userInfo.image_url} />
          </div>
          <div className={styles.profile_nickname}>{userInfo.nick_name}</div>
        </div>
        <div>
          <div>이메일 : {userInfo.email}</div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
