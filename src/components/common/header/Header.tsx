"use client";

import { useRecoilValue } from "recoil";
import * as S from "./Header.styles";
import { useSsrComplectedState, userState } from "@/store/userState";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSearchItem } from "@/app/apis/client/mainItem";

export default function Header() {
  const router = useRouter();
  const userInfo = useRecoilValue(userState);

  const [searchValue, setSearchValue] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("검색어:", searchValue);
    router.push(`/search?query=${searchValue}`);
  };
  const userInfoContent =
    userInfo.role === "" ? (
      <>
        <S.LinkButtonWhite href={"/login"}>로그인</S.LinkButtonWhite>
        <S.LinkButton href={"/join"}>회원가입</S.LinkButton>
      </>
    ) : (
      <>
        <S.UsernameText>
          {userInfo.username}
          <span>님</span>
        </S.UsernameText>
        <S.LinkButtonWhite href={"/mypage"}>마이페이지</S.LinkButtonWhite>
        <S.LinkButton href={"/logout"}>로그아웃</S.LinkButton>
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
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            onChange={onChangeInput}
            value={searchValue}
          />
          <button type="submit">검색</button>
        </form>
        <S.UserInfoBox>{userInfoContent}</S.UserInfoBox>
      </S.HeaderContainer>
    </>
  );
}
