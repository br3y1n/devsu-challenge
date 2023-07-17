import { css, styled } from "styled-components";

const SelectedStyled = styled.p`
  padding: 0;
  padding-right: 12px;
  margin: 4px 0px;
`;

const SelectContainer = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    margin: 0;
    padding: 0;
    height: 30px;
    min-width: 70px;
    border: 2px solid ${theme.color.lightGray};
    border-radius: ${theme.borderRadius};
    font-family: ${theme.fontFamily};
    font-size: 14px;
    text-align: center;
    position: relative;
    cursor: pointer;
  `}
`;

const OptionsContainerStyled = styled.ul`
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
    width: 100%;
    top: 33px;
  `}
`;

const SelectItemStyled = styled.li`
  ${({ theme }) => css`
    padding: 10px 15px;

    &:hover {
      background-color: ${theme.color.lightGray};
      cursor: pointer;
    }
  `}
`;

const TriangleIcon = styled.span<{ $open: boolean }>`
  ${({ theme, $open }) => css`
    position: absolute;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid ${theme.color.gray};
    top: 12px;
    right: 12px;
    pointer-events: none;

    ${$open && "transform: rotate(180deg);"}
  `}
`;

export {
  OptionsContainerStyled,
  SelectContainer,
  SelectItemStyled,
  SelectedStyled,
  TriangleIcon,
};
