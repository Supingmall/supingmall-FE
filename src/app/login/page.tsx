"use client";

import useInputs from "@/hooks/useInputs";
import * as S from "./page.styles";
import { client } from "../apis";
import { parseJwt } from "@/utils/parseJwt";
import { getItem } from "@/utils/localStorage";
import { useSetRecoilState } from "recoil";
import { userState } from "@/store/userState";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { JoinInput, ErrBox, JoinButton } from "../join/page.styles";

export interface userInfoProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { form, onChange: inputChangeHandler } = useInputs<userInfoProps>({
    email: "",
    password: "",
  });

  //   const isValid = validateEmail(form.email) && validatePassword(form.password);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setIsError(true);
      setErrorMsg("모든 정보를 입력해주세요.");
      return;
    }
    const res: any = await client.post("/v1/api/auth/login", {
      email_or_phone_number_or_nick_name: form.email,
      password: form.password,
    });
    if (res.status === 200) {
      const username = res.data.split("님 환영합니다.")[0].replace(/"/g, "");
      const token = getItem<string>("Token");
      if (token) {
        const userInfo = parseJwt(token);
        const role = userInfo.roles.includes("ROLE_ADMIN") ? "ADMIN" : "USER";
        setUser({
          username,
          role,
        });
        router.push("/");
      }
    } else if (res.response.status === 404 || 401 || 423 || 403) {
      setIsError(true);
      setErrorMsg(res.response.data.message);
    }
  };

  return (
    <>
      <S.SignInContainer>
        <S.SignInBox>
          <S.SignInLogo>로그인</S.SignInLogo>
          <S.SignInForm onSubmit={submitHandler}>
            <div>
              <label htmlFor="email">ID</label>
              <JoinInput
                onChange={inputChangeHandler}
                value={form.email}
                name="email"
                id="email"
                type="email"
                placeholder="아이디를 입력해주세요."
              />
            </div>
            <div>
              <label htmlFor="password">PW</label>
              <JoinInput
                onChange={inputChangeHandler}
                value={form.password}
                name="password"
                id="password"
                type="password"
                placeholder="패스워드를 입력해주세요."
              />
            </div>
            <ErrBox>{isError && <>{errorMsg}</>}</ErrBox>
            <JoinButton>로그인</JoinButton>
          </S.SignInForm>
        </S.SignInBox>
      </S.SignInContainer>
    </>
  );
};

export default LoginPage;
