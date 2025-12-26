import Image from "next/image";
import React from "react";

const ProductCard: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        {/* <Image
          src="https://img.freepik.com/premium-photo/collage-group-full-length-portrait-20s-asian-woman-black-short-curl-hair-gray-suit-jacket-pant-shoes-girl-walk-turn-back-view-many-looks-white-background-isolated_121764-3834.jpg"
          alt="Woman wearing light blue blazer from back view"
          className="w-full h-auto object-cover"
        /> */}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Woman Apparel
        </h3>

        <p className="text-2xl font-bold text-gray-900 mb-6">
          ฿1,000.00 — ฿1,000.00
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-white border-2 border-teal-500 text-teal-500 font-medium py-3 px-6 rounded-lg hover:bg-teal-50 transition flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add To Cart
          </button>

          <button className="flex-1 bg-teal-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
