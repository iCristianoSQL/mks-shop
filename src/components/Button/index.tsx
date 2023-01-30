import * as S from "./styles";
import { IButtonsProps } from "./types";

export const Button = ({
  children,
  background,
  className,
  color,
  height,
  width,
  margin,
  handleClick,
  ...rest
}: IButtonsProps) => {
  return (
    <S.Button
      height={height}
      width={width}
      className={className}
      background={background}
      onClick={handleClick}
      color={color}
      margin={margin}
      {...rest}
    >
      {children}
    </S.Button>
  );
};
