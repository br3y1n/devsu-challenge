import { RenderOptions, render as rtlRender } from "@testing-library/react";
// import { act as actHook, renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import theme from "@themes/main";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render, userEvent };
