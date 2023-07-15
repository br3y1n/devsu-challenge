"use client";
import { openSans } from "@fonts";
import { VariantEnum } from "@enums";
import { styled } from "styled-components";

const Button = styled.button<{ variant: VariantEnum }>`
  font-family: ${openSans.style.fontFamily};
  padding: 20px 25px;
  border: none;
  color: #0a225c;
  font-weight: bold;
  background-color: ${(props) =>
    props.variant === VariantEnum.PRIMARY ? "#ffdf00" : "#f0f0f0"};
  border-radius: 5px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      props.variant === VariantEnum.PRIMARY ? "#f0d000" : "#e4e4e4"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: no-drop;
  }
`;

export default Button;
