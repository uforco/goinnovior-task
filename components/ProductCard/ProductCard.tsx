import { ProductType } from "@/sanity/schemaTypes/product";
import Image from "next/image";
import buyicon from "@/public/buyaproducticon.png";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";

const ProductCard = ({ product }: { product: ProductType }) => {
  console.log(product);
  return (
    <div style={{ height: '445px' }} className=" w-full overflow-hidden rounded-xl ">
      <div className="max-w-sm mx-auto  relative group hover:scale-105 cursor-pointer transition-all ease-out duration-150 bg-white rounded-xl overflow-hidden">
        <div className=" absolute group-hover:right-4 -right-40 top-10 z-40 transition-all ease-in-out duration-200 " >
          <ul className=" flex flex-col gap-2 text-xl font-bold text-[#EE4B21] justify-between items-center " >
            <li className=" bg-white rounded-full p-2 cursor-pointer " >
              <IoEyeOutline></IoEyeOutline>
            </li>
            <li className=" bg-white rounded-full p-2 cursor-pointer " >
              <IoHeartOutline></IoHeartOutline>
            </li>
            <li className=" bg-white rounded-full p-2 cursor-pointer" >
              <IoShareSocialOutline></IoShareSocialOutline>
            </li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="relative w-full h-52 group-hover:h-72 overflow-hidden rounded-xl transition-all ease-out duration-150  ">
          <Image
            src={product.image.asset.url}
            width={500}
            height={500}
            alt="Woman wearing light blue blazer from back view"
            className="w-full  object-cover group-hover:mt-0  -mt-7 transition-all ease-out duration-150 "
          ></Image>
        </div>

        {/* Content Section */}
        <div className="p-4  pt-2">
          <h3 className="text-lg font-semibold text-gray-800 ">
            Woman Apparel
          </h3>

          <p className="text-xl font-bold text-gray-900 mb-2">
            ฿{Number(product.min_price).toFixed(2)} — ฿
            {Number(product.max_price).toFixed(2)}
          </p>

          {/* Buttons */}
          <div className="flex gap-1 justify-between ">
            <button className=" w-1/2 px-2 text-sm bg-white border-2 border-teal-500 text-teal-500 font-medium rounded-lg hover:bg-teal-50 transition flex items-center justify-center ">
              <Image src={buyicon} alt="Buy Icon" width={20} height={20} />
              <p className=" ml-2 ">Add To Cart</p>
            </button>

            <button className=" w-1/2 bg-teal-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
