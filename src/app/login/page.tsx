"use client";

import { useSetRecoilState } from "recoil";

import useInputs from "@/hooks/useInputs";
import * as S from "./page.styles";
import { fetchExtended } from "../apis";
// import { userState } from "@/recoil/userState";
// import { theme } from "@/styles/theme";
// import { getItem } from "@/utils/localstorage";
// import { parseJwt } from "@/utils/parseJwt";
// TODO-YD: 버튼 활성화유지를 위해 잠시 주석처리
// import { validateEmail, validatePassword } from '@/utils/validate';

// const KAKAO_AUTH_CLIENTID = import.meta.env.VITE_KAKAO_AUTH_CLIENTID;
// const KAKAO_REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL;

export interface userInfoProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  // const navigate = useNav();
  //   const setUser = useSetRecoilState(userState);

  const { form, onChange: inputChangeHandler } = useInputs<userInfoProps>({
    email: "",
    password: "",
  });

  //   const isValid = validateEmail(form.email) && validatePassword(form.password);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetchExtended("/auth/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        email_or_phone_number_or_nick_name: form.email,
        password: form.password,
      }),
    });

    console.log(res);
    //   signIn(form).then((result) => {
    //     if (result.status === 200) {
    //       const accessToken = getItem<string>(localStorageKey.accessToken);
    //       if (accessToken) {
    //         const userData = parseJwt(accessToken);
    //         setUser({
    //           email: userData.sub,
    //           role: userData.auth,
    //         });
    //         navigate("/");
    //       }
    //     }
    //   });
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
