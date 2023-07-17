import Select from "../Select/Select";
import { ITableProps } from "./Table.interfaces";
import {
  AdditionalTable,
  ResultIndicator,
  TableContainer,
  TableStyled,
  Td,
  Th,
  Tr,
} from "./Tables.styles";
import { useTableState } from "./hooks/useTableState";

const Table = (props: ITableProps) => {
  const { columns, rows, results, selectOptions, onChangeOption } =
    useTableState(props);

  return (
    <>
      <TableContainer>
        <TableStyled>
          <thead>
            <Tr>
              {columns.map((column, index) => (
                <Th key={index}>{column}</Th>
              ))}
            </Tr>
          </thead>

          <tbody>
            {rows.length > 0 ? (
              rows.map((columns, index) => (
                <Tr key={index}>
                  {columns.map((column) => (
                    <Td>{column}</Td>
                  ))}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={columns.length}>No se encontraron productos...</Td>
              </Tr>
            )}
          </tbody>
        </TableStyled>
      </TableContainer>

      <AdditionalTable>
        <ResultIndicator>{results} Resultados</ResultIndicator>

        <Select options={selectOptions} onChange={onChangeOption} />
      </AdditionalTable>
    </>
  );
};

export default Table;
