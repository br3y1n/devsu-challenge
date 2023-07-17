import { RefObject } from "react";
import { IItemMenu } from "../Menu.interfaces";

interface IContainerMenuData {
  top: number;
  left: number;
  width: number;
}

interface IUseMenuState {
  containerData: IContainerMenuData;
  items: IItemMenu[];
  ref: RefObject<HTMLUListElement>;
}

export type { IUseMenuState, IContainerMenuData };
