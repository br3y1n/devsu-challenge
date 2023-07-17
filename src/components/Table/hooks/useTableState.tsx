import { ISelectOption } from "@components/Select/Select.interfaces";
import { useEffect, useState } from "react";
import { ITableProps } from "../Table.interfaces";
import { TableSkeleton } from "../Tables.styles";

const RANGE = 5;

const useTableState = ({ rows: oldRows, columns, loading }: ITableProps) => {
  const [selectOptions, setSelectOptions] = useState([
    { text: String(RANGE), value: RANGE, selected: true },
  ]);
  const [maxEntries, setMaxEntries] = useState(5);
  const results = oldRows.length;
  const rowsSkeletons = Array(5)
    .fill("")
    .map(() =>
      Array(columns.length)
        .fill("")
        .map(() => <TableSkeleton />),
    );
  const rows = loading ? rowsSkeletons : oldRows.slice(0, maxEntries);

  const onChangeOption = ({ value }: ISelectOption) => {
    setMaxEntries(value as number);
    setSelectOptions((prevValue) =>
      prevValue.map((option) => ({
        ...option,
        selected: value === option.value,
      })),
    );
  };

  useEffect(() => {
    setSelectOptions(
      Array(Math.ceil(results / 5) || 1)
        .fill("")
        .map((_, index) => {
          const value = (index + 1) * 5;

          return {
            text: String(value),
            value: value,
            selected: false,
          };
        }),
    );
  }, [results]);

  return { columns, rows, selectOptions, onChangeOption, results };
};

export { useTableState };
