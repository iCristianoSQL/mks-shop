import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled(motion.section)`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.cart-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-weight: 700;
        font-size: 27px;
        line-height: 33px;
        width: 11rem;
        color: ${colors.primary[0]}
    }

    svg {
        font-size: 2rem;
        fill: ${colors.primary[0]};
        cursor: pointer;
        
    }
}
`