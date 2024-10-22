"use client";
import LeftNav from "@/components/layouts/LeftNav";
import { Swiper, SwiperSlide } from "swiper/react";
// import { CountDownProduct } from "@/components/layouts/CountDownProduct";
// import FeatureProduct from "@/components/layouts/FeatureProduct";
// import { useState } from "react";
// import Notice from "@/components/layouts/Notice";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbPigMoney } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import FeatureProduct from "@/components/layouts/FeatureProduct";
import Slideshow from "@/components/layouts/SlideShow";
import { CountDownProduct } from "@/components/layouts/CountDownProduct";
import Image from "next/image";
import { FreeMode, Pagination } from "swiper/modules";

export default function Home() {
  // /  const [isShow, setIsShow] = useState(true);

  return (
    <div className="items-center justify-center py-[10px] ">
      <div className="flex justify-between ">
        <LeftNav />
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
          <div className="">
            <CountDownProduct
              thumbnail_url="/images/product-1.jpg "
              name="sanpham"
              description="sadad"
              price={10000}
              discount_price={222}
            />
          </div>
          <div className="">
            <CountDownProduct
              thumbnail_url="/images/product-1.jpg "
              name="sanpham"
              description="sadad"
              price={10000}
              discount_price={222}
            />
          </div>
        </div>
      </div>
      {/* <div className="py-4 mx-auto w-full">
        <div className="flex justify-center space-x-4 mb-4 w-full h-[100px]">
          <Image src="/images/ggplay.jpg" alt="Image 1" width={100} height={50} className="w-1/3"  />
          <Image src="/images/ggplay.jpg" alt="Image 2"  width={100} height={50} className="w-1/3" />
        </div>
      </div> */}
      <FeatureProduct />
      <div className="">
        <div className="py-3">
          <h3 className="text-heading2">Latest Blog</h3>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper h-[200px]"
        >
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
        </Swiper>
      </div>
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
          className="mySwiper h-[100px]"
        >
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Image src={"/images/blog-3.jpg"} alt="images blogs" fill></Image>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=""></div>
    </div>

    // <>
    //     <div className="flex justify-between">
    //         <LeftNav/>
    //         <SlideShow/>
    //     </div>
    //     <div className="flex ">
    //         <CountDownProduct thumbnail_url={'/images/product-1.jpg'} description={''} discount_price={321}
    //                           price={12} name={'test home'}/>
    //         <CountDownProduct thumbnail_url={'/images/product-1.jpg'} description={''} discount_price={321}
    //                           price={12} name={'test home'}/>
    //     </div>
    //     <FeatureProduct/>
    //     <Notice isShow={isShow} setIsShow={setIsShow}  />
    // </>
  );
}
