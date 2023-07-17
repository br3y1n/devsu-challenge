import { css, styled } from "styled-components";

const MenuContainerStyled = styled.ul`
  ${({ theme }) => css`
    margin: 0;
    padding: 0;
    display: inline-block;
    list-style: none;
    background-color: ${theme.color.white};
    border-radius: ${theme.borderRadius};
    border: none;
    box-shadow: ${theme.color.gray} 0px 3px 6px 1px;
    position: absolute;
    transform: translateX(-50%);
    font-size: 14px;
    z-index: 9999;
    overflow-y: auto;
  `}
`;

const MenuItemStyled = styled.li`
  ${({ theme }) => css`
    padding: 10px 15px;

    &:hover {
      background-color: ${theme.color.lightGray};
      cursor: pointer;
    }
  `}
`;

export { MenuContainerStyled, MenuItemStyled };
