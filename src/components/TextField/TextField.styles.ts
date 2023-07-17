import { css, styled } from "styled-components";
import {
  IInputContainerStyledProps,
  IInputHelperTextStyledProps,
  IInputStyledProps,
} from "./TextField.interfaces";

const InputStyled = styled.input<IInputStyledProps>`
  ${({ theme, $withError }) => css`
    width: calc(100% - 24px);
    height: 35px;
    border-radius: 6px;
    border: 2px solid;
    padding: 5px 10px;
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize};
    outline: none;

    &::placeholder {
      opacity: 0.8;
    }

    &:disabled {
      border-color: ${theme.color.gray};
      background-color: ${theme.color.lightGray};
    }

    ${$withError
      ? css`
          color: ${theme.color.danger};
          border-color: ${theme.color.danger};
        `
      : css`
          border-color: ${theme.color.lightGray};

          &:valid {
            border-color: ${theme.color.gray};
          }
        `}
  `}
`;

const InputContainerStyled = styled.div<IInputContainerStyledProps>`
  ${({ $disabled, $fullWidth }) => css`
    width: ${$fullWidth ? "100%" : "230px"};

    ${$disabled &&
    css`
      opacity: 0.5;
    `}
  `}
`;

const InputLabelStyled = styled.label`
  ${({ theme }) => css`
    margin-bottom: 10px;
    width: 100%;
    font-family: ${theme.fontFamily};
    font-weight: bold;
    display: block;
  `}
`;

const InputHelperTextStyled = styled.span<IInputHelperTextStyledProps>`
  ${({ theme, $withError }) => css`
    font-family: ${theme.fontFamily};
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    width: 100%;
    display: block;
    color: ${$withError ? theme.color.danger : theme.color.black};
  `}
`;

export {
  InputContainerStyled,
  InputHelperTextStyled,
  InputLabelStyled,
  InputStyled,
};
