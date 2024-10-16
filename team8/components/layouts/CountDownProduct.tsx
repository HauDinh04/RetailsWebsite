import {FaExchangeAlt, FaHeart, FaSearch, FaStar} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";
import Image from "next/image";
import React from "react";

const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
};

export function CountDownProduct({
                                     thumbnail_url,
                                     name,
                                     description,
                                     price,
                                     discount_price,
                                 }: {
    thumbnail_url: string;
    name: string;
    description: string;
    price: number;
    discount_price: number;
}) {
    const discountPercentage = Math.round(
        ((discount_price - price) / discount_price) * 100
    );

    return (
        <div className="flex w-[562.5px] h-[371px]">
            <div className="w-1/2 relative group">
                <div className="p-[5px] border border-solid rounded-sm hover:border-0">
                    <div className="relative w-[269px] h-[359px]">
                        <Image src={thumbnail_url} alt={name} fill/>
                    </div>
                </div>
                <div
                    className="h-[45px] w-[45px] bg-[#ff5555] absolute rounded-full top-3 right-3 flex justify-center items-center text-white text-[12px] z-10">
                    -{discountPercentage}%
                </div>
                <div
                    className="absolute z-[2] bottom-[10px] right-[10px] flex flex-col gap-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                        className="w-[40px] h-[40px] bg-[#fff] rounded-sm hover:bg-[#0083c1] flex items-center justify-center transition duration-300 group">
                        <FaHeart className="hover:text-white text-[#222222] transition duration-300"/>
                    </div>
                    <div
                        className="w-[40px] h-[40px] bg-white rounded-sm hover:bg-[#0083c1] flex items-center justify-center transition duration-300 group">
                        <FaExchangeAlt className="hover:text-white text-[#222222] transition duration-300"/>
                    </div>
                    <div
                        className="w-[40px] h-[40px] bg-white rounded-sm hover:bg-[#0083c1] flex items-center justify-center transition duration-300 group">
                        <FaSearch className="hover:text-white text-[#222222] transition duration-300"/>
                    </div>
                </div>
                <div
                    className="hover:bg-transparent/25 w-[281px] h-[371px] absolute top-0 left-0 transition duration-300 ease-in-out"></div>
            </div>
            <div className="w-1/2 pt-[5px] px-4">
                <div className="mt-[11px] mb-[5px] text-[12px] uppercase text-[#ff5555]">
                    Hurry Up! Offer ends in:
                </div>

                <div className="flex justify-center space-x-2 p-4">
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-gray-800">00</div>
                        <div className="text-sm text-gray-600">Days</div>
                    </div>
                    <div>:</div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-gray-800">00</div>
                        <div className="text-sm text-gray-600">Hours</div>
                    </div>
                    <div>:</div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-gray-800">00</div>
                        <div className="text-sm text-gray-600">Mins</div>
                    </div>
                    <div>:</div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-gray-800">00</div>
                        <div className="text-sm text-gray-600">Secs</div>
                    </div>
                </div>

                <hr/>

                <div
                    className="text-[18px] mt-7 hover:text-[#0083c1] transition duration-300 ease-in-out cursor-pointer">
                    {name}
                </div>

                <div className="text-gray-700 text-[12px] mt-2">{description}</div>

                <div className="flex justify-between mt-5 items-center">
                    <div className="flex gap-2 items-center">
                        <div className="text-red-500 font-medium text-[18px]">
                            {formatCurrency(price)}
                        </div>
                        <div className="line-through text-[14px] text-gray-500">
                            {formatCurrency(discount_price)}
                        </div>
                    </div>
                    <div className="flex gap-1 text-[12px]">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar/>
                    </div>
                </div>

                <div
                    className="text-[12px] border p-3 px-5 w-fit rounded-md mt-5 text-gray-500 cursor-pointer hover:bg-[#0083c1] hover:text-white">
                    ADD TO CART
                </div>
            </div>
        </div>
    );
}
