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
