import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { TiSocialGooglePlus } from "react-icons/ti";
import { RiSkypeFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-xs bg-[#222222] text-[#fff] pt-[55px] ">
      <div className="container ">
        <div className="w-full flex flex-wrap pb-[21px]">
          <div className="w-2/5">
            <h3 className="text-[18px] uppercase font-semibold	after:content-[''] after:block after:w-10 after:h-0.5 after:bg-blue-500 after:mt-4 after:mb-5">
              Contact Us
            </h3>
            <div>
              <ul>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal">
                    <IoLocationSharp className="w-3 h-4 mr-[10px]" />
                    <span className="font-medium pr-2 text-white-1 	">
                      Address :
                    </span>
                    My Company, 42 avenue des Champs Elysées
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal">
                    <MdOutlineMailOutline className="w-3 h-3 mr-[10px]" />
                    <span className="text-xs font-medium pr-2 text-white-1 	">
                      Email :
                    </span>
                    <Link
                      className="hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main"
                      href={""}
                    >
                      sales@yourcompany.com
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal">
                    <FaPhoneAlt className="w-2 h-3 mr-[10px]" />
                    <span className="text-xs font-medium pr-2 text-white-1 	">
                      Phone :
                    </span>
                    0123456789
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex mt-8 mb-2.5">
                <li className="flex items-center justify-center rounded-sm w-10 h-10 bg-[#456bbe] mr-2 hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                  <Link href={""}>
                    <FaFacebookF className="text-white  w-[11px] h-[18px]" />
                  </Link>
                </li>
                <li className=" flex items-center justify-center rounded-sm w-10 h-10 bg-[#1d9ffa] mr-2 hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                  <Link href={""}>
                    <IoLogoTwitter className="text-white w-[17px] h-[18px]" />
                  </Link>
                </li>
                <li className=" flex items-center justify-center  rounded-sm w-10 h-10 bg-[#e04d3f] mr-2 hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                  <Link href={""}>
                    <TiSocialGooglePlus className="text-white  w-[26px] h-[28px]" />
                  </Link>
                </li>
                <li className=" flex items-center justify-center rounded-sm w-10 h-10 bg-[#4899d2] mr-2 hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                  <Link href={""}>
                    <RiSkypeFill className=" w-[26px] h-[28px] text-white" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/5">
            <h3 className="text-[18px] uppercase font-semibold	after:content-[''] after:block after:w-10 after:h-0.5 after:bg-blue-500 after:mt-4 after:mb-5">
              Information
            </h3>
            <div>
              <ul>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>About Us</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>FAQ</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Order history</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Oder information</Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/5">
            <h3 className="text-[18px] uppercase font-semibold	after:content-[''] after:block after:w-10 after:h-0.5 after:bg-blue-500 after:mt-4 after:mb-5">
              Extras
            </h3>
            <div>
              <ul>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Contact Us</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Returns</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Site Map</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>My Account</Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/5">
            <h3 className="text-[18px] uppercase font-semibold	after:content-[''] after:block after:w-10 after:h-0.5 after:bg-blue-500 after:mt-4 after:mb-5 hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
              My Account
            </h3>
            <div>
              <ul>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Brands</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Gift Vouchers</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Affiliates</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Specials</Link>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-footer-info text-caption font-normal hover:transform hover:translate-x-2 transition-transform duration-500 hover:text-bg-main">
                    <Link href={""}>Our Blog</Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#181818] pt-[25px] pb-[18px]">
        <div className="container">
          <div className=" flex  ">
            <div className="w-1/2	">
              <h3 className="text-[20px] uppercase mb-[10px] text-[#0083c1]  font-semibold">
                Need Help ?
              </h3>
              <p className="text-[#cccccc] text-[12px]">
                SUPPORT TEAM 24/7 AT (844) 555-8386
              </p>
            </div>

            <form
              action=""
              className="w-1/2  relative flex items-center justify-between  space-x-2"
            >
              <Input
                type="email"
                placeholder="Your Email Address..."
                className="text-[12px] w-4/5 h-[45px] pl-[55px] rounded-[3px] text-black"
              />
              <MdEmail className="absolute left-2 text-[#999999] bg-white" />

              <Button
                className="uppercase  text-[12px] h-[45px] py-1.5	px-3 font-normal rounded-[3px] bg-[#0083c1] hover:bg-[#0083c1] "
                type="submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="container  py-[32px]">
          <div className="flex">
            <div className="w-5/12	 flex items-center justify-between">
              <h3 className="text-[18px] uppercase mb-[10px] leading-10  font-medium">
                Download Our App
              </h3>
              <div className="relative aspect-square w-[119px] h-[40px] rounded-sm">
                <Image
                  src="/images/ggplay.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-sm "
                />
              </div>
              <div className="relative aspect-square w-[119px] h-[40px] rounded-sm">
                <Image
                  src="/images/ggplay.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-sm "
                />
              </div>
            </div>
            <div className="w-7/12 flex flex-row justify-end ">
              <div className="relative aspect-square w-[52px] h-[32px]  ml-[7px]">
                <Image
                  src="/images/visa.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-sm "
                />
              </div>
              <div className="relative aspect-square w-[52px] h-[32px]  ml-[7px]">
                <Image
                  src="/images/visa.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-sm "
                />
              </div>
              <div className="relative aspect-square w-[52px] h-[32px]  ml-[7px]">
                <Image
                  src="/images/visa.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-sm "
                />
              </div>
              <div className="relative aspect-square w-[52px] h-[32px]  ml-[7px]">
                <Image
                  src="/images/visa.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-sm "
                />
              </div>
              <div className="relative aspect-square w-[52px] h-[32px]  ml-[7px]">
                <Image
                  src="/images/visa.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-sm "
                />
              </div>
              <div className="relative aspect-square w-[52px] h-[32px]  ml-[7px]">
                <Image
                  src="/images/visa.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-sm "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end text-[12px] mt-[5px]">
            <p>
              Destino - Premium Multipurpose HTML5/CSS3 Theme - Designed by{" "}
            </p>
            <Link href={""} className="text-bg-main">
              &nbsp;SmartAddons.Com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
