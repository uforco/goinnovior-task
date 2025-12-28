"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import facebook from "@/public/facebookLogin.png";
import apple from "@/public/appleLogin.png";
import google from "@/public/googleLogin.png";
import  Link  from 'next/link';


const SocialMediaBtns = () => {
  const wipClass =
    "flex flex-col md:flex-row justify-center items-center gap-4";
  const btnClass =
    " w-full md:w-28 bg-gray-100 hover:bg-gray-100 shadow-4xl active:shadow-inner border shadow-gray-400 border-gray-200 cursor-pointer";

  // const loginSocialMedia = async () => {
  //   console.log("loginSocialMedia");
  //   const result = await signIn("google", { callbackUrl: "/" });
  //   if (result?.ok) router.push("/"); dev-h6pe2hhoj2lwc1ek
  // };

  const googleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/login`;
    // console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  };

  const testCookies = async () => {
    const test = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`, {
      method: "GET",
      credentials: "include",
    });
    const data = await test.json();
    console.log(data);
  }

  return (
    <div className={wipClass}>
      <Link href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/login`}>Login</Link>
      <Button className={`${btnClass} `}>
        <Image className=" size-7 " src={facebook} alt=""></Image>
      </Button>
      <Button className={btnClass}>
        <Image className=" size-7 " src={apple} alt=""></Image>
      </Button>
      <Button onClick={googleLogin} className={btnClass}>
        <Image className=" size-7 " src={google} alt=""></Image>
      </Button>
      <Button onClick={testCookies} className={btnClass}>
        testCookies
      </Button>
    </div>
  );
};

export default SocialMediaBtns;
