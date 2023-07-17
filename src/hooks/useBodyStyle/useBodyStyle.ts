import { useEffect } from "react";
import { IUseBodyStyleProps } from "./useBodyStyle.interfaces";

const useBodyStyle = ({ style }: IUseBodyStyleProps): void => {
  useEffect(() => {
    document.body.setAttribute("style", style);

    return () => {
      document.body.removeAttribute("style");
    };
  }, []);
};

export { useBodyStyle };
