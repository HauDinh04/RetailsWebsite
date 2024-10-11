"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const images = [
  "/slideshow/slider-2.jpg",
  "/slideshow/slider-2.jpg",
  "/slideshow/slider-2.jpg",
  "/slideshow/slider-2.jpg",
];
export default function Slideshow() {
  return (
    <div className="container w-[847px] h-[414px] py-[15px] relative">
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`slide-${index}`}
              width={847}
              height={414}
            />
          </SwiperSlide>
        ))}
        <div className="button-next-slide rounded	bg-[#9f9a9a] w-[45px] h-[42px] flex items-center justify-center absolute top-[46%] right-0 z-30 hover:bg-[#0083c1] cursor-pointer">
          <MdOutlineNavigateNext className="w-[25px] h-[30px] text-white-1" />
        </div>
        <div className="button-prev-slide rounded 	bg-[#9f9a9a] w-[45px] h-[42px] flex items-center justify-center absolute  top-[46%] left-0 z-30 hover:bg-[#0083c1] cursor-pointer">
          <GrFormPrevious className="w-[25px] h-[30px] text-white-1" />
        </div>
      </Swiper>
    </div>
  );
}
