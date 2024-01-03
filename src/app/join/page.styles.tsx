import styled from "@emotion/styled";

export const SignUpContainer = styled.main`
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpBox = styled.div`
  width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 5rem 3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: #c79be2;
`;

export const SignUpLogo = styled.h1`
  margin-bottom: 50px;
  font-weight: 900;
  font-size: 3rem;
`;

export const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
