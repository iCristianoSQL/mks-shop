import { useState, useCallback } from "react";
import { CartModal } from "../../components";

import * as S from "./styles";

import { BsCartFill } from "react-icons/bs";
import { store } from "../../redux/store";
import { useSelector } from "react-redux/es/exports";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleModal = useCallback((value: boolean) => {
    setOpen(value);
  }, []);

  const cartCount = useSelector((state: any) => state.cart.items.length);

  return (
    <S.Header>
      <S.LogoBox>
        <strong>MKS</strong>
        <p>Sistemas</p>
      </S.LogoBox>
      <S.Navigation>
        <BsCartFill onClick={() => handleModal(true)} />
        <span>{cartCount}</span>
      </S.Navigation>
      <CartModal isOpen={open} onRequestClose={() => handleModal(false)} />
    </S.Header>
  );
};
