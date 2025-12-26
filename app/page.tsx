import Image from "next/image";
import { products } from "../sanity/schemaTypes/product";
import { client } from "@/sanity/lib/client";
import ProcessSection from '../components/ProcessSection/ProcessSection';
import ProcessSectionCard from "@/components/ProcessSection/ProcessSectionCard";
import Hostedby from "@/components/hostedby/hostedby";
import ContactInfoSection from '../components/ContactInfoSection/ContactInfoSection';

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
    <div >
      <ContactInfoSection></ContactInfoSection>
      <Hostedby></Hostedby>
      <ProcessSection></ProcessSection>
      <ProcessSectionCard></ProcessSectionCard>
    </div>
  );
}
