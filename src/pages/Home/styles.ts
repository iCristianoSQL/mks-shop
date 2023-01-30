import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    background: ${colors.primary[0]};

    section {
        margin: auto;
        width: 70rem;
        height: fit-content;
        padding: 0 4rem;
        
        display: flex;
        flex-wrap: wrap;
        gap: 1.3rem;
        justify-content: center;
    }

`