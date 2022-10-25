import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #f2f4f1;
  padding: 65px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  hr {
    width: 40px;
    height: 4px;
    background-color: #000;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 60px 0;
  flex-wrap: wrap;

  @media (max-width: 965px) {
    flex-direction: column;
    gap: 20px;
  }
`;
