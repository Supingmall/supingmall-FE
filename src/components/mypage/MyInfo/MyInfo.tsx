"use client";
import React, { useEffect } from "react";
import styles from "./MyInfo.module.css";
import UserProfile from "../UserProfile/UserProfile";
import { client } from "../../../app/apis";
import { useRecoilState } from "recoil";
import { mydataAtom } from "@/store/MypageAtom";

const MyInfo = () => {
  const [data, setData] = useRecoilState(mydataAtom);

  useEffect(() => {
    const MyData = async () => {
      try {
        const response = await client.get("/v1/api/account/my-page");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    MyData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>내 정보</div>
        <div className={styles.profile_box}>
          <div>
            <UserProfile
              imgUrl={
                data.image_url && data.image_url !== "url"
                  ? data.image_url
                  : "/mypage/mydefault.svg"
              }
            />
          </div>
          <div className={styles.profile_nickname}>{data.nick_name}</div>
        </div>
        <div>
          <div>이메일 : {data.email}</div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
