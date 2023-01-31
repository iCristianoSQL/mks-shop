import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
    width: 100%;
    height: 6rem;
    background: ${colors.primary[0]};
    border-radius: 8px;
    padding: 0 0.8rem;
    position: relative;
    margin-top: 28px;

    display: flex;
    align-items: center;
    gap: 10px;

    button {
        position: absolute;
        right: -10px;
        background: transparent;
        top: -10px;

        svg {
            font-size: 1.5rem;
            fill: ${colors.danger[0]};
        }
    }

    img {
        width: 5rem;
    }
    
    p {
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        width: 110px;
    }

    div {
        height: 40px;
        width: 50px;
        background: black;
    }

    span {
            background: ${colors.alternative[0]};
            color: ${colors.primary[0]};
            height: fit-content;
            padding: 4px;
            align-self: center;
            font-weight: 700;
            font-size: 15px;
            line-height: 15px;
            border-radius: 5px;
        }
`