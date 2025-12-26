import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const OffsiteBox1 = () => {
  return (
    <div style={{ width: "230px", height: "220px" }} className=" bg-[#EE4B21] text-white overflow-hidden p-10 pr-5 ">
      <div >
        <h2 className=" text-base font-medium ">Quality Product</h2>
        <h1 className=" text-sm my-2 ">
          Lorem ipsum dolor sitatu amet consec teturarisa adipiscing elit samed.
        </h1>
        <button className=" flex items-center text-sm ">
          Read More
          <MdOutlineArrowRightAlt className=" text-2xl "></MdOutlineArrowRightAlt>{" "}
        </button>
      </div>
    </div>
  );
};

export const OffsiteBox2 = () => {
  return (
    <div style={{ width: "230px", height: "220px" }} className="  bg-[#07B4B0] text-white flex flex-col justify-start items-start overflow-hidden p-10 pr-5 ">
      <div>
        <h2 className=" text-base font-medium ">Project Overview</h2>
        <h1 className=" text-2xl my-2 font-bold ">35 Millions</h1>
        <button className=" flex items-center text-sm ">
          Read More
          <MdOutlineArrowRightAlt className=" text-2xl "></MdOutlineArrowRightAlt>{" "}
        </button>
      </div>
    </div>
  );
};
