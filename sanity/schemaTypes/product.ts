import { defineField } from "sanity";
import { client } from "../lib/client";

export const products = {
  type: "document",
  name: "product",
  title: "Product",
  fields: [
    defineField({
      name: "product_name",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "min_price",
      title: "Min Price",
      type: "number",
    }),
    defineField({
      name: "max_price",
      title: "Max Price",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
  ],
};

export type ProductType = {
  _id: string;
  product_name: string;
  min_price: number;
  max_price: number;
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
};

export const getProductsApi = async (): Promise<ProductType[]> => {
  return await client.fetch(`*[_type == "product"][0...4]{
    _id,
    product_name,
    min_price,
    max_price,
    image{asset->{ url }, alt }
    }`);
};
