import { IProduct } from "@/interfaces/product.interfaces";
import { mapProductIn, mapProductOut } from "./products";

const apiRoute = process.env.NEXT_PUBLIC_API!;
const headers = new Headers({
  authorId: process.env.NEXT_PUBLIC_AUTHOR_ID!,
  "Content-Type": "application/json",
});

const getProducts = async () => {
  const response = await fetch(apiRoute, {
    method: "GET",
    headers,
  });

  const result = await response.json();

  return mapProductIn(result);
};

const setProducts = async (product: IProduct) => {
  return await fetch(apiRoute, {
    method: "POST",
    headers,
    body: JSON.stringify(mapProductOut(product)),
  });
};

const removeProducts = async (id: string) => {
  const queryParams = new URLSearchParams({ id }).toString();

  return await fetch(`${apiRoute}?${queryParams}`, {
    method: "DELETE",
    headers,
  });
};

const updateProducts = async (product: IProduct) => {
  return await fetch(apiRoute, {
    method: "PUT",
    headers,
    body: JSON.stringify(mapProductOut(product)),
  });
};

export { getProducts, removeProducts, setProducts, updateProducts };
