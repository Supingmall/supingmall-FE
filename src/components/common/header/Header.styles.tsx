import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 8rem;
  background-color: white;
  border-bottom: 1px solid var(--main-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5rem;
  form {
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 3px 8px;
    box-sizing: border-box;
    border-radius: 5px;
    /* background-color: pink; */
    input {
      width: 300px;
      height: 40px;
      outline: none;
      border: none;
      background-color: transparent;
      padding-right: 12px;
    }
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      padding: 5px 10px;
      border-radius: 7px;
      transition: all 0.3s;
      :hover {
        background-color: #ddd;
      }
    }
  }
`;

export const HeaderLogo = styled.h1`
  font-size: x-large;
  cursor: pointer;
`;

export const UserInfoBox = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.6rem;
`;

export const UsernameText = styled.p`
  color: #bb00bb;
  > span {
    color: black;
  }
`;
