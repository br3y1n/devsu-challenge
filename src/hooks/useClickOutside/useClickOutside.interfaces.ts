import { RefObject } from "react";

interface IUseClickOutSideProps {
  onClickOutside: () => void;
}

interface IUseClickOutSide<T> {
  ref: RefObject<T>;
}

export type { IUseClickOutSide, IUseClickOutSideProps };
