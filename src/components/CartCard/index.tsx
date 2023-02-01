import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux/es/hooks/useSelector";
import * as S from "./styles";
import { ICartCard } from "./types";

export const CartCard = ({
  name,
  photo,
  price,
  quantity,
  handleRemove,
  handleIncrementQuantity,
  hadnelDecrementQuantity,
}: ICartCard) => {
  return (
    <S.Container>
      <button onClick={() => handleRemove()}>
        <MdDeleteForever />
      </button>
      <img src={photo} alt="Produto do carrinho" />
      <p>{name}</p>
      <div>
        <b onClick={() => handleIncrementQuantity()}>+</b>| {quantity} |
        <b onClick={() => hadnelDecrementQuantity()}>-</b>
      </div>
      <span>R${price}</span>
    </S.Container>
  );
};
