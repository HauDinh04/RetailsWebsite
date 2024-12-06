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
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialGooglePlus } from "react-icons/ti";
import { RiSkypeFill } from "react-icons/ri";
import Link from "next/link";
import {useAppDispatch} from "@/redux/hooks";
import {setShowCartNotice, setShowCompareNotice, setShowWishListNotice} from "@/redux/features/notice/notice.slice";

export default function ProductDetails({
    productDetail,
}: {
    productDetail: ProductType;
}) {
    const dispatch = useAppDispatch();
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

    const handleAddProduct = () => {
        dispatch(setShowCartNotice());
    }

    const handleCompareProduct = () => {
        dispatch(setShowCompareNotice())
    }

    const handleAddWishList = () => {
        dispatch(setShowWishListNotice());
    }
    return (
        <div className="flex flex-row flex-wrap justify-between">
            <div className="basis-full mb-[30px] md:mb-20px lg:mb-25px lg:basis-1/2 px-[15px] overflow-hidden">
                <div className="relative aspect-[3/4] p-[1px] border border-[#e6e6e6] overflow-hidden">
                    <Image
                        src={
                            activeIndex === null
                                ? productDetail.image
                                : images[activeIndex]
                        }
                        alt=""
                        fill
                        className="object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                        sizes="100vw"
                    />
                </div>
                <div className="mt-[10px] relative w-full">
                    <Swiper
                        spaceBetween={8}
                        slidesPerView={2}
                        navigation={{
                            nextEl: ".button-next-slide-1",
                            prevEl: ".button-prev-slide-1",
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
                        {productDetail.images.map((image, index) => (
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
                                        className="w-full aspect-[3/4] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        className="button-prev-slide-1 absolute top-1/2 left-[-28px] transform -translate-y-1/2 bg-none"
                        aria-label="Previous Slide"
                    >
                        <GrFormPrevious className="text-[#ababab] w-[40px] h-[40px] hover:text-bg-main" />
                    </button>
                    <button
                        className="button-next-slide-1 absolute top-1/2 right-[-28px] transform -translate-y-1/2 bg-none "
                        aria-label="Next Slide"
                    >
                        <MdOutlineNavigateNext className="text-[#ababab] w-[40px] h-[40px] hover:text-bg-main" />
                    </button>
                </div>
            </div>
            <div className="basis-full lg:basis-1/2 text-left px-[15px]">
                <h3 className="text-[24px] font-light mb-[10px]">
                    {productDetail.name}
                </h3>
                <div className="my-[30px]">
                    <div className="flex">
                        {Array.from(
                            { length: productDetail.rating },
                            (_, i) => (
                                <IoIosStar
                                    key={i}
                                    className={`text-[12px] ${
                                        i < Math.round(productDetail.rating)
                                            ? "text-black"
                                            : "text-footer-info"
                                    }`}
                                />
                            )
                        )}
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
                <div className="mb-[15px] inline-block w-full">
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
                            ${productDetail.price.toFixed(2)}
                        </span>
                        {productDetail.oldPrice === 0 ? (
                            <></>
                        ) : (
                            <span className="text-price-2 text-[18px] font-light line-through leading-[18px]">
                                ${productDetail.oldPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
                <div className="mt-[10px]">
                    <div className="mb-[35px] flex flex-row flex-wrap sm:justify-between">
                        <div className="relative">
                            <label
                                htmlFor="quantity"
                                className="text-[14px] font-bold text-black-2 pr-[5px] pt-[8px] pb-[5px]"
                            >
                                Qty:
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

                        <div className="w-full sm:w-auto flex flex-wrap md:flex-nowrap md:justify-between mt-[20px] sm:mt-0">
                            <Button onClick={handleAddProduct} className="uppercase mr-[10px] py-[12px] px-[16px] h-[43px] text-info bg-bg-main hover:bg-[#444] transition-all ease-in-out duration-300">
                                <span className="text-white group-hover:text-white">
                                    Add to Cart
                                </span>
                            </Button>
                            <ul className="flex gap-x-[10px] mb-[10px]">
                                <li onClick={handleAddWishList} className="bg-white py-[14px] px-[15px] flex justify-center items-center rounded-sm transform border cursor-pointer hover:border-[#0083c1] group">
                                    <FaHeart className="text-[14px] text-[#666] group-hover:text-[#0083c1] transition duration-900 ease-out" />
                                </li>
                                <li onClick={handleCompareProduct} className="bg-white py-[14px] px-[15px] flex justify-center items-center rounded-sm transform border cursor-pointer hover:border-[#0083c1] group">
                                    <FaExchangeAlt className="text-[14px] text-[#666] group-hover:text-[#0083c1] transition duration-900 ease-out" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-[35px] border-t border-[#dddddd] flex justify-between">
                    <p className="text-[14px] text-black-2">Share This:</p>
                    <div>
                        <ul className="mb-[10px] pl-[40px]">
                            <li className="bg-[#1d9ffa] inline-block rounded-[3px] ml-[5px] mr-[5px]">
                                <Link
                                    href=""
                                    className="w-[27px] h-[27px] flex items-center justify-center"
                                >
                                    <FaFacebookF className="text-white" />
                                </Link>
                            </li>
                            <li className="bg-[#456bbe] inline-block rounded-[3px] ml-[5px] mr-[5px]">
                                <Link
                                    href=""
                                    className="w-[27px] h-[27px] flex items-center justify-center"
                                >
                                    <IoLogoTwitter className="text-white " />
                                </Link>
                            </li>
                            <li className="bg-[#e04d3f] inline-block rounded-[3px] ml-[5px] mr-[5px]">
                                <Link
                                    href=""
                                    className="w-[27px] h-[27px] flex items-center justify-center"
                                >
                                    <TiSocialGooglePlus className="text-white " />
                                </Link>
                            </li>
                            <li className="bg-[#4899d2] inline-block rounded-[3px] ml-[5px]">
                                <Link
                                    href=""
                                    className="w-[27px] h-[27px] flex items-center justify-center"
                                >
                                    <RiSkypeFill className=" text-white " />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
