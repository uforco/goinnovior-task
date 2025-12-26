// import Image from "next/image";
// import { products } from "../sanity/schemaTypes/product";
// import { client } from "@/sanity/lib/client";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import ProcessSectionCard from "@/components/ProcessSection/ProcessSectionCard";
import Hostedby from "@/components/hostedby/hostedby";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import TopBar from "@/components/header_section/TopBer";
import Navbar from "@/components/header_section/NavSection/NavBer";
import MainFooterComponent from "@/components/footer/mainFooterComponent";
import ProductCard from '../components/ProductCard/ProductCard';

export default async function Home() {
  // const products = await client.fetch(`*[_type == "product"]{
  //   _id,
  //   product_name,
  //   min_price,
  //   max_price,
  //   image{asset->{ url }, alt }
  //   }`);

  // console.log(JSON.stringify(products, null, 2));

  return (
    <div>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ContactInfoSection></ContactInfoSection>
      <Hostedby></Hostedby>
      <ProcessSection></ProcessSection>
      <ProcessSectionCard></ProcessSectionCard>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Our Apparels
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1">
                <ProductCard/>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1">f</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1">f</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1">f</div>
            </div>
          </div>
        </div>
      </div>
      <MainFooterComponent />
    </div>
  );
}
