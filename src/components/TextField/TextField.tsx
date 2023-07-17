"use client";
import { ITextFieldProps } from "./TextField.interfaces";
import {
  InputContainerStyled,
  InputHelperTextStyled,
  InputLabelStyled,
  InputStyled,
} from "./TextField.styles";
import { useTextFieldState } from "./hooks/useTextFieldState";

const TextField = (props: ITextFieldProps) => {
  const {
    withHelperText,
    withLabel,
    disabled,
    fullWidth,
    id,
    label,
    error,
    placeholder,
    helperText,
  } = useTextFieldState(props);

  return (
    <InputContainerStyled $disabled={disabled} $fullWidth={fullWidth}>
      {withLabel && <InputLabelStyled htmlFor={id}>{label}</InputLabelStyled>}

      <InputStyled
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        $withError={error}
        required
      />

      {withHelperText && (
        <InputHelperTextStyled $withError={error}>
          {helperText}
        </InputHelperTextStyled>
      )}
    </InputContainerStyled>
  );
};

export default TextField;
