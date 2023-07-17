import { css, styled } from "styled-components";

const HeaderStyled = styled.header<{ $withBackground?: boolean }>`
  ${({ theme, $withBackground }) => css`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${$withBackground &&
    css`
      background-color: ${theme.color.white};
    `}
  `}
`;

const MainStyled = styled.main`
  width: calc(100% - 160px);
  padding: 80px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const TableContainer = styled.div`
  ${({ theme }) => css`
    width: (100% - 60px);
    padding: 20px 30px 40px 30px;
    background-color: ${theme.color.white};
    margin-top: 20px;
  `}
`;

export { HeaderStyled, MainStyled, TopContainer, TableContainer };
