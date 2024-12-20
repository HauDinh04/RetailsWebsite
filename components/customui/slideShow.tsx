import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Swiper } from "swiper/react";
import { Scrollbar, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SlideShowProps {
  title: string;
  nextBt: string;
  prevBt: string;
  className?: string;
  children: React.ReactNode;  // Chứa các SwiperSlide
}

const SlideShow: React.FC<SlideShowProps> = ({
  title,
  nextBt,
  prevBt,
  children,
}) => {
  return (
    <div className="pt-[43px] relative">
      <div className="flex flex-row items-center justify-between mb-[5px]">
        <h3 className="text-[#222222] text-heading1">{title}</h3>
        <div className="flex flex-row">
          <div
            className={`w-[30px] h-[30px] bg-[#f2f2f2] group hover:bg-bg-main flex items-center justify-center rounded ${prevBt}`}
          >
            <GrFormPrevious className="text-[#333] group-hover:text-white-1 w-[16px] h-[16px]" />
          </div>

          <div
            className={`bg-[#f2f2f2] group hover:bg-bg-main w-[30px] h-[30px] flex items-center justify-center rounded ml-[5px] ${nextBt}`}
          >
            <MdOutlineNavigateNext className="text-[#333] group-hover:text-white-1" />
          </div>
        </div>
      </div>
      <hr className="border-dashed border border-[#f2f2f2]" />
      <div className="py-[20px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          navigation={{
            nextEl: `.${nextBt}`,
            prevEl: `.${prevBt}`,
          }}
          modules={[Navigation, Scrollbar, Autoplay]}
          scrollbar={{ hide: true }}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideShow;
