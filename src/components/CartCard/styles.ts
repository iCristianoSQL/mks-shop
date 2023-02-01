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

        @media (max-width: 420px) {
          display: none;
        }
    }
    
    p {
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        width: 110px;
    }

    div {
        height: 30px;
        width: 65px;
        background: transparent;
        border: 0.5px solid ${colors.alternative["0.1"]};
        border-radius: 10px;
        margin-right: 0.3rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        @media (max-width: 420px) {
            justify-content: space-between;
            gap: 0px;
            padding: 0 5px;
        }

        font-size: 1rem;

        b {
            cursor: pointer;
        }
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