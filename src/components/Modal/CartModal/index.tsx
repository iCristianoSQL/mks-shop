import * as S from "./styles";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ModalProps } from "../../../utils/@types";
import { CartCard } from "../../index";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ICartState, removeItem } from "../../../redux/useCart/actions";
import { useDispatch } from "react-redux";

export const CartModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: { cart: ICartState }) => state.cart.items
  );

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Container>
        <div className="cart-title">
          <p>Carrinho de compras</p>
          <AiOutlineCloseCircle onClick={() => onRequestClose()} />
        </div>
        {cartItems.map((event) => (
          <CartCard
            handleRemove={() => handleRemoveItem(event.id)}
            key={event.id}
            name={event.name}
            photo={event.photo}
            price={event.price}
          />
        ))}
      </S.Container>
    </Modal>
  );
};
