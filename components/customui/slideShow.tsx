"use client";
import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Separator } from "../ui/separator";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface TitleProps {
  title: string;
}

const SlideComponent: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[22px] leading-[30px] font-normal">{title}</h3>
        </div>
        <div className="flex flex-row">
          <div className="w-[30px] h-[30px] bg-[#f2f2f2] group hover:bg-bg-main flex items-center justify-center rounded button-prev-slide">
            <GrFormPrevious className="text-[#333] group-hover:text-white-1 w-[16px] h-[16px]" />
          </div>
          <div className="bg-[#f2f2f2] group hover:bg-bg-main w-[30px] h-[30px] flex items-center justify-center rounded ml-[5px] button-next-slide">
            <MdOutlineNavigateNext className="text-[#333] group-hover:text-white-1" />
          </div>
        </div>
      </div>
      <Separator className="mt-3 dashed-separator" />
      <Swiper
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 6000 }}
        slidesPerView={1}
        loop={true}
        className="flex "
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>12</SwiperSlide>
        <SwiperSlide>13</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideComponent;
