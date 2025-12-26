// import Image from "next/image";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import ProcessSectionCard from "@/components/ProcessSection/ProcessSectionCard";
import Hostedby from "@/components/hostedby/hostedby";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import TopBar from "@/components/header_section/TopBer";
import Navbar from "@/components/header_section/NavSection/NavBer";
import MainFooterComponent from "@/components/footer/mainFooterComponent";
import ProductsList from "@/components/ProductCard/ProductsList";

export default async function Home() {
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
      <ProductsList></ProductsList>
      <MainFooterComponent />
    </div>
  );
}
