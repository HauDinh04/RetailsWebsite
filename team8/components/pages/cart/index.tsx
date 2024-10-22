"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { FaAsterisk } from "react-icons/fa";
import ItemCart from "./ItemCart";
const Cart = () => {
  const [show, setShow] = useState<number>(1);
  const cartItems = [
    {
      id: 1,
      image:
        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/shop/product/E3.jpg",
      name: "Emasa rumas gacem",
      model: "Pt 001",
      quantity: 1,
      unitPrice: 120,
      totalPrice: 120,
    },
    {
      id: 2,
      image:
        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/shop/product/E4.jpg",
      name: "Another Product",
      model: "Pt 002",
      quantity: 2,
      unitPrice: 150,
      totalPrice: 300,
    },
    {
      id: 3,
      image:
        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/shop/product/E4.jpg",
      name: "Another Product",
      model: "Pt 002",
      quantity: 2,
      unitPrice: 150.0,
      totalPrice: 300.0,
    },
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
            Shopping Cart
          </li>
        </ul>
        <div className="w-full mb-[23px] pb-1">
          <h2 className="mt-5 mb-[10px] font-extralight text-[30px] text-[#222222]">
            Shopping Cart
          </h2>
          <div className="mb-[15px] p-1 overflow-x-auto">
            <table className="mb-5 w-full max-w-full bg-transparent table-auto border-collapse border border-slate-300 text-[#555555] text-caption">
              <thead className="bg-[#EAEAEA] leading-[18px]">
                <tr className="border border-slate-300 ">
                  <th className="text-center border border-slate-300 p-2">
                    Image
                  </th>
                  <th className="text-left border border-slate-300 p-2">
                    Product Name
                  </th>
                  <th className="text-left border border-slate-300 p-2">
                    Model
                  </th>
                  <th className="text-left border border-slate-300 p-2">
                    Quantity
                  </th>
                  <th className="text-right border border-slate-300 p-2">
                    Unit Price
                  </th>
                  <th className="text-right border border-slate-300 p-2">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <ItemCart key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="text-heading3 font-normal">
            What would you like to do next?
          </h3>
          <p className="text-caption mb-[10px]">
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </p>
          <div className="mb-5">
            {/* Use Coupon Code */}
            <div className="border-[#ddd] rounded-sm border">
              <div
                className="text-[#333] bg-[#f5f5f5] px-[15px] py-[10px] rounded-t flex items-center justify-between cursor-pointer"
                onClick={() => setShow(1)}
              >
                <h4 className="text-heading4 font-medium flex items-center hover:cursor-pointer hover:text-[#337AB7]">
                  Use Coupon Code
                  <GoTriangleDown className="size-5" />
                </h4>
              </div>
              <div
                style={{
                  maxHeight: show === 1 ? "300px" : "0px",
                  padding: show === 1 ? "10px 15px" : "0px 15px",
                  overflow: "hidden",
                  transition: "all 0.5s ease",
                }}
                className="border-t border-[#ddd] border-solid"
              >
                <label
                  className="md:w-1/6 md:float-left min-h-1 px-[15px] text-info mb-[5px]"
                  htmlFor="input-coupon"
                >
                  Enter your coupon here
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="input-coupon"
                    name="coupon"
                    className="text-caption w-full float-left h-[34px] py-[6px] px-3 leading-none bg-white border border-solid border-[#ccc] outline-none"
                    placeholder="Enter your coupon here"
                  />
                  <span className="h-[34px] leading-[18px] text-white hover:bg-[#2e6da4] bg-[#337ab7] border border-solid border-[#2e6da4] inline-block px-3 py-[6px] text-sub-heading font-normal">
                    <input
                      type="button"
                      value="Apply Coupon"
                      className="leading-none cursor-pointer"
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Estimate Shipping & Taxes */}
            <div
              className="border-[#ddd] rounded-sm border"
              onClick={() => setShow(2)}
            >
              <div className="text-[#333] bg-[#f5f5f5] px-[15px] py-[10px] rounded-t flex items-center justify-between cursor-pointer">
                <h4 className="text-heading4 font-medium flex items-center hover:cursor-pointer hover:text-[#337AB7]">
                  Estimate Shipping & Taxes
                  <GoTriangleDown className="size-5" />
                </h4>
              </div>
              <div
                style={{
                  maxHeight: show === 2 ? "300px" : "0px",
                  padding: show === 2 ? "10px 15px" : "0px 15px",
                  overflow: "hidden",
                  transition: "all 0.5s ease",
                }}
                className="border-t border-[#ddd] border-solid"
              >
                <p className="px-[15px] text-info mb-[10px]">
                  Enter your destination to get a shipping estimate.
                </p>
                <div className="-mx-[15px] mb-[15px] md:flex">
                  <label
                    htmlFor="input-country"
                    className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                  >
                    <FaAsterisk className="absolute text-red-500 top-2 size-1 right-16" />
                    Country
                  </label>
                  <div className="px-[15px] w-full md:w-5/6 md:float-left min-h-[1px] text-info">
                    <select
                      name="country_id"
                      id="input-country"
                      className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                    >
                      <option value=""> --- Please Select --- </option>
                      <option value="244">Aaland Islands</option>
                      <option value="1">Afghanistan</option>
                      <option value="2">Albania</option>
                      <option value="3">Algeria</option>
                    </select>
                  </div>
                </div>
                <div className="-mx-[15px] mb-[15px] md:flex">
                  <label
                    htmlFor="input-zone"
                    className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                  >
                    <FaAsterisk className="absolute text-red-500 top-2 size-1 right-[102px]" />
                    Region / State
                  </label>
                  <div className="px-[15px] w-full md:w-5/6  md:float-left min-h-[1px] text-info">
                    <select
                      name="country_id"
                      id="input-zone"
                      className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                    >
                      <option value=""> --- Please Select --- </option>
                      <option value="3513">Aberdeen</option>p{" "}
                      <option value="3514">Aberdeenshire</option>
                      <option value="3515">Anglesey</option>
                      <option value="3516">Angus</option>
                      <option value="3517">Argyll and Bute</option>
                      <option value="3518">Bedfordshire</option>
                      <option value="3519">Berkshire</option>
                    </select>
                  </div>
                </div>
                <div className="-mx-[15px] mb-[15px] md:flex">
                  <label
                    htmlFor="input-postcode"
                    className="relative md:pt-[7px] md:mb-0 md:text-right md:w-1/6 md:float-left text-caption leading-none max-w-full px-[15px]"
                  >
                    <FaAsterisk className="absolute text-red-500 top-2 size-1 right-20" />
                    Post Code
                  </label>
                  <div className="px-[15px] w-full md:w-5/6  md:float-left min-h-[1px] text-info">
                    <input
                      type="text"
                      name="postcode"
                      placeholder="Post Code"
                      id="input-postcode"
                      className="w-full px-3 py-[6px] h-[34px] leading-none bg-white border border-solid border-[#ccc] outline-none"
                    />
                  </div>
                </div>
                <button className="leading-[18px] text-white hover:bg-[#2e6da4] bg-[#337ab7] border border-solid border-[#2e6da4] inline-block px-3 py-[6px] text-sub-heading font-normal">
                  Get Quotes
                </button>
              </div>
            </div>

            {/* Use Gift Certificate */}
            <div
              className="border-[#ddd] rounded-sm border"
              onClick={() => setShow(3)}
            >
              <div className="text-[#333] bg-[#f5f5f5] px-[15px] py-[10px] rounded-t flex items-center justify-between cursor-pointer">
                <h4 className="text-heading4 font-medium flex items-center hover:cursor-pointer hover:text-[#337AB7]">
                  Use Gift Certificate
                  <GoTriangleDown className="size-5" />
                </h4>
              </div>
              <div
                style={{
                  maxHeight: show === 3 ? "300px" : "0px",
                  padding: show === 3 ? "10px 15px" : "0px 15px",
                  overflow: "hidden",
                  transition: "all 0.5s ease",
                }}
                className="border-t border-[#ddd] border-solid"
              >
                <label
                  className="md:w-1/6 md:float-left min-h-1 px-[15px] text-info mb-[5px]"
                  htmlFor="input-gift"
                >
                  Enter your gift certificate code here
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="input-gift"
                    name="gift"
                    className="text-caption w-full float-left h-[34px] py-[6px] px-3 leading-none bg-white border border-solid border-[#ccc] outline-none"
                    placeholder="Enter your gift certificate code here"
                  />
                  <span className="h-[34px] leading-[18px] text-white hover:bg-[#2e6da4] bg-[#337ab7] border border-solid border-[#2e6da4] inline-block px-3 py-[6px] text-sub-heading font-normal cursor-pointer">
                    <input
                      type="button"
                      value="Apply Gift Certificate"
                      className="leading-none cursor-pointer"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-caption leading-[18px]">
          <div className="grid grid-cols-12">
            <div className="md:col-start-9 md:col-span-4 col-span-12">
              <table className="border-collapse border border-[#ddd] mb-5 w-full max-w-full">
                <tbody className="w-full">
                  <tr className="border border-[#ddd]">
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      <strong>Sub-Total:</strong>
                    </td>
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      $168.71
                    </td>
                  </tr>
                  <tr className="border border-[#ddd]">
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      <strong>Flat Shipping Rate:</strong>
                    </td>
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      $4.69
                    </td>
                  </tr>
                  <tr className="border border-[#ddd]">
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      <strong>Eco Tax (-2.00):</strong>
                    </td>
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      $5.62
                    </td>
                  </tr>
                  <tr className="border border-[#ddd]">
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      <strong>VAT (20%):</strong>
                    </td>
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      $34.68
                    </td>
                  </tr>
                  <tr className="border border-[#ddd]">
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      <strong>Total:</strong>
                    </td>
                    <td className="text-right p-2 leading-none border border-[#ddd]">
                      $213.70
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="float-left">
            <Link
              href="/"
              className="text-white bg-[#337ab7] hover:bg-[#2e6da4] border-[#2e6da4] border border-solid px-3 py-[6px] text-sub-heading font-normal leading-none"
            >
              Continue Shopping
            </Link>
          </div>
          <div className="float-right">
            <Link
              href="/checkout"
              className="text-white bg-[#337ab7] hover:bg-[#2e6da4] border-[#2e6da4] border border-solid px-3 py-[6px] text-sub-heading font-normal leading-none"
            >
              Checkout
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Cart;
