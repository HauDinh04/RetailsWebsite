import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import CartItem from "./CartItem";

export default function Header() {
  const CartItems = [
    {
      id:1,
      image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/shop/product/35.jpg", // Thay thế bằng URL thực tế
      name: "Filet Mign",
      quantity: 2,
      price: 250000
    },
    {
      id:2,
      image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/shop/product/35.jpg", // Thay thế bằng URL thực tế
      name: "Canon EOS 5D",
      quantity: 1,
      price: 150000
    },
   
  ];
  return (
    <header>
      <div className="bg-[#f1f1f1]">
        <div className="container flex flex-row items-center justify-between text-[#555555]">
          <div className="basis-1/2 flex items-center justify-start">
            <div className="relative group">
              <div className="flex h-[40px] pr-5 items-center justify-start text-caption relative after:absolute after:right-0  after:h-[13px] after:w-[1px] after:bg-[#cccccc] hover:text-[#337ab7] cursor-pointer">
                <span className="">USD</span>
                <FaAngleDown className="ml-[3px]" />
              </div>
              <ul className="items-center absolute hidden group-hover:block top-full left-[-20px] min-w-[105px] bg-white-1 py-[5px] shadow-lg shadow-[#f1f1f1]-500/50 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-800 ease-out translate-y-[-10px] z-50">
                <li className=" hover:bg-[#f1f1f1]">
                  <Link
                    href="#"
                    className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] block"
                  >
                    (€)&nbsp;Euro
                  </Link>
                </li>
                <li className=" hover:bg-[#f1f1f1]">
                  <Link
                    href="#"
                    className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] block"
                  >
                    (€)&nbsp;Pounds
                  </Link>
                </li>
                <li className=" hover:bg-[#f1f1f1]">
                  <Link
                    href="#"
                    className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] block"
                  >
                    (€)&nbsp;USD
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative group flex flex-row items-center px-5 cursor-pointer">
              <div className="relative aspect-square w-[16px] h-[11px] mr-[2px]">
                <Image
                  src="/images/gb.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex h-[40px] items-center justify-start text-info hover:text-bg-main">
                <span className="hidden md:block">English</span>
                <FaAngleDown className="ml-[3px]" />
              </div>

              <ul className="items-center absolute hidden group-hover:block top-full left-0 min-w-[105px] bg-white-1 py-[5px] shadow-lg shadow-[#f1f1f1]-500/50 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-800 ease-out translate-y-[-10px] z-50">
                <li className=" hover:bg-[#f1f1f1]">
                  <Link
                    href="#"
                    className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] flex items-center"
                  >
                    <div className="relative aspect-square w-[16px] h-[11px] mr-[2px]">
                      <Image
                        src="/images/gb.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    English
                  </Link>
                </li>
                <li className=" hover:bg-[#f1f1f1]">
                  <Link
                    href="#"
                    className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] flex items-center"
                  >
                    <div className="relative aspect-square w-[16px] h-[11px] mr-[2px]">
                      <Image
                        src="/images/gb.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    Arabic
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="">
              <ul className="flex items-center justify-end text-caption">
                <li className="px-[17px] h-[40px] relative md:after:absolute md:after:right-0 md:after:top-1/2 md:after:translate-y-[-50%] md:after:h-[13px] md:after:w-[1px] md:after:bg-[#cccccc]">
                  <Link href="#" className="hidden md:block hover:text-bg-main">
                    Welcome Customer!
                  </Link>
                </li>
                <li className="pl-[17px] md:pr-[17px] h-[40px] relative md:after:absolute md:after:right-0 md:after:top-1/2 md:after:translate-y-[-50%] md:after:h-[13px] md:after:w-[1px] md:after:bg-[#cccccc]">
                  <Link href="#" className="hover:text-bg-main">
                    Sign In
                  </Link>
                </li>
                <li className="pl-[17px]">
                  <Link href="#" className="hover:text-bg-main">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pt-[31px] lg:pb-[33px]">
        <div className="container">
          <div className="pt-[30px] pb-[16px] md:pt-0 md:pb-0 ">
            <div className="flex sm:flex-row flex-wrap lg:flex-nowrap h-[61px] justify-between gap-y-6 md:gap-0 md:mb-[84px] lg:mb-0 mb-[60px]">
              <div className="md:order-1 order-1 xl:basis-3/12 lg:basis-3/12 md:basis-full basis-7/12 text-center md:pt-[13px] md:pb-5 md:flex md:items-center md:justify-center lg:justify-start">
                <div className="relative aspect-square w-[194px] h-[38px] cursor-pointer">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:order-2 order-3 xl:basis-5/12 lg:basis-5/12 md:basis-8/12 sm:basis-full">
                <div className="flex w-[420px] items-center md:py-[7px] md:px-[15px] relative">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search product..."
                    className="h-[46px] w-full rounded-full pl-[30px] py-[6px] text-[#555555] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 block sm:text-sm"
                  />

                  <Button
                    type="submit"
                    className="rounded-none absolute right-[28px] bg-white-1 hover:bg-white-1 px-2"
                  >
                    <FaSearch className="text-black-1 w-[13px] h-[14px]" />
                  </Button>
                </div>
              </div>
              <div className="md:order-3 order-2 basis-5/12 sm:basis-4/12 flex flex-row items-center justify-end lg:justify-end xl:justify-between md:pl-0 lg:pl-[18px]">
                <div className="hidden xl:flex flex-row items-center">
                  <FaPhone className="w-[11px] h-[14px] text-[#0083c1]" />
                  <span className="text-sub-heading pl-2 text-[#555555]">
                    Call Us: (888) 123456789
                  </span>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-none hover:bg-white px-0 focus:outline-none bg-white-1"
                      >
                        <div className="flex flex-row">
                          <div className="relative aspect-square w-[31px] h-[40px] my-[5px] mx-[10px]">
                            <Image
                              src="/images/cart.png"
                              alt="cart"
                              fill
                              className="object-cover"
                            />
                            <div className="w-[22px] h-[22px] rounded-full bg-[#ff5555] absolute left-[-10px] bottom-[-8px] text-white-1">
                              2
                            </div>
                          </div>
                          <div className="">
                            <span className="font-semibold">My cart</span>
                            <p className="text-[#999] text-left text-[14px]">
                              $0.00
                            </p>
                          </div>
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[330px] mt-[10px] left-[-106px]">
                      <DropdownMenuLabel>
                        <table className="w-full">
                          <tbody>
                            {CartItems.map(item=>(
                              <CartItem key={item.id} image={item.image} name={item.name} quantity={item.quantity} price={item.price}/>
                            ))}
                          </tbody>
                        </table>
                      </DropdownMenuLabel>

                      <DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="flex flex-row items-center justify-between text-black-2 text-sub-heading py-2 px-2">
                          <p className="">Sub-Total</p>
                          <span className="font-normal">$1,060.00</span>
                        </div>
                        <div className="flex flex-row items-center justify-between text-black-2 text-sub-heading py-2 px-2">
                          <p className="">Eco Tax (-2.00)</p>
                          <span className="font-normal">$1.00</span>
                        </div>
                        <div className="flex flex-row items-center justify-between text-black-2 text-sub-heading py-2 px-2">
                          <p className="">VAT (20%)</p>
                          <span className="font-normal">$200.00</span>
                        </div>
                        <div className="flex flex-row items-center justify-between text-black-2 text-sub-heading py-2 px-2">
                          <p className="">Total</p>
                          <span className="font-normal">$1,262.00</span>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel className=" flex items-center justify-end">
                          <Link
                            href="#"
                            className="bg-[#444] text-white py-[6px] px-[12px] text-sub-heading font-normal flex items-center hover:bg-bg-main"
                          >
                            <IoCartSharp className="mr-2" />
                            View cart
                          </Link>
                          <Link
                            href="#"
                            className="bg-[#444] text-white py-[6px] px-[12px] text-sub-heading font-normal ml-[18px] flex items-center hover:bg-bg-main"
                          >
                            <FaShare className="mr-2" />
                            Checkout
                          </Link>
                        </DropdownMenuLabel>
                      </DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
