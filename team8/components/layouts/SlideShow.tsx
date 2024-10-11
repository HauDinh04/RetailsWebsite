"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Scrollbar, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  "/slideshow/slide1.jpg",
  "/slideshow/slide2.jpg",
  "/slideshow/slide4.jpg",
  "/slideshow/slide5.jpg",
  "/slideshow/slide3.png",
  "/slideshow/slide6.png",
  "/slideshow/slide7.png",
];

export default function Slideshow() {
  return (
    <div className="flex justify-center items-center mt-2 rounded-md object-cover">
      <Swiper
        scrollbar={{ hide: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
        style={{ width: "880px", height: "430px" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ width: "100%", height: "100%" }}>
            <Image
              src={src}
              alt={`slide ${index + 1}`}
              width={880}
              height={430}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}