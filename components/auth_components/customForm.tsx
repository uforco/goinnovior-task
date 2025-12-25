"use client";
import React from "react";
import { Input } from "../ui/input";

const CustomForm = () => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className=" flex flex-col gap-4">
          <div>
            <Input type="email" placeholder="Email" />
          </div>
          <div>
            <Input type="password" placeholder="password" />
          </div>
        </div>
        <div className=" flex justify-end items-center mt-4">
          <div>
            <p className=" text-gray-600">Forgot password?</p>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center mt-4">
          <button className=" w-full bg-[#07B4B0]/80 active:bg-[#07B4B0]/90 shadow-lg shadow-[#07B4B0]/40  border border-[#07B4B0]/90 active:border-[#07B4B0] active:shadow-[#07B4B0]/50  py-2 rounded-lg cursor-pointer text-gray-100 hover:bg-[#07B4B0]/60 ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
