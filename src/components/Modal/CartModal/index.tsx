import * as S from "./styles";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ModalProps } from "../../../utils/@types";
import { Button, CartCard } from "../../index";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  ICartState,
  removeItem,
  changeItemQuantity,
  cleanCart,
  calculateTotal,
} from "../../../redux/useCart/actions";
import { useDispatch } from "react-redux";
import { numberFormatter } from "../../../utils/formats";

export const CartModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: { cart: ICartState }) => state.cart.items
  );

  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Container>
        <div className="box-of-tittle-and-contents">
          <div className="cart-title">
            <p>Carrinho de compras</p>
            <AiOutlineCloseCircle onClick={() => onRequestClose()} />
          </div>
          <div className="cards-box">
            {cartItems.map((event) => (
              <CartCard
                quantity={event.quantity}
                key={event.id}
                name={event.name}
                photo={event.photo}
                price={event.price}
                handleRemove={() => dispatch(removeItem(event.id))}
                handleIncrementQuantity={() =>
                  dispatch(
                    changeItemQuantity({
                      id: event.id,
                      type: "increase",
                      price: event.price,
                    })
                  )
                }
                hadnelDecrementQuantity={() =>
                  dispatch(
                    changeItemQuantity({
                      id: event.id,
                      type: "decrease",
                      price: event.price,
                    })
                  )
                }
              />
            ))}
          </div>
        </div>
        <div className="cart-actions">
          <div className="total">
            <p>Total:</p>
            <p>{numberFormatter.format(Number(total ?? 0))}</p>
          </div>
          <Button
            onClick={() => {
              dispatch(cleanCart());
              setTimeout(() => {
                onRequestClose();
              }, 2000);
            }}
          >
            Finalizar Compra
          </Button>
        </div>
      </S.Container>
    </Modal>
  );
};
