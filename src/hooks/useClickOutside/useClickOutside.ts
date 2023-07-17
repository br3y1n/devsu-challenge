import { useCallback, useEffect, useRef } from "react";
import {
  IUseClickOutSide,
  IUseClickOutSideProps,
} from "./useClickOutside.interfaces";

const useClickOutside = <T extends HTMLElement>({
  onClickOutside,
}: IUseClickOutSideProps): IUseClickOutSide<T> => {
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node))
      onClickOutside();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { ref };
};

export { useClickOutside };
