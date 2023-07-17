import { MouseEvent, useState } from "react";
import { ITooltipPosition, IUseTooltipState } from "./useTooltip.interfaces";

const useTooltipState = (): IUseTooltipState => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState<ITooltipPosition>({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
    const { top, left, height, width } = (
      event.target as HTMLElement
    ).getBoundingClientRect();

    setPosition({ top: top + height, left: left + width / 2 });
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return {
    show,
    position,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export { useTooltipState };
