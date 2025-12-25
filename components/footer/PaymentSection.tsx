import Image from "next/image";
import React from "react";
import visa from "@/public/payment/visa.png";
import bkash from "@/public/payment/bkash.png";
import bracbank from "@/public/payment/bracbank.png";
import callfin from "@/public/payment/callfin.png";
import cash from "@/public/payment/cash.png";
import citybangk from "@/public/payment/citybangk.png";
import datchBangla from "@/public/payment/datchBangla.png";
import islamibank from "@/public/payment/islamibank.png";
import mastercard from "@/public/payment/mastercard.png";
import nogot from "@/public/payment/nogot.png";
import poptap from "@/public/payment/poptap.png";
import roket from "@/public/payment/roket.png";
import ucb from "@/public/payment/ucb.png";
import upay from "@/public/payment/upay.png";

const PaymentSection = () => {
  const paymentType = [
    { name: "visa", image: visa },
    { name: "bkash", image: bkash },
    { name: "bracbank", image: bracbank },
    { name: "callfin", image: callfin },
    { name: "cash", image: cash },
    { name: "citybangk", image: citybangk },
    { name: "datchBangla", image: datchBangla },
    { name: "islamibank", image: islamibank },
    { name: "mastercard", image: mastercard },
    { name: "nogot", image: nogot },
    { name: "poptap", image: poptap },
    { name: "roket", image: roket },
    { name: "ucb", image: ucb },
    { name: "upay", image: upay },
  ];

  return (
    <div className="mt-6">
      <h4 className="text-lg font-bold uppercase ">Payment Channels</h4>
      <div className="flex justify-between items-center mt-2 my-5 ">
        {paymentType.map((x, i) => (
          <div key={i} className=" overflow-hidden rounded-lg ">
            <Image src={x.image} alt={x.name} className=" w-20 h-10 " />
          </div>
        ))}
        {/* Add more icons as necessary */}
      </div>
    </div>
  );
};

export default PaymentSection;
