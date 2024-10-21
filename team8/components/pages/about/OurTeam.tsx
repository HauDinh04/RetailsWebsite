"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ItemOurteam from "./ItemOurteam";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
const Ourteam = ({
  breakpoints = {
    480: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 3, spaceBetween: 10 },
    1024: { slidesPerView: 4, spaceBetween: 10 },
  },
}) => {
	const testimonials = [
		{
		  id: 1,
		  name: "Jennifer lawrence",
		  message:
			"“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.”",
		  role: "Co-Founder",
		  image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/about/ourmember04.png"
		},
		{
			id: 2,
			name: "Jennifer lawrence",
			message:
			  "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.”",
			role: "Co-Founder",
			image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/about/ourmember04.png"
		  },
		  {
			id: 3,
			name: "Jennifer lawrence",
			message:
			  "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.”",
			role: "Co-Founder",
			image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/about/ourmember04.png"
		  },
		  {
			id: 4,
			name: "Jennifer lawrence",
			message:
			  "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.”",
			role: "Co-Founder",
			image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/about/ourmember04.png"
		  },{
			id: 5,
			name: "Jennifer lawrence",
			message:
			  "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.”",
			role: "Co-Founder",
			image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/about/ourmember04.png"
		  },
		  {
			id: 6,
			name: "Jennifer lawrence",
			message:
			  "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.”",
			role: "Co-Founder",
			image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/about/ourmember04.png"
		  },
	  ];

  return (
    <div className="relative">
        <div className="absolute top-[29%] -left-[1%] z-10 rounded-full bg-[#808080] group hover:bg-bg-main flex items-center justify-center button-prev-slide">
          <GrFormPrevious className="text-white w-[34px] h-[34px] p-[6px]" />
        </div>

        <div className="absolute top-[29%] -right-[1%] z-10 bg-[#808080] group hover:bg-bg-main flex items-center justify-center rounded-full button-next-slide">
          <MdOutlineNavigateNext className="text-white  w-[34px] h-[34px] p-[6px]" />
        </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
        scrollbar={{ hide: true }}
        breakpoints={breakpoints}
        className=""
      >
        {testimonials.map((item) => (
          <SwiperSlide className="shrink" key={item.id}>
            <ItemOurteam testimonial={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Ourteam;
