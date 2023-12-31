"use client";

import useInputs from "@/hooks/useInputs";
import * as S from "./page.styles";
import { client } from "../apis";
import { parseJwt } from "@/utils/parseJwt";
import { getItem } from "@/utils/localStorage";
import { useSetRecoilState } from "recoil";
import { userState } from "@/store/userState";

export interface userInfoProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const setUser = useSetRecoilState(userState);
  const { form, onChange: inputChangeHandler } = useInputs<userInfoProps>({
    email: "",
    password: "",
  });

  //   const isValid = validateEmail(form.email) && validatePassword(form.password);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await client.post("/v1/api/auth/login", {
      email_or_phone_number_or_nick_name: form.email,
      password: form.password,
    });

    console.log(res);
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
      }
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
              <input
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
              <input
                onChange={inputChangeHandler}
                value={form.password}
                name="password"
                id="password"
                type="password"
                placeholder="패스워드를 입력해주세요."
              />
            </div>
            <button>로그인</button>
          </S.SignInForm>
        </S.SignInBox>
      </S.SignInContainer>
    </>
  );
};

export default LoginPage;
