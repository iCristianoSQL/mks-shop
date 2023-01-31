import styled from "styled-components"
import { colors } from "../../utils/colors"

export const Header = styled.header`
    width: 100%;
    height: 100px;
    background: ${colors.secondary[0]};
    padding: 1.5rem 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 90px;
`

export const LogoBox = styled.div`
    width: fit-content;
    display: flex;

    strong {
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 19px;
        color: ${colors.primary[0]};
    }

    p {
        font-weight: 300;
        font-size: 1.25rem;
        line-height: 19px;
        margin-left: 5px;
        margin-top: 7px;
        color: ${colors.primary[0]};
    }
`

export const Navigation = styled.nav`
    height: 2.8rem;
    width: 5.6rem;
    border-radius: 8px;
    padding: 1rem;
    background: ${colors.primary[0]};

    display: flex;
    align-items: center;
    gap: 1rem;


    svg {
        fill: ${colors.alternative[0]};
        cursor: pointer;
        font-size: 1.4rem;

        &:hover {
            fill: ${colors.valid[0]}
        }
    }

    span {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
    }
`