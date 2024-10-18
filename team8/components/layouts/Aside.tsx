import React from "react";
import { MdNavigateNext } from "react-icons/md";
const menuItems = [
    {
        title: "Login",
        href: "/login",
    },
    {
        title: "Register",
        href: "/register",
    },
    {
        title: "Forgotten Password",
        href: "/forgotten-password",
    },
    {
        title: "Address Books",
        href: "/",
    },
    {
        title: "Wish List",
        href: "/",
    },
    {
        title: "Order History",
        href: "/",
    },
    {
        title: "Downloads",
        href: "/",
    },
    {
        title: "Reward Points",
        href: "/",
    },
    {
        title: "Returns",
        href: "/",
    },
    {
        title: "Transactions",
        href: "/",
    },
    {
        title: "Newsletter",
        href: "/",
    },
    {
        title: "Recurring payments",
        href: "/",
    },
];
export default function Aside() {
    return (
        <aside className="basis-3/12 pl-[15px] hidden md:block">
            <h2 className="mt-[20px] mb-[10px] text-heading2-bold font-medium text-black-2">
                Account
            </h2>
            <div className="mb-[20px]">
                <ul>
                    {menuItems.map((item) => {
                        return (
                            <li
                                className="flex items-center text-[#444] text-sub-heading mb-[3px]"
                                key={item.href}
                            >
                                <MdNavigateNext className="mr-[10px]" />
                                <a
                                    href={item.href}
                                    className="hover:text-bg-main leading-5"
                                >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}
