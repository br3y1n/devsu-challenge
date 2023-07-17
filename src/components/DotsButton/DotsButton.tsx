"use client";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { DotStyled, DotsButtonContainerStyled } from "./DotsButton.styles";

const DotsButton = forwardRef(
  (
    props: ButtonHTMLAttributes<HTMLButtonElement>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <DotsButtonContainerStyled {...props} ref={ref}>
      <DotStyled />
      <DotStyled />
      <DotStyled />
    </DotsButtonContainerStyled>
  ),
);

export default DotsButton;
