import { TfiLocationPin } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactInfoSection() {
  return (
    <section className="w-full bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          {/* Location */}
          <div className="flex items-start gap-3">
            <div className=" text-3xl text-teal-500 ">
              <TfiLocationPin></TfiLocationPin>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-teal-500">Location</h4>
              <p className="text-sm text-gray-600">
                Kashimpur, Gazipur Sadar / Gazipur
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className=" text-4xl  text-teal-500 ">
              <HiOutlineMail></HiOutlineMail>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-teal-500">Email</h4>
              <a
                href="mailto:compliance@danysknitwear.com"
                className="text-sm text-gray-600 hover:text-teal-500"
              >
                compliance@danysknitwear.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
