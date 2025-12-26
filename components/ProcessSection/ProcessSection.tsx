import Image from "next/image";
import React from "react";
import dress from "@/public/payment/productshow2.png";

export default function ProcessSection() {
  return (
    <section className="w-full bg-[#07B4B0]/30 py-20 px-4">
      <div className="mx-auto max-w-7xl flex justify-between items-center gap-5">
        {/* Left Content */}
        <div className="  ProcessContantBg bg-cover bg-center bg-no-repeat w-full " >
          {/* <Image src={bgD} alt="bgD" className=" w-full " ></Image> */}
          <div className=" p-12 h-96 " >
            <span className="inline-block mb-4 rounded-full border border-teal-500 px-4 py-1 text-sm text-teal-600 font-medium">
              Process
            </span>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-4">
              Do You Want Custom Project With Textilery? Contact Us Now
            </h2>

            <p className="text-gray-600 mb-6 max-w-xl">
              At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
              partner for apparel production. Our commitment to ethical
              manufacturing ensures that every garment is crafted with care and
              integrity.
            </p>

            <button className="inline-flex items-center justify-center  border border-teal-500 px-6 py-3 text-sm font-medium text-teal-600 hover:bg-teal-500 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end w-[80%] ">
          <Image
            src={dress}
            alt="Clothing rack"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
