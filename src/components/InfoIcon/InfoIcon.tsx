"use client";
import { HtmlHTMLAttributes } from "react";
import {
  InfoIconContainerStyled,
  InfoIconContentStyled,
} from "./InfoIcon.styles";

const InfoIcon = (props: HtmlHTMLAttributes<HTMLElement>) => (
  <InfoIconContainerStyled {...props}>
    <InfoIconContentStyled>i</InfoIconContentStyled>
  </InfoIconContainerStyled>
);

export default InfoIcon;
