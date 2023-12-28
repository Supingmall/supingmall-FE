import styled from "@emotion/styled";

export const SignInContainer = styled.main`
  width: 100%;
  /* height: calc(100vh - 150px); */
  padding-top: 40px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

export const SignInBox = styled.div`
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

export const SignInLogo = styled.h1`
  margin-bottom: 50px;
  font-weight: 900;
  font-size: 3rem;
`;

export const SignInForm = styled.form`
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

export const FontBox = styled.p``;

export const KakaoFontBox = styled(FontBox)`
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const LineDiv = styled.div`
  width: 147px;
  height: 1px;
  background: #9ba5b7;
`;
