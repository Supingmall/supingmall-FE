"use client";
import React, { useEffect } from "react";
import styles from "./MyInfo.module.css";
import UserProfile from "../UserProfile/UserProfile";
<<<<<<< HEAD
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

=======
import { useRecoilValue } from "recoil";
import { userState } from "@/store/userState";

const MyInfo = () => {
  const userInfo = useRecoilValue(userState);
>>>>>>> 3afe3ba930eb393ef40174f2c02e376b0ae0b383
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>내 정보</div>
        <div className={styles.profile_box}>
          <div>
<<<<<<< HEAD
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
=======
            <UserProfile imgUrl="https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758_640.jpg" />
          </div>
          <div className={styles.profile_nickname}>{userInfo.username}</div>
        </div>
        <div>
          <div>이메일 : 확인요망</div>
>>>>>>> 3afe3ba930eb393ef40174f2c02e376b0ae0b383
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
