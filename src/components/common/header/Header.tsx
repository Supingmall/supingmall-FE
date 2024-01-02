"use client";

import { useRecoilValue } from "recoil";
import * as S from "./Header.styles";
import { useSsrComplectedState, userState } from "@/store/userState";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const userInfo = useRecoilValue(userState);
  const userInfoContent =
    userInfo.role === "" ? (
      <>
        <Link href={"/login"}>로그인</Link>
        <Link href={"/join"}>회원가입</Link>
      </>
    ) : (
      <>
        <S.UsernameText>
          {userInfo.username}
          <span>님</span>
        </S.UsernameText>
        <Link href={"/mypage"}>마이페이지</Link>
        <Link href={"/logout"}>로그아웃</Link>
      </>
    );
  const setSsrCompleted = useSsrComplectedState();
  useEffect(setSsrCompleted, [setSsrCompleted]);
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderLogo
          onClick={() => {
            router.push("/");
          }}
        >
          SupingMall
        </S.HeaderLogo>
        <S.UserInfoBox>{userInfoContent}</S.UserInfoBox>
      </S.HeaderContainer>
    </>
  );
}
