"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaHeart, FaExchangeAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ProductDetail {
    thumbnail_url: string;
    images: string[];
    star: number;
    in_stock: boolean;
    sku: string;
    price_new: number;
    price_old: number;
}

export default function ProductDetails({
    productDetail,
}: {
    productDetail: ProductDetail;
}) {
    const [quantity, setQuantity] = useState(1);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        setActiveIndex(index);
    };

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
    const images = productDetail.images;
    return (
        <div className="flex flex-row flex-wrap justify-between">
            <div className="basis-full mb-[30px] md:mb-0 lg:basis-1/2 md:px-[15px] overflow-hidden">
                <div className="relative aspect-[3/4] p-[1px] border border-[#e6e6e6] overflow-hidden">
                    <Image
                        src={
                            activeIndex === null
                                ? productDetail.thumbnail_url
                                : images[activeIndex]
                        }
                        alt=""
                        fill
                        className="object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                        sizes="100vw"
                    />
                </div>
                <div className="mt-[10px] relative w-full">
                    <Swiper
                        spaceBetween={8}
                        slidesPerView={2}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide",
                        }}
                        modules={[Navigation, Scrollbar, Autoplay]}
                        scrollbar={{ hide: true }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`w-full aspect-[3/4] p-1 border rounded-[3px] cursor-pointer hover:border-bg-main ${
                                        activeIndex === index
                                            ? "border-bg-main"
                                            : "border-[#ddd]"
                                    }`}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={image}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        className="w-full aspect-[3/4] object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        className="button-prev-slide absolute top-1/2 left-[-28px] transform -translate-y-1/2 bg-none"
                        aria-label="Previous Slide"
                    >
                        <GrFormPrevious className="text-[#ababab] w-[40px] h-[40px] hover:text-bg-main" />
                    </button>
                    <button
                        className="button-next-slide absolute top-1/2 right-[-28px] transform -translate-y-1/2 bg-none "
                        aria-label="Next Slide"
                    >
                        <MdOutlineNavigateNext className="text-[#ababab] w-[40px] h-[40px] hover:text-bg-main" />
                    </button>
                </div>
            </div>
            <div className="basis-full lg:basis-1/2  text-left md:px-[15px]">
                <h3 className="text-[24px] font-light">Bint Beef</h3>
                <div className="my-[30px]">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <IoIosStar
                                key={i}
                                className={`text-[12px] ${
                                    i < Math.round(productDetail.star)
                                        ? "text-black"
                                        : "text-footer-info"
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <div className="mb-[30px] pl-[15px]">
                    <ul className="mb-[10px] text-info text-black-2 list-disc">
                        <li>45 inch HD Touch Screen (1280 x 720)</li>
                        <li>Android 4.4 KitKat OS</li>
                        <li>1.4 GHz Quad Core™ Processor</li>
                        <li>20 MP front and 28 megapixel CMOS rear camera</li>
                    </ul>
                </div>
                <div className="mb-[15px]">
                    <div className="text-info">
                        <span className="text-black-2  font-bold">
                            Availability:&nbsp;
                        </span>
                        <span className="text-[#3eb94f] font-bold">
                            {productDetail.in_stock
                                ? "In Stock"
                                : "Out of Stock"}
                        </span>
                        <p className="my-[25px] font-bold text-black-2">
                            SKU: {productDetail.sku}
                        </p>
                    </div>
                    <div>
                        <span className="text-price-1 text-[30px] font-bold">
                            ${productDetail.price_new}
                        </span>
                        <span className="text-price-2 text-[18px] font-light line-through leading-[18px]">
                            ${productDetail.price_old}
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
                    <p className="text-[14px] text-black-2">Share This:</p>
                </div>
            </div>
        </div>
    );
}