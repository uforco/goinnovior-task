import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-teal-500 text-white text-sm">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-white" />
            <span>Kashimpur, Gazipur Sadar / Gazipur</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <span>+880 01713-027875</span>
          </div>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-center gap-4 bg-white h-10 px-3 text-lg  ">
          <Link href="#" className="hover:text-gray-200 transition text-[#EE4B21] ">
            <FaFacebookF />
          </Link>
          <Link href="#" className="hover:text-gray-200 transition text-[#EE4B21] ">
            <FaTwitter />
          </Link>
          <Link href="#" className="hover:text-gray-200 transition text-[#EE4B21] ">
            <FaInstagram />
          </Link>
          <Link href="#" className="hover:text-gray-200 transition text-[#EE4B21] ">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
