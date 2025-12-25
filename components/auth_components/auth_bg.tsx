import React from "react";
import SocialMediaBtns from "./socialMediaBtns";
import HeaderSec from './HeaderSec';

type Props = {
  children: React.ReactNode;
};

const AuthBg: React.FC<Props> = ({ children }) => {
  return (
    <div className=" w-full md:h-screen flex justify-center items-center p-4 ">
      <div className=" w-full h-full bg-linear-to-b from-[#07B4B0] to-transparent rounded-xl ">
        <HeaderSec></HeaderSec>
        <div className=" w-full flex justify-center items-center mt-8 md:mt-14 ">
          <div className=" lg:w-96 ">
            <div className=" flex flex-col justify-center items-center gap-3 mb-1 ">
              <h2 className=" text-4xl font-bold text-gray-100 ">
                Welcome Back!
              </h2>
              <p className=" text-gray-200 text-center ">
                We missed you, Please provide your credential{" "}
              </p>
            </div>
            {children}
            <div>
              <div className=" flex justify-center items-center my-4 ">
                <p className="bg-gray-400/60 h-0.5 w-full "></p>
                <p className=" w-68 text-center z-20 text-gray-400 bg-[#bbebe9]/5 ">
                  or
                </p>
                <p className="bg-gray-400/60 h-0.5 w-full  "></p>
              </div>
              <SocialMediaBtns></SocialMediaBtns>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthBg;
