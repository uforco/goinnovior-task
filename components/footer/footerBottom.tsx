import Link from "next/link";
import React from "react";
import FaFacebook from "@/public/payment/facebook.png";
import FaInstagram from "@/public/payment/instagram.png";
import FaTwitter from "@/public/payment/x.png";
import  Image  from 'next/image';

const Footerbottom = () => {
  return (
    <>
      <div className=" w-full h-0.5 my-3 bg-gray-300 "></div>
      <div className=" flex md:flex-row flex-col justify-between items-center ">
        <p className="text-sm font-bold ">
          Copyright ©{" "}
          <Link href={""} className=" text-amber-400 ">
            360D Soul Limited 2025.
          </Link>{" "}
          All rights reserved.
        </p>
        <div className=" flex justify-center  ">
          <Link href="https://facebook.com" className="text-blue-600 mx-3">
            <Image src={FaFacebook} alt='facebook' ></Image>
          </Link>
          <Link href="https://twitter.com" className="text-blue-600 mx-3">
            <Image src={FaInstagram} alt='instagram' ></Image>
          </Link>
          <Link href="https://instagram.com" className="text-blue-600 mx-3">
              <Image src={FaTwitter} alt='twitter' ></Image>
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
