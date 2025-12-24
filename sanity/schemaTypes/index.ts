import { type SchemaTypeDefinition } from "sanity";
import { products } from "./product";
import { heroCover } from "./heroSection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroCover, products],
};
