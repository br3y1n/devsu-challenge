"use client";
import { css, styled } from "styled-components";

const Input = styled.input<{ $withError?: boolean }>`
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

const Div = styled.div<{ $disabled?: boolean; $fullWidth?: boolean }>`
  ${({ $disabled, $fullWidth }) => css`
    width: ${$fullWidth ? "100%" : "230px"};

    ${$disabled &&
    css`
      opacity: 0.5;
    `}
  `}
`;

const Label = styled.label`
  ${({ theme }) => css`
    margin-bottom: 10px;
    width: 100%;
    font-family: ${theme.fontFamily};
    font-weight: bold;
    display: block;
  `}
`;

const Span = styled.span<{ $withError?: boolean }>`
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

const TextField = ({
  label,
  id,
  error,
  placeholder,
  helperText,
  disabled,
  fullWidth,
}: {
  id: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}) => {
  const withLabel = label !== undefined;
  const withHelperText = helperText !== undefined;

  return (
    <Div $disabled={disabled} $fullWidth={fullWidth}>
      {withLabel && <Label htmlFor={id}>{label}</Label>}

      <Input
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        $withError={error}
        required
      />

      {withHelperText && <Span $withError={error}>{helperText}</Span>}
    </Div>
  );
};

export default TextField;
