import { useCallback, useEffect, useState } from "react";
import { IContainerMenuData, IUseMenuState } from "./useMenuState.interfaces";
import { IMenuProps } from "../Menu.interfaces";
import { useBodyStyle } from "@hooks/useBodyStyle/useBodyStyle";
import { useClickOutside } from "@hooks/useClickOutside/useClickOutside";

const useMenuState = ({
  items,
  anchorEl,
  onClose,
}: IMenuProps): IUseMenuState => {
  const [containerData, setContainerData] = useState<IContainerMenuData>({
    top: 0,
    left: 0,
    width: 0,
  });
  const itemsMapped = items.map((item) => ({
    ...item,
    onClick: () => {
      item.onClick();
      onClose();
    },
  }));

  const { ref } = useClickOutside<HTMLUListElement>({
    onClickOutside: onClose,
  });

  useEffect(() => {
    if (anchorEl.current !== null) {
      const { top, left, height, width } =
        anchorEl.current!.getBoundingClientRect();

      setContainerData({
        top: top + height,
        left: left + width / 2,
        width: width,
      });
    }
  }, []);

  useBodyStyle({ style: "overflow: hidden" });

  return { containerData, items: itemsMapped, ref };
};

export { useMenuState };
