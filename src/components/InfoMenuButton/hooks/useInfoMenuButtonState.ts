import { useRef, useState } from "react";
import { IUseInfoMenuButtonState } from "./useInfoMenuButtonState.interfaces";

const useInfoMenuButtonState = (): IUseInfoMenuButtonState => {
  const ref = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevVal) => !prevVal);
  };

  const onClose = () => {
    setOpen(false);
  };

  return { toggleOpen, onClose, ref, open };
};

export { useInfoMenuButtonState };
