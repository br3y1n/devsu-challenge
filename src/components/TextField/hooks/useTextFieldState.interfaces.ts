import { ITextFieldProps } from "../TextField.interfaces";

interface IUseTextFieldState extends ITextFieldProps {
  withLabel: boolean;
  withHelperText: boolean;
}

export type { IUseTextFieldState };
