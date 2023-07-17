import { ReactNode } from "react";

interface ITableProps {
  rows: ReactNode[][];
  columns: ReactNode[];
  loading: boolean;
}

export type { ITableProps };
