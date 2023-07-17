import { RefObject } from "react";

interface IUseInfoMenuButtonState {
  toggleOpen: () => void;
  onClose: () => void;
  ref: RefObject<HTMLButtonElement>;
  open: boolean;
}

export type { IUseInfoMenuButtonState };
