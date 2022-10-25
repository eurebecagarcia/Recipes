import { useState } from "react";
import * as S from "./style";
import RedVelvet from "../../assets/red-velvet.png";
import Margherita from "../../assets/margherita-pizza.png";
import Peanut from "../../assets/peanut-smoothie.png";
import Card from "../Card";

export default function LatestRecipes() {
  const [data, setData] = useState([
    {
      id: 1,
      image: RedVelvet,
      name: "Red Velvet Cake",
    },
    {
      id: 2,
      image: Margherita,
      name: "Margherita Pizza",
    },
    {
      id: 3,
      image: Peanut,
      name: "Peanut Smoothie",
    },
  ]);

  return (
    <S.Container>
      <h1>Latest Recipes</h1>
      <hr />
      <S.Content>
        <Card data={data} />
      </S.Content>
    </S.Container>
  );
}
