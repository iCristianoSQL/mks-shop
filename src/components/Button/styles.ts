import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

import { IStyledButton } from "./types";

export const Button = styled.button<IStyledButton>`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.8rem;
    transition: 0.5s;
    
    ${({ background, height, width, color, margin, borderRadius}) =>
        css`
            background: ${background ?? 'transparent'};
            height: ${height ?? '35px'};
            width: ${width ?? '100%'};
            color: ${color ?? colors.secondary[0]};
            margin-top: ${margin ?? '0px'};
            border-radius: ${borderRadius ?? '0'};
        `
    }

    &:hover {
        filter: brightness(0.6);
    }
`