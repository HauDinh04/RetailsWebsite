'use client'
import {Checkbox} from "@/components/customui/checkboxs";
import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/customui/textarea";
import Image from "next/image";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {FiRefreshCcw} from "react-icons/fi";
import {FaTimesCircle} from "react-icons/fa";

const CheckoutPage = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const handleChange = (value: string) => {
        setSelected((prev) => (prev === value ? null : value));
    };
    return (
        <div className="container">
            <Breadcrumb breadcrumbItems={[
                {
                    label: "Checkout",
                    link: "/checkout",
                },
            ]}/>
            <h2 className="text-[30px] font-light leading-[33px] mt-5 mb-[10px] text-customGray">
                Checkout{" "}
            </h2>
            <div className="flex flex-col sm:flex-row bg-[#f5f5f5] py-5 px-5 ">
                <div className="grid grid-cols-1 w-full sm:w-1/4 gap-5">
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
                <div className="flex flex-col mt-[20px] w-full sm:mt-0 sm:w-3/4 gap-5 sm:ml-5">
                    <div className="border w-full flex flex-col gap-[20px] sm:gap-0 sm:flex-row justify-between">
                        <div className="w-full sm:w-1/2">
                            <div className="grid grid-cols-1 p-[10px] bg-white">
                                <div className=" bg-[#5f6874] px-[10px] py-[15px] ">
                                    <h4 className="text-white text-[16px] font-semibold">
                                        Delivery Method
                                    </h4>
                                </div>
                                <p className="text-[12px] p-[3px] pt-[15px] sm:pt-0">
                                    Please select the preferred shipping method to use on this
                                    order.
                                </p>
                                <div className="flex flex-col gap-1 p-[10px] sm:p-[15px]">
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
                        <div className="w-full sm:w-1/2">
                            {" "}
                            <div className="grid grid-cols-1  p-[10px] bg-white ">
                                <div className=" bg-[#5f6874] px-[10px] py-[15px] ">
                                    <h4 className="text-white  text-[16px] font-semibold">
                                        Payment Method
                                    </h4>
                                </div>
                                <p className="text-[12px] pt-[15px] sm:pt-0 p-[3px]">
                                    Please select the preferred payment method to use on this
                                    order.
                                </p>
                                <div className="flex flex-col gap-1 p-[10px] sm:p-[15px]">
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
                                <th className="border border-gray-300 px-2 py-1 w-[112px]">
                                    Image
                                </th>
                                <th className="border border-gray-300 px-4 py-2 w-[213px]">
                                    Products
                                </th>
                                <th className="border border-gray-300 px-4 py-2 w-[224px]">
                                    Quantity
                                </th>
                                <th className="border border-gray-300 px-4 py-2 w-[109px]">
                                    Unit Price
                                </th>
                                <th className="border border-gray-300 px-4 py-2 w-[97px]">
                                    Total
                                </th>
                            </tr>
                            </thead>
                            <tbody className="items-center text-[12px]">
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 break-words text-[12px]">
                                    <Link href={'/'} className="block border mx-auto w-max p-[5px] solid border-[#ddd]">
                                        <div className="relative w-[50px] h-[50px]">
                                            <Image
                                                src={"/images/blog-1.jpg"}
                                                alt="product" fill
                                            />
                                        </div>
                                    </Link>
                                </td>
                                <td className="border border-gray-300 px-4 py-2 break-words text-red-600">
                                    Emasa rumas gacem
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <div className="border relative h-[36px]  border-solid border-[#ddd]">
                                        <input defaultValue={1} className={'px-4 py-2 outline-0'} type="text"/>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <div className="absolute border border-solid border-[#2e6da4]
                                                     h-[36px] bg-[#337ab7] hover:bg-[#286090] hover:border-[#204d74] px-4 py-2 right-[48.5px] top-0">
                                                        <FiRefreshCcw className={'text-white text-[14px] font-black'}/>
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Update</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <div className="absolute border border-solid border-[#d43f3a]
                                                     h-[36px] bg-[#d9534f] hover:bg-[#c9302c] hover:border-[#ac2925] px-4 py-2 right-0 top-0">
                                                        <FaTimesCircle className={'text-white text-[14px] font-black'}/>
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Remove</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">$100.000</td>
                                <td className="border border-gray-300 px-4 py-2">$200.000</td>
                            </tr>
                            {/* Hàng subtotal */}
                            <tr className="border-t border-gray-400">
                                <td className="border border-gray-300 text-right text-[#555555] font-bold px-4 py-2"
                                    colSpan={4}>
                                    Subtotal:
                                </td>
                                <td className="border border-gray-300 text-right px-4 py-2">$200.000</td>
                            </tr>
                            <tr className="border-t border-gray-400">
                                <td className="border border-gray-300 text-right text-[#555555] font-bold px-4 py-2"
                                    colSpan={4}>
                                    Flat Shipping Rate:
                                </td>
                                <td className="border border-gray-300 text-right px-4 py-2">$20.000</td>
                            </tr>
                            {/* Hàng VAT */}
                            <tr className="border-t border-gray-400">
                                <td className="border border-gray-300 text-right text-[#555555] font-bold px-4 py-2"
                                    colSpan={4}>
                                    VAT (10%):
                                </td>
                                <td className="border border-gray-300 text-right px-4 py-2">$20.000</td>
                            </tr>
                            {/* Hàng tổng tiền */}
                            <tr className="border-t border-gray-400">
                                <td className="border border-gray-300 px-4 text-right text-[#555555] font-bold py-2"
                                    colSpan={4}>
                                    Total:
                                </td>
                                <td className="border border-gray-300 text-right px-4 py-2">$220.000</td>
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
                            <Textarea rows={4}
                                      className="border focus:shadow-[0_0_3px_1px_#66afe9] focus:border-[#66afe9] rounded-none"/>
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
