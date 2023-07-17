import { RefObject } from "react";

interface IItemMenu {
  text: string;
  onClick: () => void;
}

interface IMenuProps {
  items: IItemMenu[];
  anchorEl: RefObject<HTMLElement>;
  onClose: () => void;
}

export type { IMenuProps, IItemMenu };
