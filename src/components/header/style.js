import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px;

  @media (max-width: 768px) {
    padding: 0;
    justify-content: flex-end;
    align-items: flex-start;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: #373737;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 65px;
    justify-content: space-evenly;
    align-items: center;

    li {
      text-transform: uppercase;
      color: #373737;
      font-size: 18px;

      button {
        background-color: transparent;
        border: 1px solid #373737;
        width: 170px;
        height: 45px;
        font-size: 18px;
        color: #373737;
        text-transform: uppercase;
      }
    }
  }

  ${({ openMenu }) =>
    openMenu &&
    `
    ul{
      flex-direction: column;
      border: 1px solid #000;
      gap: 0px;
      width: 150px;
      position: absolute;
      top: 2rem;
      right: 1rem;
      li{
        width: 100%;
        font-size: 12px;
        border-bottom: 1px solid #000;
        padding: 10px 0;
        margin: 5px;
        text-align: center;

        :last-child{
          border: none;
        }
      }
    }
  `}
`;

export const MenuMobile = styled.div`
  position: relative;
`;
