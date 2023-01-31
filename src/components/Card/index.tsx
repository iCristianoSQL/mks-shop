import { Button } from "../Button";
import { BsBagCheck } from "react-icons/bs";
import * as S from "./styles";
import { truncateText } from "../../utils/formats";
import { ICard } from "./types";

interface IArr {
  photo: string;
  name: string;
  price: string;
  description: string;
}

export const Card = ({ photo, name, price, description }: ICard) => {
  let arrTest: any = [];

  const handleTesting = () => {
    arrTest.push({ photo, name, price, description });
    console.log("aqui", arrTest);
  };

  return (
    <S.Container>
      <div className="image-box">
        <img src={photo} alt={"Imagem do produto"} />
      </div>
      <div className="infos">
        <p>{name}</p>
        <span>R${price}</span>
      </div>
      <span>{truncateText(String(description), 100)}</span>
      <Button onClick={() => handleTesting()}>
        <BsBagCheck />
        Comprar
      </Button>
    </S.Container>
  );
};
