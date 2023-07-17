import InfoIcon from "@components/InfoIcon/InfoIcon";
import InfoMenuButton from "@components/InfoMenuButton/InfoMenuButton";
import Logo from "@components/Logo/Logo";
import Tooltip from "@components/Tooltip/Tooltip";
import { formatDate } from "@utils/date/date";
import { RouteEnum, RouteParamsEnum } from "@enums";
import { IProduct } from "@interfaces/product.interfaces";
import { ReactNode } from "react";
import { css, styled } from "styled-components";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

interface ITableHeaders {
  key: keyof IProduct;
  value: string;
  help?: string;
}

const headers: ITableHeaders[] = [
  { key: "logo", value: "Logo" },
  { key: "name", value: "Nombre del producto" },
  {
    key: "description",
    value: "Descripcion",
    help: "Descripción del producto",
  },
  {
    key: "dateRelease",
    value: "Fecha de liberacion",
    help: "Fecha a liberar el productor para los clientes en general",
  },
  {
    key: "dateRevision",
    value: "Fecha de reestructuración",
    help: "Fecha de revision del producto para cambiar términos y condiciones",
  },
];

const HeaderContainer = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content:;
    white-space: nowrap;
  `}
`;

const getColumns = (): ReactNode[] => {
  const columns: ReactNode[] = headers.map(({ value, help }, index) => (
    <HeaderContainer key={index}>
      {value}
      {help && (
        <Tooltip content={help}>
          <InfoIcon />
        </Tooltip>
      )}
    </HeaderContainer>
  ));

  columns.push(null);

  return columns;
};

const mapValue = (item: IProduct, key: keyof IProduct) => {
  const mapper: Record<string, () => string | JSX.Element> = {
    logo: () => <Logo alt={item.name} src={item.logo} />,
    dateRevision: () => formatDate(item.dateRevision),
    dateRelease: () => formatDate(item.dateRelease),
    default: () => item[key],
  };

  return (mapper[key] ?? mapper.default)();
};

const getRows = (
  products: IProduct[],
  onRemove: (id: string) => void,
  router: AppRouterInstance,
) =>
  products.map((item) => {
    const row = headers.map(({ key }) => mapValue(item, key));
    row.push(
      <InfoMenuButton
        items={[
          {
            text: "Editar",
            onClick: () => {
              router.push(RouteEnum.EDIT.replace(RouteParamsEnum.ID, item.id));
            },
          },
          {
            text: "Borrar",
            onClick: () => {
              onRemove(item.id);
            },
          },
        ]}
      />,
    );

    return row;
  });

export { getColumns, getRows };
