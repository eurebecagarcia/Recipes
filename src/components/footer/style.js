import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  flex-direction: column;
  justify-content: center;

  img {
    margin-right: 10px;
  }

  @media (max-width: 387px) {
    img {
      width: 30px;
    }
  }
`;

export const BoxFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  @media (max-width: 666px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
`;

export const MenuFooter = styled.nav`
  display: flex;
  font-size: 20px;
  font-family: "Playfair Display";
  gap: 50px;

  @media (max-width: 666px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 387px) {
    font-size: 18px;
  }
`;
export const ExclusiveRights = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #446061;
  padding: 8px 0;
  justify-content: center;
  color: #fff;
  font-size: 14px;

  p {
    width: 90%;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 10px;
    padding: 15px;
  }

  @media (max-width: 468px) {
    font-size: 8px;
  }

  @media (max-width: 387px) {
    font-size: 7px;
  }
`;
