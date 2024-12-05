import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCart } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import Aside from "@/components/layouts/Aside";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Breadcrumb from "@/components/layouts/Breadcrumb";

const products = [
    {
        id: 1,
        name: "iPad",
        model: "Pt 001",
        stock: "In Stock",
        unitPrice: 45,
        originalPrice: 80,
        image: "/images/18.jpg",
    },
    {
        id: 2,
        name: "iPad",
        model: "Pt 002",
        stock: "In Stock",
        unitPrice: 45,
        originalPrice: 90,
        image: "/images/18.jpg",
    },
];

export default function page() {
    return (
        <>
            <Breadcrumb
                breadcrumbItems={[
                    {
                        label: "Account",
                        link: "#",
                    },
                    {
                        label: " My Wish List",
                        link: "#",
                    },
                ]}
            />
            <div className="mx-[-15px]">
                <div className="w-full flex flex-col md:flex-row justify-between">
                    <div className="md:basis-9/12 mb-[23px] px-[15px] basis-full">
                        <h2 className="text-[30px] mt-[20px] mb-[10px] text-[#222222] font-light">
                            My Wish List
                        </h2>
                        <div className={"w-full overflow-x-auto"}>
                            <table className="w-full min-w-[600px] table-auto border-collapse border border-solid border-[#ddd]">
                                <thead
                                    className={
                                        "bg-[rgba(51,51,51,0.1)] border-b-[2px] border-solid border-[#ddd]"
                                    }
                                >
                                    <tr className="text-info text-black-2">
                                        <th className="border border-solid border-[#ddd] p-2 w-[17%]">
                                            Image
                                        </th>
                                        <th className="border border-solid border-[#ddd] p-2 w-[28%] text-left">
                                            Product Name
                                        </th>
                                        <th className="border border-solid border-[#ddd] p-2 w-[10%] text-left ">
                                            Model
                                        </th>
                                        <th className="border border-solid border-[#ddd] p-2 w-[15%] text-right">
                                            Stock
                                        </th>
                                        <th className="border border-solid border-[#ddd] p-2 w-[15%] text-right">
                                            Unit Price
                                        </th>
                                        <th className="border border-solid border-[#ddd] p-2 w-[15%] text-right">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="border border-[#ddd] p-[3px] sm:p-2">
                                                <div className="relative aspect-square w-[50px] sm:max-w-[70px] max-h-[70px] mx-auto">
                                                    <Link
                                                        href={""}
                                                        className="text-center"
                                                    >
                                                        <Image
                                                            src={product.image}
                                                            alt={product.name}
                                                            title={product.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </Link>
                                                </div>
                                            </td>
                                            <td className="border border-[#ddd] p-[3px] sm:p-2 text-left text-[#ff0000] align-top text-info">
                                                <Link
                                                    href={""}
                                                    className="hover:text-bg-main"
                                                >
                                                    {product.name}
                                                </Link>
                                            </td>
                                            <td className="border border-[#ddd] p-[3px] sm:p-2 text-left align-top text-info text-black-2">
                                                {product.model}
                                            </td>
                                            <td className="border border-[#ddd] p-[3px] sm:p-2 text-right align-top text-info text-black-2">
                                                {product.stock}
                                            </td>
                                            <td className="border border-[#ddd] p-[3px] sm:p-2 text-right align-top text-info text-black-2">
                                                <span>
                                                    ${product.unitPrice}
                                                </span>
                                                &nbsp;
                                                <span>
                                                    ${product.originalPrice}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap border border-[#ddd] p-[3px] sm:p-2 text-right align-top">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <button className="py-[9px] px-[11px] rounded-none bg-bg-main hover:bg-[#286090]">
                                                                <IoCart className="text-white" />
                                                            </button>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-black text-info py-[4px]">
                                                            <p className="text-white">
                                                                Add to Cart
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <button className="py-[9px] px-[11px] rounded-none ml-2 bg-[#d9534f] hover:bg-[#c9302c]">
                                                                <FaTimes className="text-white" />
                                                            </button>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-black text-info py-[4px]">
                                                            <p className="text-white">
                                                                Remove
                                                            </p>
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
                    <Aside />
                </div>
            </div>
        </>
    );
}
