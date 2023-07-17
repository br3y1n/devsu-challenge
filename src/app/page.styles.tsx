import { css, styled } from "styled-components";

const HeaderStyled = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const MainStyled = styled.main`
  width: calc(100% - 160px);
  padding: 80px;
`;

export { HeaderStyled, MainStyled };
