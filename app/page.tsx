import Image from "next/image";
import { products } from "../sanity/schemaTypes/product";
import { client } from "@/sanity/lib/client";
import ProcessSection from '../components/ProcessSection/ProcessSection';

export default async function Home() {
  const products = await client.fetch(`*[_type == "product"]{
    _id,
    product_name,
    min_price,
    max_price,
    image{asset->{ url }, alt }
    }`);

  console.log(JSON.stringify(products, null, 2));

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ProcessSection></ProcessSection>
    </div>
  );
}
