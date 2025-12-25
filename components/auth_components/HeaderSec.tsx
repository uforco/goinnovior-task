import Image from "next/image";
import logo from "@/public/Maskgroup.png";
import Link from "next/link";

const HeaderSec = () => {
  return (
    <div className=" flex justify-between items-center m-4 mx-6  ">
      <div>
        <Image src={logo} alt=""></Image>
      </div>
      <div className=" flex justify-center items-center gap-4 ">
        <Link
          className=" border border-amber-50 rounded-full bg-white/30 text-white "
          href={""}
        >
          <p className=" p-1 px-5 ">Log In</p>
        </Link>
        <Link
          className=" border border-amber-50 rounded-full bg-white/30 text-white "
          href={""}
        >
          <p className=" p-1 px-5 ">Sing Up</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default HeaderSec;
