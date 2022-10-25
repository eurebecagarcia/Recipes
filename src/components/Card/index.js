import * as S from "./style";

export default function Card({ data }) {
  return (
    <>
      {data.map((item) => (
        <S.Container key={item.id}>
          <img src={item.image} />
          <span>
            <hr />
            <p>{item.name}</p>
          </span>
        </S.Container>
      ))}
    </>
  );
}
