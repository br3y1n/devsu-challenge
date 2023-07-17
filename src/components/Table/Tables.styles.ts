import { css, keyframes, styled } from "styled-components";

const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  ${({ theme }) => css`
    padding: 0 30px;
    border-bottom: 1px solid ${theme.color.lightGray};

    &:first-child {
      padding-left: 70px;
    }
  `}
`;

const Tr = styled.tr`
  height: 60px;
`;

const Td = styled.td`
  ${({ theme }) => css`
    padding: 0 30px;
    font-family: ${theme.fontFamily};
    font-size: 14px;
    border-bottom: 1px solid ${theme.color.lightGray};

    &:first-child {
      padding-left: 70px;
    }
  `}
`;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const ResultIndicator = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: 14px;
    margin: 0;
  `}
`;

const AdditionalTable = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const skeletonLoading = keyframes`
  0% {
    opacity:1;
  }
  50%{
    opacity: 0.6;
  }
  100% {
    opacity:1;
  }
`;

const TableSkeleton = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 30px;
    background-color: ${theme.color.lightGray};
    animation: ${skeletonLoading} 1.5s infinite ease-in-out;
  `}
`;

export {
  TableStyled,
  Td,
  Th,
  Tr,
  AdditionalTable,
  ResultIndicator,
  TableContainer,
  TableSkeleton,
};
