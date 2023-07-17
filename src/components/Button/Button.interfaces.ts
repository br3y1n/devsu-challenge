import { VariantEnum } from "@enums";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: VariantEnum;
}

interface IButtonStyledProps {
  $variant: VariantEnum;
}

export type { IButtonProps, IButtonStyledProps };
