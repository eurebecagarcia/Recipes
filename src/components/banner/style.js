import styled from "styled-components";

export const ContainerBanner = styled.div`
  width: 100%;
  padding: 16px 14px;
`;

export const Container = styled.section`
  width: 100%;
  height: 1303px;
  background-size: cover;
  overflow: hidden;
  padding: 16px 14px;
  background-image: url(${({ imagem }) => imagem});

  @media (max-width: 768px) {
    height: 800px;
    background-position: 47rem;
  }
`;
