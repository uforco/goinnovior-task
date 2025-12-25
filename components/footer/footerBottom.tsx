import Link from "next/link";
import React from "react";

const Footerbottom = () => {
  return (
    <>
      <div className=" w-full h-0.5 my-3 bg-gray-300 "></div>
      <div className=" flex justify-between items-center ">
        <p className="text-sm font-bold ">
          Copyright ©
          <Link href={""} className=" bg-amber-400 ">
            360D Soul Limited 2025.
          </Link>
          All rights reserved.
        </p>
        <div className="mt-2">
          <Link href="https://facebook.com" className="text-blue-600 mx-3">
            Facebook
          </Link>
          <Link href="https://twitter.com" className="text-blue-600 mx-3">
            Twitter
          </Link>
          <Link href="https://instagram.com" className="text-blue-600 mx-3">
            Instagram
          </Link>
        </div>
        <div className="mt-2">
          <Link
            href="/terms"
            className="text-gray-700 mx-3 hover:text-blue-600"
          >
            Teams & Conditions
          </Link>
          <Link
            href="/privacy"
            className="text-gray-700 mx-3 hover:text-blue-600"
          >
            Privacy & Policy
          </Link>
          <Link
            href="/refund"
            className="text-gray-700 mx-3 hover:text-blue-600"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footerbottom;
