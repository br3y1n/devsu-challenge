import { css, styled } from "styled-components";
import { IButtonStyledProps } from "./Button.interfaces";

const ButtonStyled = styled.button<IButtonStyledProps>`
  ${({ theme, $variant }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize};
    padding: 20px 25px;
    border: none;
    color: ${theme.color.blue};
    font-weight: bold;
    background-color: ${theme.color[$variant]};
    border-radius: 5px;
    cursor: pointer;

    &:hover:not(:disabled) {
      mix-blend-mode: multiply;
    }

    &:disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }
  `}
`;

export { ButtonStyled };
