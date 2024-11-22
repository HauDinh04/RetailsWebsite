'use client'
import {Checkbox} from "@/components/customui/checkboxs";
import React from "react";
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
import {useForm} from 'react-hook-form';

// import {CreateOrder} from "@/lib/Checkout.action";

interface CheckoutInput {
    account: string;
    shipping_costs: number;
    payment_method: string;
    full_name: string;
    email: string;
    phone: string;
    company: string;
    address1: string;
    address2: string;
    city: string;
    postCode: string;
    country: string;
    region: string;
}

const CheckoutPage = () => {
    const inputStyle = `h-[34px] text-[12px] text-[#555] border border-solid border-[#ccc] shadow-sm px-[12px] py-[6px] 
    outline-0 focus:shadow-[0_0_3px_1px_#66afe9] focus:border-[#66afe9]`;
    const {register, handleSubmit} = useForm<CheckoutInput>({
        defaultValues: {
            account: "guest",
            shipping_costs: 0,
            payment_method: "Cash On Delivery"
        }
    });

    const onSubmit = (data: CheckoutInput) => {
        console.log(data);
        const order_code = `#order${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}`;
        const order = {
            name: data.full_name,
            order_code: order_code,

        }

        console.log(order);

        // CreateOrder(order)
        //     .then(data => {
        //         console.log(data)
        //     })
    }

    return (
        <div className={'mb-[20px]'}>
            <Breadcrumb breadcrumbItems={[
                {
                    label: "Checkout",
                    link: "/checkout",
                },
            ]}/>
            <h2 className="text-[30px] font-light leading-[33px] mt-5 mb-[10px] text-customGray">
                Checkout{" "}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row bg-[#f5f5f5] py-5 px-5 ">
                <div className="grid grid-cols-1 w-full sm:w-1/4 gap-5">
                    <div className="grid grid-cols-1 border p-[10px] bg-white ">
                        <div className=" bg-[#5f6874] px-[10px] py-[15px] ">
                            <h4 className="text-white text-[16px] font-semibold">
                                Create an Account or Login
                            </h4>
                        </div>
                        <div className="flex flex-col gap-1 p-[15px]">
                            <div className="flex items-center">
                                <input value={'register'} id={'account1'}
                                       type="radio" {...register("account", {required: true})}/>
                                <label className="ml-2 text-[12px]" htmlFor="account1">Register Account</label>
                            </div>
                            <div className="flex items-center">
                                <input value={'guest'} id={'account2'}
                                       type="radio" {...register("account", {required: true})}/>
                                <label className="ml-2 text-[12px]" htmlFor="account2">Guest Checkout</label>
                            </div>
                            <div className="flex items-center">
                                <input value={'returning'} id={'account3'}
                                       type="radio" {...register("account", {required: true})}/>
                                <label className="ml-2 text-[12px]" htmlFor={'account3'}>Returning Customer</label>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 border p-[10px] bg-white">
                        <div className=" bg-[#5f6874] px-[10px] py-[15px] ">
                            <h4 className="text-white text-[16px] font-semibold">
                                Your Personal Details
                            </h4>
                        </div>
                        <div className="flex flex-col gap-[15px] p-[15px]">
                            <div className="flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    <span className={'text-[#F00]'}>*</span> Full Name
                                </label>
                                <input
                                    placeholder="Last Name"
                                    className={inputStyle}
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    <span className={'text-[#F00]'}>*</span> Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="First Name"
                                    className={inputStyle}
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    <span className={'text-[#F00]'}>*</span> Telephone
                                </label>
                                <input
                                    placeholder="Telephone"
                                    className={inputStyle}
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    Fax
                                </label>
                                <input
                                    placeholder="Fax"
                                    className={inputStyle}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 border p-[10px] bg-white">
                        <div className="bg-[#5f6874] px-[10px] py-[15px] ">
                            <h4 className="text-white text-[16px] font-semibold">
                                Your Address
                            </h4>
                        </div>
                        <div className="flex flex-col gap-[15px] p-[15px]">
                            <div className="w-full flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    Company
                                </label>
                                <input
                                    placeholder="Company"
                                    className={inputStyle}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    <span className={'text-[#F00]'}>*</span>Address 1
                                </label>
                                <input
                                    placeholder="Address 1"
                                    className={inputStyle}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    Address 2
                                </label>
                                <input
                                    type=""
                                    placeholder="Address 3"
                                    className={inputStyle}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    <span className={'text-[#F00]'}>*</span> City
                                </label>
                                <input
                                    required
                                    placeholder="City"
                                    className={inputStyle}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    <span className={'text-[#F00]'}>*</span> Post code
                                </label>
                                <input
                                    type="text"
                                    placeholder="Post code"
                                    className={inputStyle}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    <span className={'text-[#F00]'}>*</span> Country
                                </label>
                                <select className={inputStyle}>
                                    <option value=""> --- Please Select ---</option>
                                    <option value="244">Aaland Islands</option>
                                    <option value="1">Afghanistan</option>
                                    <option value="2">Albania</option>
                                    <option value="3">Algeria</option>
                                    <option value="4">American Samoa</option>
                                    <option value="5">Andorra</option>
                                    <option value="6">Angola</option>
                                    <option value="7">Anguilla</option>
                                    <option value="8">Antarctica</option>
                                    <option value="9">Antigua and Barbuda</option>
                                    <option value="10">Argentina</option>
                                    <option value="11">Armenia</option>
                                    <option value="12">Aruba</option>
                                    <option value="252">Ascension Island (British)</option>
                                    <option value="13">Australia</option>
                                    <option value="14">Austria</option>
                                    <option value="15">Azerbaijan</option>
                                    <option value="16">Bahamas</option>
                                    <option value="17">Bahrain</option>
                                </select>
                            </div>
                            <div className="w-full flex flex-col gap-[5px]">
                                <label htmlFor="" className="text-[12px]">
                                    <span className={'text-[#F00]'}>*</span> Region / State
                                </label>
                                <select className={inputStyle}>
                                    <option value=""> --- Please Select ---</option>
                                    <option value="3513">Aberdeen</option>
                                    <option value="3514">Aberdeenshire</option>
                                    <option value="3515">Anglesey</option>
                                    <option value="3516">Angus</option>
                                    <option value="3517">Argyll and Bute</option>
                                    <option value="3518">Bedfordshire</option>
                                    <option value="3519">Berkshire</option>
                                    <option value="3520">Blaenau Gwent</option>
                                    <option value="3521">Bridgend</option>
                                    <option value="3522">Bristol</option>
                                </select>
                            </div>
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
                                <p className="text-[12px] p-[3px] md:pt-[15px] pt-0">
                                    Please select the preferred shipping method to use on this
                                    order.
                                </p>
                                <div className="flex flex-col gap-1 p-[10px] sm:p-[15px]">
                                    <div className="flex items-center">
                                        <input value={0} id={'shipping1'} defaultChecked
                                               type="radio" {...register("shipping_costs", {required: true})}/>
                                        <label className="ml-2 text-[12px]" htmlFor={'shipping1'}>
                                            Free Shipping - $0.00
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input value={7.5} id={'shipping2'}
                                               type="radio" {...register("shipping_costs", {required: true})}/>
                                        <label className="ml-2 text-[12px]" htmlFor={'shipping2'}>
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
                                <p className="text-[12px] md:pt-[15px] pt-0 p-[3px]">
                                    Please select the preferred payment method to use on this
                                    order.
                                </p>
                                <div className="flex flex-col gap-1 p-[10px] sm:p-[15px]">
                                    <div className="flex items-center">
                                        <input value={'Cash On Delivery'} id={'payment_method1'}
                                               type="radio" {...register("payment_method", {required: true})}/>
                                        <label className="ml-2 text-[12px]" htmlFor={'payment_method1'}>Cash On
                                            Delivery</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input value={'Paypal'} id={'payment_method2'}
                                               type="radio" {...register("payment_method", {required: true})}/>
                                        <label className="ml-2 text-[12px]" htmlFor={'payment_method2'}>Paypal</label>
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
                        <div className="grid grid-cols-2">
                            <div className="-w-full flex p-[15px]">
                                <input
                                    type="text"
                                    placeholder="enter your coupon here"
                                    className={inputStyle + ' flex-1'}
                                />
                                <Button className="bg-bg-main h-[34px] rounded-none text-[14px] font-thin ">
                                    Apply Coupon
                                </Button>
                            </div>
                            <div className="flex p-[15px]">
                                <input
                                    type="text"
                                    placeholder="enter your coupon here"
                                    className={inputStyle + ' flex-1'}
                                />
                                <Button className="bg-bg-main h-[34px] rounded-none text-[14px] font-thin">
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

                        <div className="px-[15px] mt-3 flex items-center">
                            <Checkbox checked={true}/>
                            <label className="ml-2 text-[12px] text-[#555555">
                                I have read and agree to the <span className={'text-[#2222222] font-bold'}>Terms & Conditions</span>
                            </label>
                        </div>
                        <div className="flex items-center justify-end p-[15px]">
                            <Button className="bg-bg-main rounded-none px-[12px] py-[6px] text-[14px] font-thin ">
                                Confirm Orders
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
