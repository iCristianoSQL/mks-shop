import { Button } from "../Button";
import { BsBagCheck } from "react-icons/bs";
import { truncateText } from "../../utils/formats";
import { ICard } from "./types";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/useCart/actions";
import * as S from "./styles";

export const Card = ({
  photo,
  name,
  price,
  description,
  id,
  quantity,
  originalPrice,
}: ICard) => {
  const dispatch = useDispatch();

  const handleTesting = () => {
    const obj = {
      id: id ?? 0,
      quantity: quantity ?? 0,
      photo,
      name,
      price,
      originalPrice: originalPrice ?? 0,
    };
    dispatch(addItem(obj));
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
        COMPRAR
      </Button>
    </S.Container>
  );
};
