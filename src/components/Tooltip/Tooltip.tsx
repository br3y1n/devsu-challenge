"use client";
import { cloneElement } from "react";
import { createPortal } from "react-dom";
import { ITooltipProps } from "./Tooltip.interfaces";
import { useTooltipState } from "./hooks/useTooltipState";
import { TooltipStyled } from "./Tooltip.styles";

const Tooltip = ({ content, children }: ITooltipProps) => {
  const { show, position, handleMouseEnter, handleMouseLeave } =
    useTooltipState();

  return (
    <>
      {cloneElement(children, {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}

      {show &&
        createPortal(
          <TooltipStyled style={{ top: position.top, left: position.left }}>
            {content}
          </TooltipStyled>,
          document.body,
        )}
    </>
  );
};

export default Tooltip;
