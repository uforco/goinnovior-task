// 'use client'

import React from "react";
import { client } from "@/sanity/lib/client";
import VideoSection from "./VideoSection";

const HeroSection: React.FC = async () => {
  //   const products = await client.fetch(`*[_type == "product"]{
  //         _id,
  //         product_name,
  //         min_price,
  //         max_price,
  //         image{asset->{ url }, alt }
  //         }`);
  const heroList = await client.fetch(`*[_type == "videoUpload"]{
        _id,
        video{asset->{ url }},
        title,
        head_line,
        description,
        active
        }`);

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-start 2xl:px-32 overflow-hidden ">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-50 z-30 "></div>
      <VideoSection url={heroList[0].video.asset.url}></VideoSection>

      {/* Content container */}
      <div className="relative z-50  px-6 sm:px-8 lg:px-12 text-white">
        <div className="max-w-3xl">
          {/* Small subtitle */}
          <p className="text-lg sm:text-xl mb-4 opacity-90">
            Elevate Your Brand With
          </p>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold leading-tight mb-6">
            High-Quality Garments.
            <br />
            Ethically Made.
          </h1>

          {/* Description paragraph */}
          <p className="text-base sm:text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
            At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
            partner for apparel production. Our commitment to ethical
            manufacturing ensures that every garment is crafted with care and
            integrity.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className=" w-28 h-11 bg-orange-600 hover:bg-orange-700 text-sm text-white font-semibold rounded transition duration-300">
              Contact Us
            </button>
            <button className="w-28 h-11 border-2 border-white hover:bg-white text-sm hover:text-black text-white font-semibold rounded transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Play button (for video) - positioned on the right side, responsive */}
      <div className="absolute z-40 right-8 bottom-8 sm:right-12 sm:bottom-12 md:right-20 2xl:right-38 md:bottom-1/2 translate-y-1/2 ">
        <button
          className=" relative w-14 h-14 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group transition transform duration-300"
          aria-label="Play video"
        >
          <div className=" absolute w-full h-full rounded-full border border-white/60 bg-opac scale-170 group-hover:scale-180 transition-all ease-out duration-200 "></div>
          <svg
            className="w-6 h-6 sm:w-10 sm:h-10 text-red-600 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
