import React from "react";
import Image from "next/image";
import apay from "@/public/hostedby/Apay.png";
import asana from "@/public/hostedby/Asana.png";
import alipay from "@/public/hostedby/Alipay.png";
import adriv from "@/public/hostedby/Adriv.png";

const Hostedby = () => {
  const logos = [
    { src: apay, alt: "Amazon Pay" },
    { src: asana, alt: "Asana" },
    { src: alipay, alt: "Alipay" },
    { src: adriv, alt: "Amazon Drive" },
    { src: apay, alt: "Amazon Pay" },
    { src: asana, alt: "Asana" },
  ];

  return (
    <section className="bg-white relative ">
      <div className=" absolute top-0 left-0 w-full h-full bg-linear-to-r from-white/90 via-transparent to-white/90 from-25% to-85%  "></div>
      <div className="max-w-7xl mx-auto px-4  py-8 ">
        <div className="flex items-center justify-between gap-10  ">
          {logos.map((logo, index) => (
            <React.Fragment key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hostedby;
