"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"; // Thêm css cho pagination dots
import ItemClientSay from "./ItemClientSay";

const ClientSay = ({

  breakpoints = {
    640: { slidesPerView: 1, spaceBetween: 10 },
    1024: { slidesPerView: 1, spaceBetween: 10 },
  },
}) => {
	const pagination = {
		clickable: true,
	  };
  const testimonials = [
    {
      id: 1,
      name: "Jennifer lawrence",
      message:
        "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.”",
      role: "Co-Founder",
    },
    {
      id: 2,
      name: "Jennifer lawrence",
      message:
        "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.”",
      role: "Co-Founder",
    },
    {
      id: 3,
      name: "Jennifer lawrence",
      message:
        "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.”",
      role: "Co-Founder",
    },
    {
      id: 4,
      name: "Jennifer lawrence",
      message:
        "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.”",
      role: "Co-Founder",
    },
  ];

  return (
    <div className="" style={{ height: '100%', position: 'relative' }}>
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    modules={[Navigation, Pagination, Scrollbar, A11y]}
	pagination={pagination}
    breakpoints={breakpoints}
    className=""
    style={{ paddingBottom: '20px' }} // Ví dụ thêm padding cho phần swiper
  >
    {testimonials.map((testimonial) => (
      <SwiperSlide key={testimonial.id}>
        <ItemClientSay testimonial={testimonial} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  );
};

export default ClientSay;
