"use client";
import { StyleSheetManager } from "styled-components";
import { IStyledComponentsRegistryProps } from "./StyledComponentsRegistry.interfaces";
import { useStyledComponentsRegistryState } from "./hooks/useStyledComponentsRegistryState";

const StyledComponentsRegistry = ({
  children,
}: IStyledComponentsRegistryProps) => {
  const { styledComponentsStyleSheet, inClient } =
    useStyledComponentsRegistryState();

  return inClient ? (
    children
  ) : (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
