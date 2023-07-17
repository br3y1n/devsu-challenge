"use client";
import { ForwardedRef, forwardRef } from "react";
import { IButtonProps as IButtonProps } from "./Button.interfaces";
import { ButtonStyled } from "./Button.styles";

const Button = forwardRef(
  (
    { children, variant, ...otherProps }: IButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <ButtonStyled $variant={variant} ref={ref} {...otherProps}>
      {children}
    </ButtonStyled>
  ),
);

export default Button;
