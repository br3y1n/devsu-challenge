"use client";
import { ILogoProps } from "./Logo.interfaces";
import { LogoStyled } from "./Logo.styles";

const Logo = (props: ILogoProps) => (
  <LogoStyled {...props} width={35} height={35} />
);

export default Logo;
