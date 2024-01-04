import styled from "@emotion/styled";

export const SignUpContainer = styled.main`
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;

export const SignUpBox = styled.div`
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

export const SignUpLogo = styled.h1`
  margin-bottom: 50px;
  font-weight: 900;
  font-size: 3rem;
`;

export const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: black;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const JoinInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 1rem;
  border: 1px solid var(--main-color);
  &::placeholder {
    color: var(--main-color);
  }
`;

export const JoinRadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const JoinButton = styled.button`
  width: 100%;
  height: 5rem;
  background-color: #c79be2;
  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const ErrBox = styled.div`
  height: 2rem;
  color: red;
`;
