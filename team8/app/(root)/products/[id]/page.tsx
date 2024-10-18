"use client";
import React, { useState } from "react";
import FeatureProduct from "@/components/layouts/FeatureProduct";
import SmallBoxProduct from "@/components/layouts/SmallBoxProduct";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaHeart, FaExchangeAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import TabsSlider from "./TabsSlider";

const products = [
    {
        id: "1",
        name: "Sunt Molup",
        rating: 5,
        price: 100,
        image: "/images/product-2.jpg",
        oldPrice: 0,
    },
    {
        id: "2",
        name: "Lorem Ipsum",
        rating: 4,
        price: 120,
        image: "/images/product-2.jpg",
        oldPrice: 0,
    },
    {
        id: "3",
        name: "Dolor Sit",
        rating: 3,
        price: 90,
        image: "/images/product-2.jpg",
        oldPrice: 0,
    },
    {
        id: "4",
        name: "Dolor Sit",
        rating: 4,
        price: 90,
        image: "/images/product-2.jpg",
        oldPrice: 0,
    },
];

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = +event.target.value;
        console.log(value);
        if (value > 0 && value !== quantity) setQuantity(value);
    };

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <div>
            <div className="flex flex-grow justify-between">
                <div className="basis-3/4">
                    <div className="flex flex-row justify-between">
                        <div className="basis-1/2 pr-[15px]">
                            <div className="relative aspect-square w-[405px] h-[540px] p-[1px] border border-[#e6e6e6]">
                                <Image
                                    src="/images/product-1.jpg"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="mt-[10px]">
                                <Carousel className="">
                                    <CarouselContent>
                                        {Array.from({ length: 6 }).map(
                                            (_, index) => (
                                                <CarouselItem
                                                    key={index}
                                                    className="basis-1/4"
                                                >
                                                    <Image
                                                        src="/images/product-2.jpg"
                                                        alt=""
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
                                                        }}
                                                        className="w-full aspect-[3/4] object-contain p-1 border"
                                                    />
                                                </CarouselItem>
                                            )
                                        )}
                                    </CarouselContent>
                                    <CarouselPrevious className="text-black-1 border-none bg-none hover:bg-none" />
                                    <CarouselNext className="text-black-1 border-none bg-none hover:bg-none" />
                                </Carousel>
                            </div>
                        </div>
                        <div className="basis-1/2 text-left px-[15px]">
                            <h3 className="text-[24px] font-light">
                                Bint Beef
                            </h3>
                            <div className="my-[30px]">
                                <div className="flex">
                                    <IoIosStar className="text-[12px]" />
                                    <IoIosStar className="text-[12px]" />
                                    <IoIosStar className="text-[12px]" />
                                    <IoIosStar className="text-[12px]" />
                                    <IoIosStar className="text-[12px]" />
                                </div>
                            </div>
                            <div className="mb-[30px] pl-[15px]">
                                <ul className="mb-[10px] text-info text-black-2 list-disc">
                                    <li>
                                        45 inch HD Touch Screen (1280 x 720)
                                    </li>
                                    <li>Android 4.4 KitKat OS</li>
                                    <li>1.4 GHz Quad Core™ Processor</li>
                                    <li>
                                        20 MP front and 28 megapixel CMOS rear
                                        camera
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-[15px]">
                                <div className="text-info">
                                    <span className="text-black-2  font-bold">
                                        Availability:&nbsp;
                                    </span>
                                    <span className="text-[#3eb94f] font-bold">
                                        In Stock
                                    </span>
                                    <p className="my-[25px] font-bold text-black-2">
                                        SKU: 3721 -Vlk
                                    </p>
                                </div>
                                <div>
                                    <span className="text-price-1 text-[30px] font-bold">
                                        $114.00
                                    </span>
                                    <span className="text-price-2 text-[18px] font-light line-through leading-[18px]">
                                        $122.00
                                    </span>
                                </div>
                            </div>
                            <div className="pt-[10px] h-[99px]">
                                <div className="mb-[35px] h-[84px] md:h-[64px]">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="relative">
                                            <label
                                                htmlFor="quantity"
                                                className="text-[14px] font-bold text-black-2"
                                            >
                                                Qty:&nbsp;
                                            </label>
                                            <input
                                                type="text"
                                                name="quantity"
                                                value={quantity}
                                                onChange={handleQuantityChange}
                                                className="w-[80px] h-[40px] text-[12px] text-[#555] py-[6px] px-[12px] leading-[28px] border border-[#dddddd] rounded-[5px]"
                                            />
                                            <span
                                                onClick={handleIncrement}
                                                className="absolute w-[40px] h-[20px] top-0 right-0 flex items-center justify-center border-l border-[#dddddd] cursor-pointer group"
                                            >
                                                <FaAngleUp className="w-[9px] h-[14px] text-black-2 text-[14px] group-hover:text-[#0083c1]" />
                                            </span>

                                            <span
                                                onClick={handleDecrement}
                                                className="absolute w-[40px] h-[20px] top-[20px] right-0 flex items-center justify-center  border-l border-[#dddddd] cursor-pointer before:content-[''] before:w-[26px] before:h-[1px] before:bg-[#dddddd] before:absolute before:top-0 group"
                                            >
                                                <FaAngleDown className="w-[9px] h-[14px] text-black-2 text-[14px] group-hover:text-[#0083c1]" />
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <Button className="uppercase mr-[10px] py-[12px] px-[16px] h-[43px] text-info bg-bg-main hover:bg-[#444] transition-all ease-in-out duration-300">
                                                <span className="text-white group-hover:text-white">
                                                    Add to Cart
                                                </span>
                                            </Button>
                                            <ul className="flex gap-x-[10px]">
                                                <li className="bg-white py-[14px] px-[15px] flex justify-center items-center rounded-sm transform border cursor-pointer hover:border-[#0083c1] group">
                                                    <FaHeart className="text-[14px] text-[#666] group-hover:text-[#0083c1] transition duration-900 ease-out" />
                                                </li>
                                                <li className="bg-white py-[14px] px-[15px] flex justify-center items-center rounded-sm transform border cursor-pointer hover:border-[#0083c1] group">
                                                    <FaExchangeAlt className="text-[14px] text-[#666] group-hover:text-[#0083c1] transition duration-900 ease-out" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-[35px] border-t border-[#dddddd]">
                                <p className="text-[14px] text-black-2">
                                    Share This:
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <TabsSlider />
                    </div>
                </div>
                <div className="basis-1/4 pl-[15px]">
                    <div className="flex flex-row items-center justify-between mb-[5px]">
                        <h3 className="text-[#222222] text-heading1 font-normal">
                            Latest Product
                        </h3>
                    </div>
                    <hr className="border-dashed border border-[#f2f2f2]" />
                    <hr className="border-dashed border border-[#f2f2f2]" />
                    <hr className="border-dashed border border-[#f2f2f2]" />
                    <div className="my-[20px]">
                        {products.map((product) => (
                            <SmallBoxProduct
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                rating={product.rating}
                                price={product.price}
                                image={product.image}
                                oldPrice={product.oldPrice}
                                className="mb-[20px]"
                            />
                        ))}
                    </div>
                    <div>
                        <div className="relative group w-[270px] h-[322px]">
                            <Link href={""}>
                                <Image
                                    src="/images/left-image-static.png"
                                    alt="Sample Image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    className="object-contain z-10"
                                />
                            </Link>

                            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                                <div className="w-0 h-full bg-black-2 opacity-50 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-[40px]">
                <FeatureProduct
                    breakpoints={{
                        640: { slidesPerView: 4, spaceBetween: 30 }, // Màn hình trung bình
                        1024: { slidesPerView: 5, spaceBetween: 30 }, // Màn hình lớn
                    }}
                    className="h-[555px] sm:h-[162.53px] md:h-[194px] lg:h-[203.2px] xl:h-[256px]"
                />
            </div>
        </div>
    );
}
