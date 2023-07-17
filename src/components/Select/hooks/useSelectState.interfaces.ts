import { RefObject } from "react";
import { ISelectOption } from "../Select.interfaces";

interface IUseSelectState {
  toggleDropdown: () => void;
  ref: RefObject<HTMLDivElement>;
  selectedOption: ISelectOption;
  open: boolean;
  options: ISelectOption[];
  handleOptionSelect: (option: ISelectOption) => void;
}

export type { IUseSelectState };
