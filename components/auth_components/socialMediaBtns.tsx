"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import facebook from "@/public/facebookLogin.png";
import google from "@/public/googleLogin.png";
import { VscGithubInverted } from "react-icons/vsc";

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
  const githubLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/github/login`;
    // console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  };
  const facebookLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/facebook/login`;
    // console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  };

  // const testCookies = async () => {
  //   const test = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`, {
  //     method: "GET",
  //     credentials: "include",
  //   });
  //   const data = await test.json();
  //   console.log(data);
  // };

  return (
    <div className={wipClass}>
      <Button
        onClick={googleLogin}
        className={`${btnClass} border-2 border-black`}
      >
        <Image className=" size-7 " src={google} alt=""></Image>
      </Button>
      <Button onClick={facebookLogin} className={`${btnClass} `}>
        <Image className=" size-7 " src={facebook} alt=""></Image>
      </Button>
      <Button onClick={githubLogin} className={`${btnClass} text-black `}>
        <VscGithubInverted className=" size-7 "></VscGithubInverted>
      </Button>
    </div>
  );
};

export default SocialMediaBtns;
