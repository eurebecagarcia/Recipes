import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;

  @media (max-width: 666px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const BoxImage = styled.div`
  width: 50%;
  height: 700px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 666px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  h1 {
    font-size: 30px;
  }

  hr {
    width: 50px;
    height: 4px;
    background-color: #000;
  }

  p {
    width: 70%;
    margin-top: 50px;
  }

  @media (max-width: 666px) {
    width: 100%;
    padding-bottom: 15px;
  }
`;
