import { reformatDate } from "@/utils/date/date";
import { IProduct } from "@interfaces/product.interfaces";

interface IProductEndpoint {
  id: string;
  name: string;
  logo: string;
  description: string;
  date_release: string;
  date_revision: string;
}

const mapProductIn = (data: IProductEndpoint[]): IProduct[] =>
  data.map((val) => ({
    id: val.id,
    dateRelease: val.date_release,
    dateRevision: val.date_revision,
    description: val.description,
    logo: val.logo,
    name: val.name,
  }));

const mapProductOut = (product: IProduct): IProductEndpoint => ({
  id: product.id,
  date_release: reformatDate(product.dateRelease),
  date_revision: reformatDate(product.dateRevision),
  description: product.description,
  logo: product.logo,
  name: product.name,
});

export { mapProductIn, mapProductOut, type IProductEndpoint };
