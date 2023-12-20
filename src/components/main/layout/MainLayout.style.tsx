import styled from "@emotion/styled";
export const MainLayout = styled.div`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    .itemContainer {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .itemContainer {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media only screen and (max-width: 767px) {
    .itemContainer {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media only screen and (max-width: 500px) {
    .itemContainer {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
`;

export const HeaderWrap = styled.header`
  width: 100%;
  height: 80px;
  font-size: 2.4rem;
  border-bottom: 1px solid;
`;

export const ItemContainerWrap = styled.main`
  max-width: 1600px;
  width: 100%;
  padding: 10px 30px;
  margin: 0 auto;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;

  // desktop
  @media only screen and (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }

  // 노트북&테블릿 가로
  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // 테블릿 가로
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // 모바일 가로 & 테블릿 세로
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // 모바일 세로
  @media only screen and (max-width: 479px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
