"use client";
import { ILogoProps } from "./Logo.interfaces";
import { LogoStyled } from "./Logo.styles";

const Logo = (props: ILogoProps) => (
  <LogoStyled {...props} width={45} height={45} />
);

export default Logo;
