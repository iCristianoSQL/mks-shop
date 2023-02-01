import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled(motion.section)`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

.box-of-tittle-and-contents {
    width: 100%;;
    overflow-x: hidden;
    
    .cart-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    
        p{
            font-weight: 700;
            font-size: 27px;
            line-height: 33px;
            width: 12rem;
            color: ${colors.primary[0]}
        }
    
        svg {
            font-size: 2rem;
            fill: ${colors.primary[0]};
            cursor: pointer;
            
        }
    }
    
    .cards-box {
        width: 100%;
        padding: 0 1.9rem;
    }
}


.cart-actions {
    width: 100%;
    margin-top: 0.7rem;
    background: transparent;

    display: flex;
    flex-direction: column;

    .total {
        display: flex;
        justify-content: space-between;
        margin: 0 1rem;
        
        p {
            color: ${colors.primary[0]};

            font-weight: 700;
            font-size: 1.4rem;
            line-height: 15px;
        }
    }
    
    button {
        height: 55px;
        width: 100%;
        background: ${colors.alternative[0]};
        font-weight: 700;
        font-size: 28px;
        line-height: 15px;
        color: ${colors.primary[0]};
        margin-top: 1rem;
        text-align: center;
    }
}
`