"use client";
import { createPortal } from "react-dom";
import { IMenuProps } from "./Menu.interfaces";
import { MenuContainerStyled, MenuItemStyled } from "./Menu.styles";
import { useMenuState } from "./hooks/useMenuState";

const Menu = (props: IMenuProps) => {
  const { containerData, items, ref } = useMenuState(props);

  return createPortal(
    <MenuContainerStyled
      ref={ref}
      style={{
        top: containerData.top,
        left: containerData.left,
        minWidth: containerData.width,
      }}
    >
      {items.map(({ onClick, text }, index) => (
        <MenuItemStyled key={index} onClick={onClick}>
          {text}
        </MenuItemStyled>
      ))}
    </MenuContainerStyled>,
    document.body,
  );
};

export default Menu;
