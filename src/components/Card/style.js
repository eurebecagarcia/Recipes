import styled from "styled-components";

export const Container = styled.div`
  height: 550px;
  width: 320px;
  box-shadow: 0 7px 6px #00000029;
  background: #fff;

  span {
    width: 100%;
    height: calc(100% / 2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;

    p {
      color: #373737;
      font-size: 22px;
      margin-top: 30px;
    }

    hr {
      width: 40px;
      height: 4px;
      background-color: #000;
    }
  }

  img {
    width: 100%;
    height: calc(100% / 2);
  }
`;
