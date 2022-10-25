import Image from "../../assets/pexels-karolina-grabowska-4199094.png";
import * as S from "./style";

export default function About() {
  return (
    <S.Container>
      <S.BoxImage>
        <img src={Image} />
      </S.BoxImage>
      <S.Content>
        <h1>About</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
          tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
          dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
          quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
          sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
          Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum
          nisl ante, et ultricies sapien facilisis aliquam.
        </p>
      </S.Content>
    </S.Container>
  );
}
