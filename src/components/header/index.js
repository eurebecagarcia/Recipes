import * as S from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header({ mobile }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <S.ContainerHeader>
      {mobile ? (
        <S.MenuMobile>
          <AiOutlineMenu size={25} onClick={() => setOpenMenu(!openMenu)} />
          {openMenu && (
            <S.Menu openMenu={openMenu}>
              <ul>
                <li>About</li>
                <li>Recipes</li>
                <li>Subscribe</li>
              </ul>
            </S.Menu>
          )}
        </S.MenuMobile>
      ) : (
        <>
          <h1>RC</h1>
          <S.Menu>
            <ul>
              <li>About</li>
              <li>Recipes</li>
              <li>
                <button>Subscribe</button>
              </li>
            </ul>
          </S.Menu>
        </>
      )}
    </S.ContainerHeader>
  );
}
