import { ReactNode } from "react";

export interface IStyledButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    background?: string;
    height?: string;
    width?: string;
    color?: string;
    margin?: string;
    handleClick?: () => void;
    borderRadius?: string;
}

export interface IButtonsProps extends IStyledButton {
    children: ReactNode;
    className?: string;
}