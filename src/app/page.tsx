"use client";
import { getColumns, getRows } from "@/adapters/table";
import { mapProductIn } from "@adapters/products";
import Button from "@components/Button/Button";
import Table from "@components/Table/Table";
import TextField from "@components/TextField/TextField";
import { RouteEnum, VariantEnum } from "@enums";
import { IProduct } from "@interfaces/product.interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import {
  HeaderStyled,
  MainStyled,
  TableContainer,
  TopContainer,
} from "./page.styles";
import { getProducts, removeProducts } from "@/adapters/api";

const Home = () => {
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  const filteredValues = products.filter(({ logo, id, ...product }) =>
    Object.values(product).some((value) =>
      value.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()),
    ),
  );

  const getData = async () => {
    try {
      const result = await getProducts();
      setProducts(result);
    } catch {}
  };

  const onRemove = async (id: string) => {
    try {
      setLoading(true);

      await removeProducts(id);
      await getData();

      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const router = useRouter();
  const rows = getRows(filteredValues, onRemove, router);
  const columns = getColumns();

  const goAdd = () => {
    router.push(RouteEnum.ADD);
  };

  const onChangefilter: ChangeEventHandler<HTMLInputElement> = (event) =>
    setFilterText(event.currentTarget.value);

  useEffect(() => {
    getData().finally(() => setLoading(false));
  }, []);

  return (
    <>
      <HeaderStyled $withBackground>
        <Image
          src="/images/banco-pichincha.webp"
          alt="banco pichincha"
          width={200}
          height={49}
          priority
        />
      </HeaderStyled>

      <MainStyled>
        <TopContainer>
          <TextField
            id="search"
            placeholder="Search..."
            value={filterText}
            onChange={onChangefilter}
          />

          <Button variant={VariantEnum.PRIMARY} onClick={goAdd}>
            Agregar
          </Button>
        </TopContainer>

        <TableContainer>
          <Table columns={columns} rows={rows} loading={loading} />
        </TableContainer>
      </MainStyled>
    </>
  );
};

export default Home;
