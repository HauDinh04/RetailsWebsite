'use client'
import { Checkbox } from "@/components/customui/checkboxs";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/customui/textarea";
import Image from "next/image";
const CheckoutPage = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const handleChange = (value: string) => {
    setSelected((prev) => (prev === value ? null : value));
  };
  return (
    <div className="">
      <h2 className="text-[30px] font-light leading-[33px] mt-5 mb-[10px] text-customGray">
        Checkout{" "}
      </h2>
      <div className="flex flex-col md:flex-row bg-[#f5f5f5] py-5 px-5 ">
        <div className="grid grid-cols-1 w-1/4 gap-5">
          <div className="grid grid-cols-1 border p-[10px] bg-white ">
            <div className=" bg-[#5f6874] px-[10px] py-[15px] ">
              <h4 className="text-white text-[16px] font-semibold">
                Create an Account or Login
              </h4>
            </div>
            <div className="flex flex-col gap-1 p-[15px]">
              <div className="">
                <Checkbox
                  checked={selected === "option1"}
                  onCheckedChange={() => handleChange("option1")}
                />
                <label className="ml-2 text-[12px]">Register Account</label>
              </div>
              <div className="">
                <Checkbox
                  checked={selected === "option2"}
                  onCheckedChange={() => handleChange("option2")}
                />
                <label className="ml-2 text-[12px]">Guest Checkout</label>
              </div>
              <div className="">
                <Checkbox
                  checked={selected === "option3"}
                  onCheckedChange={() => handleChange("option3")}
                />
                <label className="ml-2 text-[12px]">Returning Customer</label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 border p-[10px] bg-white">
            <div className=" bg-[#5f6874] px-[10px] py-[15px] ">
              <h4 className="text-white text-[16px] font-semibold">
                Your Personal Details
              </h4>
            </div>
            <div className="flex flex-col gap-1 p-[15px]">
              <label htmlFor="" className="text-[12px]">
                * First Name
              </label>
              <Input
                placeholder="First Name"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
              <label htmlFor="" className="text-[12px]">
                *Last Name
              </label>
              <Input
                placeholder="Last Name"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
              <label htmlFor="" className="text-[12px]">
                * Email
              </label>
              <Input
                type="email"
                placeholder="First Name"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
              <label htmlFor="" className="text-[12px]">
                * Telephone
              </label>
              <Input
                required
                placeholder="Telephone"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
              <label htmlFor="" className="text-[12px]">
                * Fax
              </label>
              <Input
                required
                placeholder="Fax"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
            </div>
          </div>
          <div className="grid grid-cols-1 border p-[10px] bg-white">
            <div className=" bg-[#5f6874] px-[10px] py-[15px] ">
              <h4 className="text-white text-[16px] font-semibold">
                Your Address
              </h4>
            </div>
            <div className="flex flex-col gap-1 p-[15px]">
              <label htmlFor="" className="text-[12px]">
                * Company
              </label>
              <Input
                placeholder="Company"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
              <label htmlFor="" className="text-[12px]">
                *Address 1
              </label>
              <Input
                placeholder="Address 1"
                className="rounded-none text-[14px] block focus:outline-none focus:ring-0 "
              />
              <label htmlFor="" className="text-[12px]">
                * Address 2
              </label>
              <Input
                type=""
                placeholder="Address 3"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
              <label htmlFor="" className="text-[12px]">
                * City
              </label>
              <Input
                required
                placeholder="City"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
              <label htmlFor="" className="text-[12px]">
                * Post code
              </label>
              <Input
                type=""
                required
                placeholder="Post code"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
              <label htmlFor="" className="text-[12px]">
                * Country
              </label>
              <Input
                type=""
                required
                placeholder="Country"
                className="rounded-none outline-none text-[14px] block active::border-none focus:outline-none "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 gap-5 ml-5">
          <div className="border flex justify-between">
            <div className="w-1/2">
              <div className="grid grid-cols-1  p-[10px] bg-white ">
                <div className=" bg-[#5f6874] px-[10px] py-[15px] ">
                  <h4 className="text-white text-[16px] font-semibold">
                    Delivery Method
                  </h4>
                </div>
                <p className="text-[12px] p-[3px]">
                  Please select the preferred shipping method to use on this
                  order.
                </p>
                <div className="flex flex-col gap-1 p-[15px]">
                  <div className="">
                    <Checkbox
                      checked={selected === "Free"}
                      onCheckedChange={() => handleChange("Free")}
                    />
                    <label className="ml-2 text-[12px]">
                      Free Shipping - $0.00
                    </label>
                  </div>
                  <div className="">
                    <Checkbox
                      checked={selected === "ShippingRate"}
                      onCheckedChange={() => handleChange("ShippingRate")}
                    />
                    <label className="ml-2 text-[12px]">
                      Flat Shipping Rate - $7.50
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              {" "}
              <div className="grid grid-cols-1  p-[10px] bg-white ">
                <div className=" bg-[#5f6874] px-[10px] py-[15px] ">
                  <h4 className="text-white text-[16px] font-semibold">
                    Payment Method
                  </h4>
                </div>
                <p className="text-[12px] p-[3px]">
                  Please select the preferred payment method to use on this
                  order.
                </p>
                <div className="flex flex-col gap-1 p-[15px]">
                  <div className="">
                    <Checkbox
                      checked={selected === "CashOnDelivery"}
                      onCheckedChange={() => handleChange("CashOnDelivery")}
                    />
                    <label className="ml-2 text-[12px]">Cash On Delivery</label>
                  </div>
                  <div className="">
                    <Checkbox
                      checked={selected === "Paypal"}
                      onCheckedChange={() => handleChange("Paypal")}
                    />
                    <label className="ml-2 text-[12px]">Paypal</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border bg-white ">
            <div className="px-[15px] py-[10px] bg-[#5f6874] ">
              <h4 className="text-[16px] leading-4 text-white">
                Do you Have a Coupon or Voucher?
              </h4>
            </div>
            <div className="flex  flex-row">
              <div className="flex p-[15px]">
                <Input
                  type="text"
                  placeholder="enter your coupon here"
                  className="border rounded-none text-[12px]"
                />
                <Button className="bg-bg-main rounded-none text-[14px] font-thin ">
                  Apply Coupon
                </Button>
              </div>
              <div className="flex p-[15px]">
                <Input
                  type="text"
                  placeholder="enter your coupon here"
                  className="border rounded-none text-[12px]"
                />
                <Button className="bg-bg-main rounded-none text-[14px] font-thin">
                  Apply Voucher
                </Button>
              </div>
            </div>
          </div>
          <div className="border bg-white">
            <div className="px-[15px] py-[10px] bg-[#5f6874] ">
              <h4 className="text-[16px] leading-4 text-white">
                Shopping cart
              </h4>
            </div>
            {/* table here */}
            <table className="min-w-full border-collapse border border-gray-300 table-fixed">
              <thead>
                <tr className="bg-gray-200 text-[12px]">
                  <th className="border border-gray-300 px-2 py-1 min-w-[150px]">
                    Image
                  </th>
                  <th className="border border-gray-300 px-4 py-2 min-w-[150px]">
                    Products
                  </th>
                  <th className="border border-gray-300 px-4 py-2 min-w-[100px]">
                    Quantity
                  </th>
                  <th className="border border-gray-300 px-4 py-2 min-w-[100px]">
                    Unit Price
                  </th>
                  <th className="border border-gray-300 px-4 py-2 min-w-[100px]">
                    Tổng tiền
                  </th>
                </tr>
              </thead>
              <tbody className="items-center text-[12px]">
                {/* Hàng dữ liệu 1 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-2 break-words text-[12px]">
                    <Image
                      src={"/images/blog-1.jpg"}
                      alt="product"
                      width={50}
                      height={50}
                    ></Image>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 break-words text-red-600">
                    Emasa rumas gacem
                  </td>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">100.000đ</td>
                  <td className="border border-gray-300 px-4 py-2">200.000đ</td>
                </tr>
                {/* Hàng subtotal */}
                <tr className="border-t border-gray-400">
                  <td className="border border-gray-300 px-4 py-2" colSpan={4}>
                    Subtotal:
                  </td>
                  <td className="border border-gray-300 px-4 py-2">200.000đ</td>
                </tr>
                <tr className="border-t border-gray-400">
                  <td className="border border-gray-300 px-4 py-2" colSpan={4}>
                    Flat Shipping Rate:
                  </td>
                  <td className="border border-gray-300 px-4 py-2">20.000đ</td>
                </tr>
                {/* Hàng VAT */}
                <tr className="border-t border-gray-400">
                  <td className="border border-gray-300 px-4 py-2" colSpan={4}>
                    VAT (10%):
                  </td>
                  <td className="border border-gray-300 px-4 py-2">20.000đ</td>
                </tr>
                {/* Hàng tổng tiền */}
                <tr className="border-t border-gray-400">
                  <td className="border border-gray-300 px-4 py-2" colSpan={4}>
                    Total:
                  </td>
                  <td className="border border-gray-300 px-4 py-2">220.000đ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border bg-white">
            <div className="px-[15px] py-[10px] bg-[#5f6874] ">
              <h4 className="text-[16px] leading-4 text-white">
                Add Comments About Your Order
              </h4>
            </div>
            <div className=" px-[15px] mt-3">
              <Textarea className="border rounded-none" />
            </div>

            <div className="px-[15px] mt-3">
              <Checkbox
                checked={selected === "agreement"}
                onCheckedChange={() => handleChange("agreement")}
              />
              <label className="ml-2 text-[12px]">
                I have read and agree to the Terms & Conditions
              </label>
            </div>
            <div className="items-end p-[15px]">
              <Button className="bg-bg-main rounded-none text-[14px] font-thin ">
                Comfirm Orders
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
