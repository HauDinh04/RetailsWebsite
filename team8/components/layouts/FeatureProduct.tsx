"use client";
import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
    {
        id: 1,
        name: "Dummy product #01",
        image: "/images/product-2.jpg",
        price: 74.0,
        oldPrice: 122.0,
        isNew: true,
        rating: 4.5, // 4.5 trên 5 sao
    },
    {
        id: 2,
        name: "Dummy product #02",
        image: "/images/product-2.jpg",
        price: 65.0,
        oldPrice: 98.0,
        isNew: false,
        rating: 4.0,
    },
    {
        id: 3,
        name: "Dummy product #03",
        image: "/images/product-2.jpg",
        price: 80.0,
        oldPrice: 140.0,
        isNew: true,
        rating: 1.0,
    },
    {
        id: 4,
        name: "Dummy product #04",
        image: "/images/product-2.jpg",
        price: 65.0,
        oldPrice: 98.0,
        isNew: false,
        rating: 2.0,
    },
    {
        id: 5,
        name: "Dummy product #05",
        image: "/images/product-2.jpg",
        price: 80.0,
        oldPrice: 140.0,
        isNew: true,
        rating: 1.0,
    },
    {
        id: 6,
        name: "Dummy product #06",
        image: "/images/product-2.jpg",
        price: 65.0,
        oldPrice: 98.0,
        isNew: false,
        isSale: 25,
        rating: 4.0,
    },
    {
        id: 7,
        name: "Dummy product #07",
        image: "/images/product-2.jpg",
        price: 80.0,
        oldPrice: 140.0,
        isNew: true,
        rating: 5.0,
    },
    {
        id: 8,
        name: "Dummy product #08",
        image: "/images/product-2.jpg",
        price: 65.0,
        oldPrice: 98.0,
        isNew: false,
        isSale: 25,
        rating: 4.0,
    },
    {
        id: 9,
        name: "Dummy product #09",
        image: "/images/product-2.jpg",
        price: 80.0,
        oldPrice: 140.0,
        isNew: true,
        rating: 5.0,
    },
];

export default function FeatureProduct({
    breakpoints = {
        640: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 5, spaceBetween: 10 },
    },
    className = "",
}) {
    return (
        <div className="pt-[43px] relative">
            <div className="flex flex-row items-center justify-between mb-[5px]">
                <h3 className="text-[#222222] text-heading1">
                    Smartphone & Tablet
                </h3>
                <div className="flex flex-row">
                    <div className="w-[30px] h-[30px] bg-[#f2f2f2] group hover:bg-bg-main flex items-center justify-center rounded button-prev-slide">
                        <GrFormPrevious className="text-[#333] group-hover:text-white-1 w-[16px] h-[16px]" />
                    </div>

                    <div className="bg-[#f2f2f2] group hover:bg-bg-main w-[30px] h-[30px] flex items-center justify-center rounded ml-[5px] button-next-slide">
                        <MdOutlineNavigateNext className="text-[#333] group-hover:text-white-1" />
                    </div>
                </div>
            </div>
            <hr className="border-dashed border border-[#f2f2f2]" />
            <hr className="border-dashed border border-[#f2f2f2]" />
            <hr className="border-dashed border border-[#f2f2f2]" />
            <div className="py-[20px]">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide",
                    }}
                    modules={[Navigation, Scrollbar, Autoplay]}
                    scrollbar={{ hide: true }}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    breakpoints={breakpoints}
                    className=""
                >
                    {products.map((product) => (
                        <SwiperSlide className="shrink" key={product.id}>
                            <Product product={product} className={className} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
