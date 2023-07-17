import { css, styled } from "styled-components";

const DotsButtonContainerStyled = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    mix-blend-mode: multiply;
  }
`;

const DotStyled = styled.span`
  ${({ theme }) => css`
    margin: 1px;
    width: 4px;
    height: 4px;
    background-color: ${theme.color.gray};
    border-radius: 50%;
  `}
`;

export { DotStyled, DotsButtonContainerStyled };
