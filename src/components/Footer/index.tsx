import * as S from "./styles";
import { IFooter } from "./types";

export const Footer = ({ footerText }: IFooter) => {
  return <S.Footer>{footerText}</S.Footer>;
};
