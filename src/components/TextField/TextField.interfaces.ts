import { ChangeEventHandler } from "react";

interface ITextFieldProps {
  id: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

interface IInputHelperTextStyledProps {
  $withError?: boolean;
}
interface IInputStyledProps {
  $withError?: boolean;
}

interface IInputContainerStyledProps {
  $disabled?: boolean;
  $fullWidth?: boolean;
}

export type {
  ITextFieldProps,
  IInputHelperTextStyledProps,
  IInputContainerStyledProps,
  IInputStyledProps,
};
