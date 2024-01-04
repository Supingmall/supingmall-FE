import styled from "@emotion/styled";

export const SignInContainer = styled.main`
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;

export const SignInBox = styled.div`
  width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 2.5rem 3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: #c79be2;
`;

export const SignInLogo = styled.h1`
  margin-bottom: 50px;
  font-weight: 900;
  font-size: 3rem;
`;

export const SignInForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: black;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
