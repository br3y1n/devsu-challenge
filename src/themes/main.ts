import { openSans } from "@fonts";
import { VariantEnum } from "@enums";

const theme = {
  fontFamily: openSans.style.fontFamily,
  fontSize: "16px",
  borderRadius: "6px",
  color: {
    [VariantEnum.PRIMARY]: "#ffdf00",
    [VariantEnum.SECONDARY]: "#dfe3ec",
    danger: "#ec0000",
    black: "#000000",
    gray: "#888888",
    lightGray: "#e6e6e6",
    blue: "#0a225c",
    white: "#ffffff",
  },
};

export default theme;
