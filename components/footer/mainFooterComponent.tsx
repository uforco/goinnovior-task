import Image from "next/image";
import React from "react";
import logo from "@/public/WhatsApp_Image_2024-10-05_at_11.43.07_1aaadc00__1___1_-removebg-preview (1) 1.png";
import AddressAndLinks from "./addressAndLinks";
import PaymentSection from "./PaymentSection";
import Footerbottom from './footerBottom';

const MainFooterComponent = () => {
  return (
    <footer className="bg-gray-100 py-10 overflow-hidden ">
      <div className=" max-w-7xl mx-auto px-4">
        <div>
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Image src={logo} alt="Logo" />
          </div>
          <AddressAndLinks></AddressAndLinks>
        </div>

        {/* Payment Section */}
        <PaymentSection></PaymentSection>

        {/* Footer Bottom Section */}
        <Footerbottom></Footerbottom>
      </div>
    </footer>
  );
};

export default MainFooterComponent;
