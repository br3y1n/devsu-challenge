import { css, styled } from "styled-components";

const InfoIconContainerStyled = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${theme.color.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: help;
  `}
`;

const InfoIconContentStyled = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: 12px;
    color: white;
  `}
`;

export { InfoIconContentStyled, InfoIconContainerStyled };
