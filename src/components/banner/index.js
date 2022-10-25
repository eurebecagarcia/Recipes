import imageBanner from "../../assets/header-banner.png";
import Header from "../header";
import * as S from "./style";

export default function Banner({ mobile }) {
  return (
    <S.ContainerBanner>
      <S.Container imagem={imageBanner}>
        <Header mobile={mobile} />
      </S.Container>
    </S.ContainerBanner>
  );
}
