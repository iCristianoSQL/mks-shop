import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { numberFormatter } from "../../utils/formats";
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
        <b onClick={() => hadnelDecrementQuantity()}>-</b>
        {quantity}
        <b onClick={() => handleIncrementQuantity()}>+</b>
      </div>
      <span>{numberFormatter.format(Number(price))}</span>
    </S.Container>
  );
};
