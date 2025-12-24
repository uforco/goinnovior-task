import { defineField } from "sanity";

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
