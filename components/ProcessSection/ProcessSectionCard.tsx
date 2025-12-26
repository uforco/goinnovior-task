import s1 from "@/public/service/hand1.png";
import s2 from "@/public/service/hand2.png";
import s3 from "@/public/service/hand3.png";
import s4 from "@/public/service/hand4.png";
import s5 from "@/public/service/hand5.png";
import s6 from "@/public/service/hand6.png";
import s7 from "@/public/service/hand7.png";
import Image, { StaticImageData } from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

const ProcessSectionCard = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Dyeing",
      description: "Adding color to biodegradable materials",
      icon: s1,
    },
    {
      id: 2,
      title: "Cutting",
      description: "Eco-friendly clothing items for all shapes and sizes",
      icon: s2,
    },
    {
      id: 3,
      title: "Sewing",
      description:
        "Vouching for the ultimate sturdiness and durability of the fabric",
      icon: s3,
    },
    {
      id: 4,
      title: "Snipping of thread",
      description: "A neat edge, a soft and smooth finish",
      icon: s4,
    },
    {
      id: 5,
      title: "Ironing",
      description: "Ironing it before shipping",
      icon: s5,
    },
    {
      id: 6,
      title: "Checking",
      description:
        "Going through each clothing piece to ensure supreme quality standards are met",
      icon: s6,
    },
    {
      id: 7,
      title: "Package",
      description: "Folding and packing with the utmost care",
      icon: s7,
    },
  ];

  return (
    <section className=" py-16 px-4 pt-0 -mt-16 ">
      <div className="max-w-7xl mx-auto text-center ">
        {steps.map((step) => (
          <Card key={step.id} step={step}></Card>
        ))}
      </div>
    </section>
  );
};

export default ProcessSectionCard;

const Card = ({ step }: { step: Step }) => {
  return (
    <div className="inline-block align-top m-5 mx-6 group  rounded-lg transition-all duration-300 ease-out cursor-pointer ">
      <div
        style={{ boxShadow: "0px 3px 15px -7px #000000c4" }}
        className={`relative w-64 h-60
              rounded-lg  text-center
              bg-white `}
      >
        {/* Step Number */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out
                w-8 h-8 rounded-full bg-white shadow group-hover:bg-orange-500 group-hover:text-white
                flex items-center justify-center text-sm font-semibold z-30 "
        >
          {step.id}
        </div>

        <div className=" rounded-lg z-20  relative text-left overflow-hidden w-full h-full p-6 transition-all duration-300 ease-out ">
          <div className=" -z-10 rounded-lg absolute top-60 left-0 w-full h-full bg-[#07B4B0] group-hover:top-0 transition-all duration-400 ease-out "></div>
          <div className=" group-hover:text-white transition-all duration-400 ease-out  ">
            {/* Icon */}
            <div className="text-3xl mb-4 text-orange-500">
              <Image src={step.icon} alt={step.title}></Image>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 group-hover:text-white transition-all duration-400 ease-out  text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
