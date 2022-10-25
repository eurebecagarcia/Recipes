import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: #dfe4de;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #373737;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 30px;
  }

  h2 {
    color: #373737;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 35px;
  }

  input {
    width: 350px;
    height: 55px;
    padding: 0.8rem;
    background-color: #eff1ee;
    border: none;
  }

  ::-webkit-input-placeholder {
    color: #707070;
  }

  button {
    width: 140px;
    height: 45px;
    margin-top: 30px;
    border: 3px solid #373737;
    color: #373737;
    background: transparent;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }

  @media (max-width: 425px) {
    input {
      width: 90%;
    }
  }
`;
