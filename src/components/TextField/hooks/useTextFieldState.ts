import { ITextFieldProps } from "../TextField.interfaces";
import { IUseTextFieldState } from "./useTextFieldState.interfaces";

const useTextFieldState = (props: ITextFieldProps): IUseTextFieldState => {
  const { label, helperText } = props;
  const withLabel = label !== undefined;
  const withHelperText = helperText !== undefined;

  return {
    withLabel,
    withHelperText,
    ...props,
  };
};

export { useTextFieldState };
