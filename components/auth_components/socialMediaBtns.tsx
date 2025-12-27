"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import facebook from "@/public/facebookLogin.png";
import apple from "@/public/appleLogin.png";
import google from "@/public/googleLogin.png";

import Link from "next/link";

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

  return (
    <div className={wipClass}>
      <Link href={"/auth/login?connection=google"}>Login</Link>
      <Button className={`${btnClass} `}>
        <Image className=" size-7 " src={facebook} alt=""></Image>
      </Button>
      <Button className={btnClass}>
        <Image className=" size-7 " src={apple} alt=""></Image>
      </Button>
      <Button className={btnClass}>
        <Image className=" size-7 " src={google} alt=""></Image>
      </Button>
    </div>
  );
};

export default SocialMediaBtns;
