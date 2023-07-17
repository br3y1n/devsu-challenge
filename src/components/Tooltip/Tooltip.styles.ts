import styled, { css } from "styled-components";

const TooltipStyled = styled.div`
  ${({ theme }) => css`
    position: absolute;
    transform: translateX(-50%);
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    padding: 5px 10px;
    border-radius: ${theme.borderRadius};
    font-size: 14px;
    opacity: 0.8;
    z-index: 9999;
  `}
`;

export { TooltipStyled };
