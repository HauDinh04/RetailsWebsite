import React from 'react';
import Link from 'next/link';
import {FaAngleRight} from "react-icons/fa6";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {FaReply, FaShoppingCart} from "react-icons/fa";
import Breadcrumb from "@/components/layouts/Breadcrumb";

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

function Page() {
    const order = {
        id: 214521,
        date: '20/06/2016',
        PaymentMethod: 'Cash on delivery',
        ShippingMethod: 'Flat Shipping Rete',
        name: 'Jhone Cary',
        address: 'Central Square, 22 Hoi Wing Road, New Delhi, India',
        details: [
            {
                name: 'Iphone5',
                model: 'product 11',
                quantity: 1,
                price: 123.20
            }
        ],
        history: [
            {
                date: '20/06/2016',
                status: 'Processing'
            },
            {
                date: '21/06/2016',
                status: 'Shipped'
            },
            {
                date: '24/06/2016',
                status: 'Completed'
            },
        ]
    }

    return (
        <section className={'mb-[20px]'}>
            <Breadcrumb breadcrumbItems={[
                {
                    label: "Order Information",
                    link: "/orders/information/1"
                }
            ]}/>
            <div className="w-full flex">
                <div className="w-full xl:w-[75%]">
                    <h1 className="text-[30px] mt-[20px] mb-[10px] text-[#222222] font-light">Order Information</h1>
                    <table
                        className="w-full mb-[20px] table-auto text-left border-collapse border border-solid border-[#ddd]">
                        <thead className={'bg-[rgba(51,51,51,0.1)] border-b-[2px] border-solid border-[#ddd]'}>
                        <tr>
                            <th className={'p-2 text-[#555555] text-[12px] font-bold'} colSpan={2}>Order Details</th>
                        </tr>
                        </thead>
                        <tbody className={'text-[12px] group '}>
                        <tr className={'group-hover:bg-[#f5f5f5]'}>
                            <td className={'p-2 border-r border-solid text-[#555555] font-bold border-[#ddd] w-[50%]'}>
                                Order ID: <span className={'font-light'}>#{order.id}</span>
                            </td>
                            <td className={'p-2 text-[#555555] font-bold'}>
                                Payment Method: <span className={'font-light'}>{order.PaymentMethod}</span>
                            </td>
                        </tr>
                        <tr className={'group-hover:bg-[#f5f5f5]'}>
                            <td className={'p-2 border-r border-solid border-[#ddd] w-[50%] text-[#555555] font-bold'}>
                                Date Added: <span className={'font-light'}>{order.date}</span>
                            </td>
                            <td className={'p-2 text-[#555555] font-bold'}>
                                Shipping Method: <span className={'font-light'}>{order.ShippingMethod}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table
                        className="w-full mb-[20px] table-auto text-left border-collapse border border-solid border-[#ddd]">
                        <thead className={'bg-[rgba(51,51,51,0.1)] border-b-[2px] border-solid border-[#ddd]'}>
                        <tr>
                            <th className={'p-2 text-[#555555] text-[12px] font-bold border-r border-solid border-[#ddd] w-[50%]'}>Payment
                                Address
                            </th>
                            <th className={'p-2 text-[#555555] text-[12px] font-bold w-[50%]'}>Payment Address</th>
                        </tr>
                        </thead>
                        <tbody className={'text-[12px] group text-[#555555]'}>
                        <tr className={'group-hover:bg-[#f5f5f5]'}>
                            <td className={'p-2 border-r border-solid border-[#ddd]'}>
                                {order.name} <br/>
                                {order.address.split(', ').map((item, index) => (
                                    <span key={index}>{item} <br/></span>
                                ))}
                            </td>
                            <td className={'p-2'}>
                                {order.name} <br/>
                                {order.address.split(', ').map((item, index) => (
                                    <span key={index}>{item} <br/></span>
                                ))}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="overflow-x-auto w-full">
                        <table
                            className="w-full mb-[20px] table-auto text-left border-collapse border border-solid border-[#ddd]">
                            <thead className={'bg-[rgba(51,51,51,0.1)] border-b-[2px] border-solid border-[#ddd]'}>
                            <tr>
                                <th className={'p-2 text-[#555555] text-[12px] font-bold border-r border-solid border-[#ddd] w-[179px]'}>
                                    Product Name
                                </th>
                                <th className={'p-2 text-[#555555] text-[12px] font-bold border-r border-solid border-[#ddd] w-[128px]'}>
                                    Model
                                </th>
                                <th className={'p-2 text-[#555555] text-right text-[12px] font-bold border-r border-solid border-[#ddd] w-[121px]'}>
                                    Quantity
                                </th>
                                <th className={'p-2 text-[#555555] text-right text-[12px] font-bold border-r border-solid border-[#ddd] w-[218px]'}>
                                    Price
                                </th>
                                <th className={'p-2 text-[#555555] text-right text-[12px] font-bold border-r border-solid border-[#ddd] w-[100px]'}>
                                    Total
                                </th>
                                <th className={'p-2 w-[99px]'}></th>
                            </tr>
                            </thead>
                            <tbody className={'text-[12px] text-[#555555]'}>
                            {order.details.map((item, index) => (
                                <tr key={index} className={'hover:bg-[#f5f5f5] border-b border-solid border-[#ddd]'}>
                                    <td className={'p-2 border-r border-solid border-[#ddd]'}>
                                        {item.name}
                                    </td>
                                    <td className={'p-2 border-r border-solid border-[#ddd]'}>
                                        {item.model}
                                    </td>
                                    <td className={'p-2 text-right border-r border-solid border-[#ddd]'}>
                                        {item.quantity}
                                    </td>
                                    <td className={'p-2 text-right border-r border-solid border-[#ddd]'}>
                                        ${item.price.toFixed(2)}
                                    </td>
                                    <td className={'p-2 text-right border-r border-solid border-[#ddd]'}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </td>
                                    <td className={'p-2 border-r border-solid border-[#ddd] flex justify-between'}>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Link href={'#'}
                                                          className={`flex justify-center py-[6px] px-[12px] items-center bg-[#337ab7] w-[39px] h-[34px] select-none border 
                                                          border-solid border-[#2e6da4] hover:bg-[#286090] hover:border-[#204d74]`}>
                                                        <FaShoppingCart className={'text-white text-[14px]'}/>
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Reorder</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Link href={'/return'}
                                                          className={`flex justify-center items-center bg-[#d9534f] w-[39px] h-[34px] py-[6px] px-[12px]
                                                             border border-solid border-[#d43f3a] hover:bg-[#c9302c] hover:border-[#ac2925]`}>
                                                        <FaReply className={'text-white text-[14px]'}/>
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Return</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </td>
                                </tr>
                            ))}
                            <tr className={'border-b border-solid border-[#ddd]'}>
                                <td colSpan={3} className={'border-r border-solid border-[#ddd]'}></td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd] font-bold'}>Sub-total</td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd]'}>$101.00</td>
                            </tr>
                            <tr className={'border-b border-solid border-[#ddd]'}>
                                <td colSpan={3} className={'border-r border-solid border-[#ddd]'}></td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd] font-bold'}>Flat
                                    Shipping
                                    Rate
                                </td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd]'}>$5.00</td>
                            </tr>
                            <tr className={'border-b border-solid border-[#ddd]'}>
                                <td colSpan={3} className={'border-r border-solid border-[#ddd]'}></td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd] font-bold'}>Eco-Tax
                                    (-2.00)
                                </td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd]'}>$6.00</td>
                            </tr>
                            <tr className={'border-b border-solid border-[#ddd]'}>
                                <td colSpan={3} className={'border-r border-solid border-[#ddd]'}></td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd] font-bold'}>VAT (20%)
                                </td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd]'}>$21.20</td>
                            </tr>
                            <tr className={'border-b border-solid border-[#ddd]'}>
                                <td colSpan={3} className={'border-r border-solid border-[#ddd]'}></td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd] font-bold'}>Total</td>
                                <td className={'p-2 text-right border-r border-solid border-[#ddd]'}>$133.20</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 className="mt-[20px] mb-[10px] text-[18px] font-normal">Order History</h3>
                    <table
                        className="w-full mb-[20px] table-auto text-left border-collapse border border-solid border-[#ddd]">
                        <thead className={'bg-[rgba(51,51,51,0.1)] border-b-[2px] border-solid border-[#ddd]'}>
                        <tr>
                            <th className={'p-2 text-[#555555] text-[12px] font-bold border border-r border-[#ddd]'}>
                                Date Added
                            </th>
                            <th className={'p-2 text-[#555555] text-[12px] font-bold'}>
                                Status
                            </th>
                        </tr>
                        </thead>
                        <tbody className={'text-[12px] '}>
                        {order.history.map((item, index) => (
                            <tr key={index} className={'hover:bg-[#f5f5f5]'}>
                                <td className={'p-2 border border-solid text-[#555555] border-[#ddd] w-[50%]'}>
                                    {item.date}
                                </td>
                                <td className={'p-2 border border-solid border-[#ddd text-[#555555]'}>
                                    {item.status}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Link href={'/'} className="block w-max ml-auto mr-0 px-[12px] py-[6px] text-white bg-[#337ab7]
                     border border-solid border-[#2e6da4] hover:bg-[#286090] hover:border-[#204d74]">Continue</Link>
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