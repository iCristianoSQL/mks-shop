import * as S from "./styles";

import { BsCartFill } from "react-icons/bs";

export const Header = () => {
  return (
    <S.Header>
      <S.LogoBox>
        <strong>MKS</strong>
        <p>Sistemas</p>
      </S.LogoBox>
      <S.Navigation>
        <BsCartFill />
        <span>0</span>
      </S.Navigation>
    </S.Header>
  );
};
