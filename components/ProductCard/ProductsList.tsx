import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import { getProductsApi } from "@/sanity/schemaTypes/product";

const ProductsList = async () => {
  const products = await getProductsApi();

  return (
    <div className="bg-white">
      <div className="max-w-7xl lg:max-w-12/12 2xl:max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className=" w-full flex justify-between items-end mb-6 ">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Apparels
          </h2>
          <Link
            className=" hover:text-[#07B4B0] transition-all ease-in duration-300 "
            href={""}
          >
            See All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
