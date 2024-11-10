"use client";
import LeftNav from "@/components/layouts/LeftNav";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import Notice from "@/components/layouts/Notice";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbPigMoney } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import FeatureProduct from "@/components/layouts/FeatureProduct";
import Slideshow from "@/components/layouts/SlideShow";
import { CountDownProduct } from "@/components/layouts/CountDownProduct";
import Image from "next/image";
import {
  // Autoplay,
  FreeMode,
  // Navigation,
  Pagination,
  // Scrollbar,
} from "swiper/modules";
// import SmallBoxProduct from "@/components/layouts/SmallBoxProduct";
import Link from "next/link";
import Slide from "@/components/layouts/Slide";

// import {MdOutlineNavigateNext} from "react-icons/md";
// import {GrFormPrevious} from "react-icons/gr";

export default function Home() {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <div className="items-center justify-center py-[10px] mb-4 ">
        <div className=" mx-[-15px] items-center w-full  flex justify-between  relative">
          <div className="px-[15px]">
            <LeftNav />
          </div>
          <Slideshow />
        </div>
        <div className="mt-4">
          <div className="py-[10px] grid grid-cols-1 md:grid-cols-3  ">
            <div className="flex border justify-center items-center sm:justify-start p-5">
              <IoRocketOutline className="text-[30px]" />
              <div className="ml-4">
                <h2 className="uppercase text-sub-heading-bold">
                  free shipping & return{" "}
                </h2>
                <span className="text-info text-price-2">
                  Free shipping on orders $49
                </span>
              </div>
            </div>
            <div className="flex justify-center border items-center sm:justify-start p-5">
              <TbPigMoney className="text-[30px]" />
              <div className="ml-4">
                <h2 className="uppercase text-sub-heading-bold">
                  money guarantee
                </h2>
                <span className="text-info text-price-2">
                  30 days money back guarantee
                </span>
              </div>
            </div>
            <div className="flex border justify-center items-center sm:justify-start p-5">
              <TfiHeadphoneAlt className="text-[30px]" />
              <div className="ml-4">
                <h2 className="uppercase text-sub-heading-bold">
                  online support
                </h2>
                <span className="text-info text-price-2">
                  We support online 24/24 on day
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="py-3">
            <h3 className="text-heading2">Deals of the Week</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <CountDownProduct
              thumbnail_url="/images/product-1.jpg "
              name="sanpham"
              description="sadad"
              price={10000}
              discount_price={222}
              sale_end_time=""
              in_stock={true}
              sku=""
              images={[""]}
              star={4}
            />

            <CountDownProduct
              thumbnail_url="/images/product-1.jpg "
              name="sanpham"
              description="sadad"
              price={10000}
              discount_price={222}
              sale_end_time=""
              in_stock={true}
              sku=""
              images={[""]}
              star={4}
            />
          </div>
        </div>
        <section className="hidden lg:block  mt-10 ">
          <div className="flex gap-4 object-cover ">
            <Link href={"/"}>
              <div className="relative group overflow-hidden w-[578px] h-[200px]">
                <Image
                  src={"/banner/banner1.jpg"}
                  alt="banner"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="relative group overflow-hidden w-[578px] h-[200px]">
                <Image
                  src={"/banner/banner1.jpg"}
                  alt="banner"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              </div>
            </Link>
          </div>
          <div className="flex gap-4 mt-4">
            <Link href={"/"}>
              <div className="relative group overflow-hidden w-[282px] h-[400px]">
                <Image
                  src={"/banner/banner2.jpg"}
                  alt="banner"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="relative group overflow-hidden w-[578px] h-[400px]">
                <Image
                  src={"/banner/banner3.jpg"}
                  alt="banner"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="relative group overflow-hidden w-[282px] h-[400px]">
                <Image
                  src={"/banner/banner2.jpg"}
                  alt="banner"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              </div>
            </Link>
          </div>
        </section>

        <FeatureProduct />
        <div className="">
          <div className="py-3">
            <h3 className="text-heading2">Latest Blog</h3>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper h-auto"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 4,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div className="w-full h-auto relative">
                  <Image
                    src="/images/blog-3.jpg"
                    alt="images blogs"
                    layout="responsive"
                    width={200}
                    height={200}
                    className=" object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <section className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 ">
          <div className="">
            <Slide title="New Arrivals" nextBtn="nex" prevBtn="pre" />
          </div>
          <div className="">
            <Slide title="Bestsellers" nextBtn="next" prevBtn="prevt" />
          </div>

          <div className="">
            <Slide title="Featured" nextBtn="next1" prevBtn="prev1" />
          </div>
          <div className="">
            <Slide title="Hot Sale" nextBtn="next2" prevBtn="prev2" />
          </div>
        </section>
        <div className="">
          <div className="py-3">
            <h3 className="text-heading2">Fetured brands</h3>
          </div>

          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper h-auto w-full"
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div className="w-full h-32 relative">
                  <Image
                    src="/images/blog-3.jpg"
                    alt="images blogs"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Notice isShow={isShow} setIsShow={setIsShow} />
    </>
  );
}
