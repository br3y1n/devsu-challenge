interface ITextFieldProps {
  id: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
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
