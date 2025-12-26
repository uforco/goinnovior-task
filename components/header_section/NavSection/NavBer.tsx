import Image from "next/image";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "@/public/WhatsApp_Image_2024-10-05_at_11.43.07_1aaadc00__1___1_-removebg-preview (1) 1.png"
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow px-4 md:px-2 xl:px-0 ">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            <a href="#" className="text-orange-500">
              Home
            </a>
            <a href="#" className="hover:text-orange-500">
              About Us
            </a>

            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <span>Our Services</span>
              <MdKeyboardArrowDown />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <span>Our Products</span>
              <MdKeyboardArrowDown />
            </div>

            <a href="#" className="hover:text-orange-500">
              Blogs
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Cart */}
            <div className="relative flex items-center gap-1 cursor-pointer text-gray-700 hover:text-orange-500">
              <FaShoppingCart />
              <span>Cart</span>
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </div>

            {/* Account */}
            <div className="hidden sm:flex items-center gap-1 cursor-pointer text-gray-700 hover:text-orange-500">
              <FaUser />
              <span>Your Account</span>
            </div>

            {/* Contact Button */}
            <Link
              href="#"
              className="bg-orange-500 text-white text-center px-4 py-2 rounded hover:bg-orange-600 w-33.5 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
