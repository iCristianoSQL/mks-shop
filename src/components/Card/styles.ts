import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
    height: 19rem;
    width: 13.5rem;
    border-radius: 8px;
    background: ${colors.primary[0]};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    margin-top: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        border-radius: 0 0 10px 10px;

        svg {
            font-size: 15px;
            margin-right: 5px;
        }
    }
    
    .image-box {
        height: 60%;
        display: flex;
        flex-direction: column;

        img {
            width: 9rem;
            margin: auto;
        }
    }

    .infos {
        display: flex;
        padding: 0 6px;
        margin-top: 4px;
        justify-content: space-between;
        align-items: center;
        gap: 2px;

        p {
            font-weight: 600;
            font-size: 0.8rem;
            line-height: 19px;
            color: ${colors.texts[0]};
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
    }

        
        span {
            color: ${colors.texts[0]};
            padding: 0 8px;
            font-weight: 500;
            font-size: 0.6rem;
            line-height: 12px;
            margin: 8px 0;
        }
`