import React from 'react';
import Link from "next/link";
import {FaAngleRight} from "react-icons/fa6";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {FaEye} from "react-icons/fa";
import Breadcrumb from "@/components/layouts/Breadcrumb";

function Page() {
    const links = [
        {
            href: '/',
            label: 'Login',
        },
        {
            href: '/',
            label: 'Register',
        },
        {
            href: '/',
            label: 'Forgotten Password',
        },
        {
            href: '/',
            label: 'My Account',
        },
        {
            href: '/',
            label: 'Address Books',
        },
        {
            href: '/',
            label: 'Wish List',
        },
        {
            href: '/',
            label: 'Order History',
        },
        {
            href: '/',
            label: 'Downloads',
        },
        {
            href: '/',
            label: 'Reward Points',
        },
        {
            href: '/',
            label: 'Returns',
        },
        {
            href: '/',
            label: 'Transactions',
        },
        {
            href: '/',
            label: 'Newsletter',
        },
        {
            href: '/',
            label: 'Recurring payments',
        }
    ]
    const orders = [
        {
            id: '214521',
            ProductName: 'Aspire Ultrabook Laptop',
            quantity: 1,
            status: 'Shipped',
            date: '20/06/2016',
            total: 228,
            image: '/images/product-1.jpg',
        },
        {
            id: '214521',
            ProductName: 'Aspire Ultrabook Laptop',
            quantity: 1,
            status: 'Shipped',
            date: '20/06/2016',
            total: 228,
            image: '/images/product-1.jpg',
        }
    ]

    return (
        <section className={'mb-[20px]'}>
            <Breadcrumb breadcrumbItems={[
                {
                    label: "Order History",
                    link: "/orders/history"
                }
            ]}/>
            <div className="w-full flex">
                <div className="w-full xl:w-[75%]">
                    <h1 className="text-[30px] text-[#222222] font-light mt-[20px] mb-[10px]">Order History</h1>
                    <div className="overflow-x-auto w-full">
                        <table
                            className={'w-full min-w-[600px] xl:mb-[20px] text-[12px] table-auto text-left border-collapse border border-solid border-[#ddd]'}>
                            <thead className={'bg-[rgba(51,51,51,0.1)] border-b-[2px] border-solid border-[#ddd]'}>
                            <tr>
                                <th className={'p-2 text-[#555555] text-center border border-solid border-[#ddd] w-[121px]'}>Image</th>
                                <th className={'p-2 text-[#555555] text-left border border-solid border-[#ddd] w-[260px]'}>Product
                                    Name
                                </th>
                                <th className={'p-2 text-[#555555] text-center border border-solid border-[#ddd] w-[90px]'}>Order
                                    ID
                                </th>
                                <th className={'p-2 text-[#555555] text-center border border-solid border-[#ddd] w-[46px]'}>Qty</th>
                                <th className={'p-2 text-[#555555] text-center border border-solid border-[#ddd] w-[79px]'}>Status</th>
                                <th className={'p-2 text-[#555555] text-center border border-solid border-[#ddd] w-[106px]'}>Date
                                    Added
                                </th>
                                <th className={'p-2 text-[#555555] text-right border border-solid border-[#ddd] w-[75px]'}>Total</th>
                                <th className={'p-2 text-[#555555] text-center border border-solid border-[#ddd] w-[68px]'}></th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map((item, index) => (
                                <tr key={index} className={'align-top hover:bg-[#f5f5f5]'}>
                                    <td className={'p-2 border border-solid border-[#ddd]'}>
                                        <Link href={'/products'}
                                              className="block p-1 w-max mx-auto border border-solid border-[#ddd] rounded">
                                            <div className="relative w-[79px] h-[79px] mx-auto">
                                                <Image alt={item.ProductName} className={'object-cover'} fill
                                                       src={item.image}/>
                                            </div>
                                        </Link>
                                    </td>
                                    <td className={'p-2 border border-solid border-[#ddd]'}>
                                        <Link href={`/products`}
                                              className={'hover:text-[#0083c1] text-[red] text-right'}>
                                            {item.ProductName}
                                        </Link>
                                    </td>
                                    <td className={'p-2 border border-solid border-[#ddd] text-center'}>{item.id}</td>
                                    <td className={'p-2 border border-solid border-[#ddd] text-center'}>{item.quantity}</td>
                                    <td className={'p-2 border border-solid border-[#ddd] text-center'}>{item.status}</td>
                                    <td className={'p-2 border border-solid border-[#ddd] text-center'}>{item.date}</td>
                                    <td className={'p-2 border border-solid border-[#ddd] text-right'}>${item.total.toFixed(2)}</td>
                                    <td className="p-2 flex justify-center">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Link href={'#'}
                                                          className={`flex justify-center py-[6px] px-[12px] items-center bg-[#5bc0de] w-[40px] h-[34px] select-none border 
                                                              border-solid border-[#46b8da] hover:bg-[#31b0d5] hover:border-[#269abc]`}>
                                                        <FaEye className={'text-white text-[14px]'}/>
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>View</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-[25%] hidden ml-[15px] lg:block">
                    <div className="text-[20px] font-normal mt-[20px] pb-[10px]">Account</div>
                    <ul className="">
                        {links.map((link, index) => (
                            <li key={index} className={'text-[#444] text-[12px] flex gap-[10px] items-center mb-[3px]'}>
                                <FaAngleRight className={'text-[12px] font-extralight'}/>
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Page;