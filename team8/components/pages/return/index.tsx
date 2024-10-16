import Link from "next/link";
import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
const ReturnProduct = () => {
	const accountLinks = [
		{ name: "Login", href: "/login" },
		{ name: "Register", href: "/register" },
		{ name: "Forgotten Password", href: "/forgot-password" },
		{ name: "My Account", href: "/my-account" },
		{ name: "Address Books", href: "/address-books" },
		{ name: "Wish List", href: "/wish-list" },
		{ name: "Order History", href: "/order-history" },
		{ name: "Downloads", href: "/downloads" },
		{ name: "Reward Points", href: "/reward-points" },
		{ name: "Returns", href: "/returns" },
		{ name: "Transactions", href: "/transactions" },
		{ name: "Newsletter", href: "/newsletter" },
		{ name: "Recurring payments", href: "/recurring-payments" },
	  ];
  return (
    <div className="container text-[#555555]">
      <ul className="my-5 mb-10">
        <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
          <Link href="" className="hover:text-[#337ab7] ">
            Home
          </Link>
          <span>
            <MdKeyboardArrowRight className="inline-block mx-[10px] size-4" />
          </span>
        </li>
        <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
          Return
        </li>
      </ul>
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="md:col-span-9 col-span-12 mb-[23px]">
          <h2 className="mt-5 mb-[10px] text-heading1 text-[#222222]">
            Product Returns
          </h2>
          <p className="mb-[10px] text-caption leading-[18px]">
            Please complete the form below to request product returns.
          </p>
          <form action="">
            <fieldset>
              <legend className="w-full text-heading3 font-normal py-[7px] mb-5 text-[#333] border-b border-[#e5e5e5]">
                Order Information
              </legend>
              <div className="-mx-[15px] mb-[15px] md:flex items-center">
                <label
                  htmlFor="input-firstname"
                  className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                >
                  <FaAsterisk className="absolute text-red-500 md:top-2 size-1 right-20 top-1" />
                  Firstname
                </label>
                <div className="px-[15px] w-full md:w-5/6  md:float-left min-h-[1px] text-info">
                  <input
                    type="text"
                    name="firstname"
                    value=""
                    placeholder="Firstname"
                    id="input-firstname"
                    className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                  />
                </div>
              </div>
              <div className="-mx-[15px] mb-[15px] md:flex items-center">
                <label
                  htmlFor="input-lastname"
                  className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                >
                  <FaAsterisk className="absolute text-red-500 md:top-2 top-1 size-1 right-20" />
                  Lastname
                </label>
                <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
                  <input
                    type="text"
                    name="lastname"
                    value=""
                    placeholder="Lastname"
                    id="input-lastname"
                    className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                  />
                </div>
              </div>

              <div className="-mx-[15px] mb-[15px] md:flex items-center">
                <label
                  htmlFor="input-email"
                  className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                >
                  <FaAsterisk className="absolute text-red-500 md:top-2 top-1 size-1 right-14" />
                  E-Mail
                </label>
                <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
                  <input
                    type="email"
                    name="email"
                    value=""
                    placeholder="E-Mail"
                    id="input-email"
                    className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                  />
                </div>
              </div>

              <div className="-mx-[15px] mb-[15px] md:flex items-center">
                <label
                  htmlFor="input-telephone"
                  className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                >
                  <FaAsterisk className="absolute text-red-500 md:top-2 top-1 size-1 right-20" />
                  Telephone
                </label>
                <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
                  <input
                    type="tel"
                    name="telephone"
                    value=""
                    placeholder="Telephone"
                    id="input-telephone"
                    className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                  />
                </div>
              </div>

              <div className="-mx-[15px] mb-[15px] md:flex items-center">
                <label
                  htmlFor="input-order-id"
                  className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                >
                  <FaAsterisk className="absolute text-red-500 md:top-2 top-1 size-1 right-16" />
                  Order ID
                </label>
                <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
                  <input
                    type="text"
                    name="order-id"
                    value=""
                    placeholder="Order ID"
                    id="input-order-id"
                    className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                  />
                </div>
              </div>

              <div className="-mx-[15px] mb-[15px] md:flex items-center">
                <label
                  htmlFor="input-order-date"
                  className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                >
                  Order Date
                </label>
                <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info relative">
                  <input
                    type="date"
                    name="order-date"
                    value=""
                    placeholder="Order Date"
                    id="input-order-date"
                    className="px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="w-full text-heading3 font-normal py-[7px] mb-5 text-[#333] border-b border-[#e5e5e5]">
                Product Information
              </legend>
              <div className="-mx-[15px] mb-[15px] md:flex items-center">
                <label
                  htmlFor="input-productName"
                  className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                >
                  <FaAsterisk className="absolute text-red-500 md:top-2 size-1 lg:right-[104px] md:right-16 right-[104px] top-1" />
                  Product Name
                </label>
                <div className="px-[15px] w-full md:w-5/6  md:float-left min-h-[1px] text-info">
                  <input
                    type="text"
                    name="productName"
                    value=""
                    placeholder="Product Name"
                    id="input-productName"
                    className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                  />
                </div>
              </div>
              <div className="-mx-[15px] mb-[15px] md:flex items-center">
                <label
                  htmlFor="input-productCode"
                  className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                >
                  <FaAsterisk className="absolute text-red-500 md:top-2 size-1 lg:right-[100px] md:right-16 right-[100px] top-1" />
                  Product Code
                </label>
                <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
                  <input
                    type="text"
                    name="productCode"
                    value=""
                    placeholder="Product Code"
                    id="input-productCode"
                    className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                  />
                </div>
              </div>

              <div className="-mx-[15px] mb-[15px] md:flex items-center">
                <label
                  htmlFor="input-quantity"
                  className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                >
                  Quantity
                </label>
                <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
                  <input
                    type="text"
                    name="quantity"
                    value=""
                    placeholder="Quantity"
                    id="input-quantity"
                    className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                  />
                </div>
              </div>
              <div className="-mx-[15px] mb-[15px] md:flex ">
                <label className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]">
                  <FaAsterisk className="absolute text-red-500 md:top-2 size-1 lg:right-[124px] md:right-20 right-[124px] top-1" />
                  Reason for Return
                </label>
                <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
                  <div className="pt-[7px]">
                    <label className="flex items-center gap-2">
                      <input type="radio" value="1" name="return_reason_id" />{" "}
                      Dead On Arrival
                    </label>
                  </div>
                  <div className="pt-[7px]">
                    <label className="flex items-center gap-2">
                      <input type="radio" value="3" name="return_reason_id" />{" "}
                      Order Error
                    </label>
                  </div>
                  <div className="pt-[7px]">
                    <label className="flex items-center gap-2">
                      <input type="radio" value="2" name="return_reason_id" />{" "}
                      Received Wrong Item
                    </label>
                  </div>
                  <div className="pt-[7px]">
                    <label className="flex items-center gap-2">
                      <input type="radio" value="5" name="return_reason_id" />{" "}
                      Other
                    </label>
                  </div>
                </div>
              </div>
			  <div className="-mx-[15px] mb-[15px] md:flex ">
                <label className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]">
                  <FaAsterisk className="absolute text-red-500 md:top-2 size-1 lg:right-[124px] md:right-20 right-[124px] top-1" />
                  Product is opened
                </label>
                <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
                  <div className="pt-[7px] flex items-center gap-2">
                    <label className="flex items-center gap-2">
						<input type="radio" value="1" name="opened"/> Yes
					</label>
					<label className="flex items-center gap-2">
						<input type="radio" value="0" name="opened"/> No
					</label>
                  </div>


                </div>
              </div>
			  <div className="-mx-[15px] mb-[15px] md:flex ">
			  <label className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]">
			  	Other details
                </label>
				<div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
				<textarea className="w-full px-3 py-[6px] leading-none bg-white border border-solid border-[#ccc] outline-none" id="input-comment" placeholder="Other details" rows={10} name="comment"></textarea>
				</div>
			  </div>
			  <div className="flex items-center justify-between">
				<div className="text-sub-heading">
					<Link className="py-[7px] px-3 bg-[#555555] text-white hover:bg-[#337AB7]" href="">Back</Link>
				</div>
				<div className="text-sub-heading">
					<button type="submit" className="py-[7px] px-3 bg-[#337ab7] text-white leading-[18px] hover:bg-[#2e6da4]">Submit</button>
					
				</div>
			  </div>
            </fieldset>
          </form>
        </div>
        <div className="md:col-span-3  md:block hidden">
			<h2 className="text-heading2 font-medium mt-5 mb-[10px] leading-none">Account</h2>
			<div className="mb-5">
				<ul className="list-none">
				{accountLinks.map((link, index) => (
					<li key={index} className="text-caption leading-[18px] flex items-center gap-2 mb-[3px]">
					<IoIosArrowForward />
					<Link href={link.href} className="hover:text-[#337ab7]">
						{link.name}
					</Link>
					</li>
				))}

				</ul>
			</div>
		</div>
      </div>
    </div>
  );
};

export default ReturnProduct;
