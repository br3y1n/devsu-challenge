import { MouseEvent } from "react";

interface ITooltipPosition {
  top: number;
  left: number;
}

interface IUseTooltipState {
  show: boolean;
  position: ITooltipPosition;
  handleMouseEnter: (event: MouseEvent<HTMLElement>) => void;
  handleMouseLeave: () => void;
}

export type { IUseTooltipState, ITooltipPosition };
