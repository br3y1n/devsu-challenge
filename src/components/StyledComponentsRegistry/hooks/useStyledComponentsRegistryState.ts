import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import { ServerStyleSheet } from "styled-components";
import { IUseStyledComponentsRegistryState } from "./useStyledComponentsRegistryState.interfaces";

const useStyledComponentsRegistryState =
  (): IUseStyledComponentsRegistryState => {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
    const inClient = typeof window !== "undefined";

    useServerInsertedHTML(() => {
      const styles = styledComponentsStyleSheet.getStyleElement();
      styledComponentsStyleSheet.instance.clearTag();
      return styles;
    });

    return { styledComponentsStyleSheet, inClient };
  };

export { useStyledComponentsRegistryState };
