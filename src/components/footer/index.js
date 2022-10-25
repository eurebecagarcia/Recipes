import Instagram from "../../assets/Instagram Ellipse.svg";
import Twitter from "../../assets/Twitter ellipse.svg";
import Facebook from "../../assets/Facebook Ellipse.svg";
import Pinterest from "../../assets/Pinterest Ellipse.svg";

import * as S from "./style";

export default function Footer() {
  return (
    <S.ContainerFooter>
      <S.BoxFooter>
        <span>
          <img src={Instagram} />
          <img src={Twitter} />
          <img src={Facebook} />
          <img src={Pinterest} />
        </span>
        <S.MenuFooter>
          <p>About</p>
          <p>Recipes</p>
          <p>Subscribe</p>
        </S.MenuFooter>
      </S.BoxFooter>
      <S.ExclusiveRights>
        <p>
          Layout produzido por Vai na Web para fins exclusivamente educacionais.
        </p>
      </S.ExclusiveRights>
    </S.ContainerFooter>
  );
}
