import Link from "next/link";
import React from "react";

const AddressAndLinks = () => {
  return (
    <div className=" flex justify-between my-3 ">
      <div>
        {/* Contact Section */}
        <div className="">
          <address className="text-sm flex flex-col gap-2 ">
            <p>29 SE 2nd Ave, Miami Florida 33131, United States</p>
            <a href="mailto:info@zaheen.com" className="block text-blue-600">
              info@zaheen.com
            </a>
            <p className=" font-bold text-lg ">(+92) 3942 7879</p>
          </address>
        </div>
      </div>

      <div className=" flex justify-end -mt-10 ">
        {/* Footer Navigation Links */}
        <div className="w-64">
          <h2 className=" uppercase font-bold my-2 ">Pages</h2>
          <ul className="text-sm">
            <li>
              <Link
                href="/about"
                className="block text-gray-800 hover:text-blue-600 mb-2"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block text-gray-800 hover:text-blue-600 mb-2"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block text-gray-800 hover:text-blue-600 mb-2"
              >
                Our Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Information Links */}
        <div className="w-64">
          <h2 className=" uppercase font-bold my-2 ">Information</h2>
          <ul className="text-sm">
            <li>
              <Link
                href="/account"
                className="block text-gray-800 hover:text-blue-600 mb-2"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                href="/corporate"
                className="block text-gray-800 hover:text-blue-600 mb-2"
              >
                Corporate Enquires
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="block text-gray-800 hover:text-blue-600 mb-2"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddressAndLinks;
