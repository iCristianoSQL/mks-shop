import { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/colors';
 
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }
  
  html {
    @media(max-width: 1099px){
      font-size: 93.75%;
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }

    background: ${colors.primary[0]};
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${colors.primary[0]};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: ${colors.texts[0]};
  }

  p, span, li {
    color: ${colors.texts[0]};
  }

  button {
    border: none;
    cursor: pointer;
  }

  input, textarea {
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: none;
    background: none;
    transition: background-color 5000s ease-in-out 0s;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 660px;
        background: ${colors.secondary[0]};
        padding: 1.8rem;
        position: relative;
        border-radius: 0.25rem;
        outline: none;
        box-shadow: none;
        border-radius: 10px;


        @media (max-width: 730px) {
          width: 90%;
          padding: 0.8rem;
        }
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;