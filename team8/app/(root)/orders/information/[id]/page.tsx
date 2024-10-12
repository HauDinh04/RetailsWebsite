import React from 'react';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";

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
    }
]

function Page() {
    return (
        <section className={'container'}>
            <div className="flex items-center my-[20px] gap-[10px]">
                <Link href={'/team8/public'}>Home</Link>
                <FaAngleRight className={'block'}/>
                <div className="">Order Information</div>
            </div>
            <div className="w-full flex">
                <div className="w-[75%]">
                    <h1 className="text-[30px] text-[#222222] font-light">Order Information</h1>
                    <table className="w-full table-auto text-left border-collapse border border-solid border-[#ddd]">
                        <thead className={'bg-[rgba(51,51,51,0.1)]'}>
                        <tr>
                            <th className={'p-2 '} colSpan={2}>Order Details</th>
                        </tr>
                        </thead>
                        <tbody className={''}>
                        <tr className={''}>
                            <td className={'p-2 border-r border-solid border-[#ddd] w-[50%] text-[12px]'}>
                                Order ID: <span>#214521</span>
                            </td>
                            <td className={'p-2'}>
                                Payment Method: <span>Cash On Delivery</span>
                            </td>
                        </tr>
                        <tr>
                            <td className={'p-2 border-r border-solid border-[#ddd] w-[50%] text-[12px]'}>
                                Date Added: <span>20/06/2016</span>
                            </td>
                            <td className={'p-2'}>
                                Shipping Method: <span>Flat Shipping Rate</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                    <div className="">
                        <div className="">Order History</div>
                    </div>
                    <div className="">Continue</div>
                </div>
                <div className="w-[25%] ml-[15px]">
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