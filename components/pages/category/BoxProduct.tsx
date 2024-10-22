import React from "react";
import {FaHeart} from "react-icons/fa";
import {FaExchangeAlt} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {IoIosStar} from "react-icons/io";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BoxProduct({id, name, image, price, oldPrice, rating, sale, isNew = false}: {
    id: string,
    name: string,
    image: string,
    price: number,
    oldPrice: number,
    rating: number,
    sale: number,
    isNew: boolean
}) {
    return (
        <div className="h-max w-full group">
            <div
                className="border border-[#e5e5e5] rounded-[5px] w-full h-max p-[5px] group-hover:bg-[#e5e5e5] group-hover:rounded-none transition-all ease-in-out duration-700">
                <div className="relative aspect-square">
                    <Link href={`/${id}`} className={'block relative w-full h-[133%] xl:min-h-[334px]'}>
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </Link>
                    {isNew && (
                        <div
                            className="absolute uppercase left-[6px] top-[6px] w-[45px] h-[45px] rounded-full bg-bg-main text-white-1 text-info flex items-center justify-center">
                            New
                        </div>
                    )}
                    {sale !== 0 && (
                        <div
                            className="absolute uppercase right-[6px] top-[6px] w-[45px] h-[45px] rounded-full bg-[#ff5555] text-white-1 text-info flex items-center justify-center">
                            {`-${sale}%`}
                        </div>
                    )}
                    <div
                        className="absolute bottom-0 right-[5px] opacity-0 transition-all ease-in-out duration-1000 group-hover:opacity-100">
                        <ul className="mb-[10px] w-[50px] h-[130px] flex flex-col">
                            <li className="h-10 w-10 m-[5px] rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white">
                                <Link href="">
                                    <FaHeart className="w-[18px] h-[18px]"/>
                                </Link>
                            </li>
                            <li className="h-10 w-10 m-[5px] rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white">
                                <Link href="">
                                    <FaExchangeAlt className="w-[18px] h-[18px]"/>
                                </Link>
                            </li>
                            <li className="h-10 w-10 m-[5px] rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white">
                                <Link href="">
                                    <FaSearch className="w-[18px] h-[18px]"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-[5px]">
                <div>
                    <h4 className="my-[10px] text-center text-black-1 text-sub-heading font-medium group-hover:text-bg-main transition-all ease-in-out duration-700">
                        <Link href={`/${id}`}>{name}</Link>
                    </h4>
                    <div className="h-[30px] flex flex-row items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                            <IoIosStar
                                key={i}
                                className={
                                    rating > i
                                        ? "text-black"
                                        : "text-footer-info"
                                }
                            />
                        ))}
                    </div>
                    <div className="mt-[10px] mb-[15px] text-center">
                        <span className="text-[#ff5555] text-heading3-bold">
                            ${price.toFixed(2)}
                        </span>
                        {oldPrice !== 0 && (
                            <span className="text-black-3 text-sub-heading font-medium line-through ml-1">
                                ${oldPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>

                <div className="text-center">
                    <Button
                        variant="outline"
                        className="uppercase w-[120px] h-[40px] text-info group-hover:bg-bg-main transition-all ease-in-out duration-300"
                    >
                        <span className="text-black-3 group-hover:text-white">
                            Add to Cart
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
