"use client";

import useInputs from "@/hooks/useInputs";
import * as S from "./page.styles";
import { joinUser } from "../apis/client/user";
import { useRouter } from "next/navigation";

export interface JoinForm {
  email: string;
  name: string;
  phone_number: string;
  nick_name: string;
  password: string;
  address: string;
  image_url: null | string;
  gender: "남성" | "여성";
}

export default function Join() {
  const router = useRouter();
  const { form, onChange: inputChangeHandler } = useInputs<JoinForm>({
    email: "",
    name: "",
    phone_number: "",
    nick_name: "",
    password: "",
    address: "",
    image_url: null,
    gender: "남성",
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await joinUser(form);
    if (res.status === 200) {
      router.push("/login");
    }
  };

  return (
    <S.SignUpContainer>
      <S.SignUpBox>
        <S.SignUpLogo>회원가입</S.SignUpLogo>
        <S.SignUpForm onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">아이디</label>
            <input
              onChange={inputChangeHandler}
              value={form.email}
              name="email"
              id="email"
              type="email"
              placeholder="이메일 형식으로 입력해주세요."
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              onChange={inputChangeHandler}
              value={form.password}
              name="password"
              id="password"
              type="password"
              placeholder="영문, 숫자 조합 8~20자"
            />
          </div>
          <div>
            <label htmlFor="gender">성별</label>
            <div>
              <input
                type="radio"
                id="남성"
                name="gender"
                value="남성"
                onChange={inputChangeHandler}
                checked={form.gender === "남성"}
              />
              <label htmlFor="남성">남성</label>
              <input
                type="radio"
                id="여성"
                name="gender"
                value="여성"
                onChange={inputChangeHandler}
                checked={form.gender === "여성"}
              />
              <label htmlFor="여성">여성</label>
            </div>
          </div>
          <div>
            <label htmlFor="name">이름</label>
            <input
              onChange={inputChangeHandler}
              value={form.name}
              name="name"
              id="name"
              type="name"
              placeholder="이름을 입력해주세요."
            />
          </div>
          <div>
            <label htmlFor="nick_name">닉네임</label>
            <input
              onChange={inputChangeHandler}
              value={form.nick_name}
              name="nick_name"
              id="nick_name"
              type="nick_name"
              placeholder="닉네임을 입력해주세요."
            />
          </div>
          <div>
            <label htmlFor="phone_number">휴대전화번호</label>
            <input
              onChange={inputChangeHandler}
              value={form.phone_number}
              name="phone_number"
              id="phone_number"
              type="phone_number"
              placeholder="휴대전화번호를 입력해주세요."
            />
          </div>
          <div>
            <label htmlFor="address">주소</label>
            <input
              onChange={inputChangeHandler}
              value={form.address}
              name="address"
              id="address"
              type="address"
              placeholder="주소를 입력해주세요."
            />
          </div>
          <button>회원가입</button>
        </S.SignUpForm>
      </S.SignUpBox>
    </S.SignUpContainer>
  );
}
