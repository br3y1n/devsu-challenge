import { ServerStyleSheet } from "styled-components";

interface IUseStyledComponentsRegistryState {
  styledComponentsStyleSheet: ServerStyleSheet;
  inClient: boolean;
}

export type { IUseStyledComponentsRegistryState };
