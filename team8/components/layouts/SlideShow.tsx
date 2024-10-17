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
    <div className="lg:w-3/4 w-full lg:h-[414px] lg:px-[15px] h-[345px] relative">
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Gán pagination vào element tùy chỉnh
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`slide-${index}`}
              width={847}
              height={414}
              className="w-full"
            />
          </SwiperSlide>
        ))}

        {/* Nút điều hướng tiếp theo */}
        <div className="button-next-slide md:flex hidden rounded bg-[#9f9a9a] w-[45px] h-[42px] items-center justify-center absolute top-[46%] right-0 z-30 hover:bg-[#0083c1] cursor-pointer">
          <MdOutlineNavigateNext className="w-[25px] h-[30px] text-white" />
        </div>

        {/* Nút điều hướng trước đó */}
        <div className="button-prev-slide rounded md:flex hidden bg-[#9f9a9a] w-[45px] h-[42px] items-center justify-center absolute top-[46%] left-0 z-30 hover:bg-[#0083c1] cursor-pointer">
          <GrFormPrevious className="w-[25px] h-[30px] text-white" />
        </div>

        {/* Pagination */}
        <div
          style={{ bottom: "10px" }}
          className="custom-pagination absolute left-0 right-0 z-10 mx-auto flex justify-center"
        ></div>
      </Swiper>

      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background-color: #9f9a9a;
          margin: 0 8px;
          opacity: 1;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: white;
        }
      `}</style>
    </div>
  );
}
