import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mx-auto mt-4">
      <Breadcrumb className="text-[14px]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Page</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact us</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-10 text-[30px] text-zinc-700 font-thin">
        Contact Us
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5897.682391770641!2d-71.098828!3d42.345909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f63dc43ccb%3A0xa15d5aa87d0f0c12!2s4%20Yawkey%20Way%2C%20Boston%2C%20MA%2002215!5e0!3m2!1sen!2sus!4v1729176142119!5m2!1sen!2sus"
          width="100%"
          height="350"
          loading="lazy"
        ></iframe>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-5 mb-10">
        <div className="col-span-12 md:col-span-4 text-zinc-700">
          <div className="text-[18px] ">Your Store</div>
          <div className="mt-2">
            <div className="flex gap-3">
              <FaHome className="text-[23px]" />
              <div className="text-[12px]">
                My Company, 42 avenue des Champs Elysées 75000 Paris France
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <FaPhoneAlt className="text-[14px]" />
              <div className="text-[12px]">Phone : 0123456789</div>
            </div>

            <div className="text-[12px] mt-4 leading-[24px]">
              Maecenas euismod felis et purus consectetur, quis fermentum
              velition. Aenean egestas quis turpis vehicula.Maecenas euismod
              felis et purus consectetur, quis fermentum velition. Aenean
              egestas quis turpis vehicula.It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English.
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="text-[18px] font-zinc-500">Contact Form</div>
          <div className="mt-3 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <label
                htmlFor="yourname"
                className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
              >
                Your Name
              </label>
              <div className="basis-full md:basis-5/6 md:pl-[15px]">
                <input
                  id="yourname"
                  type="text"
                  className="text-[12px] font-light h-[34px] w-full text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <label
                htmlFor="email"
                className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
              >
                E-Mail Address
              </label>
              <div className="basis-full md:basis-5/6 md:pl-[15px]">
                <input
                  id="email"
                  type="text"
                  className="text-[12px] font-light h-[34px] w-full text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between ">
              <label
                htmlFor="enquiry"
                className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
              >
                Enquiry
              </label>
              <div className="basis-full md:basis-5/6 md:pl-[15px]">
                <textarea
                  id="enquiry"
                  className="text-[12px] font-light h-[185px] w-full text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-[14px] text-white bg-[#555555] px-[12px] py-[7px] hover:bg-[#0083c1] cursor-pointer">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
