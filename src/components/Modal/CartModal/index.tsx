import * as S from "./styles";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ModalProps } from "../../../utils/@types";
import { CartCard } from "../../index";

export const CartModal = ({ isOpen, onRequestClose }: ModalProps) => {
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
        <CartCard />
      </S.Container>
    </Modal>
  );
};
