"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper/modules";
import {MdOutlineNavigateNext} from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr";

// const images = [
//     "/slideshow/slider-2.jpg",
//     "/slideshow/slider-2.jpg",
//     "/slideshow/slider-2.jpg",
//     "/slideshow/slider-2.jpg",
// ];

export default function Slideshow({data = []}: { data: Banner[] }) {
    return (
        <div className="lg:w-3/4 w-full mx-[-15px]">
            <Swiper
                cssMode={true}
                navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide",
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                mousewheel={true}
                loop={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {/*{images.map((image, index) => (*/}
                {/*    <SwiperSlide key={`slideshow-${index}`}>*/}
                {/*        <div className="w-full relative">*/}
                {/*            <Image*/}
                {/*                src={image}*/}
                {/*                alt={`slide-${index}`}*/}
                {/*                width={884}*/}
                {/*                height={430}*/}
                {/*                sizes="100vw"*/}
                {/*                style={{*/}
                {/*                    width: "100%",*/}
                {/*                    height: "auto",*/}
                {/*                }}*/}
                {/*                className="w-full"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </SwiperSlide>*/}
                {/*))}*/}

                {data.map((item, index) => (
                    <SwiperSlide key={`slideshow-${index}`}>
                        <div className="relative flex items-center justify-center xl:w-[884px] xl:h-[430px]">
                            <div className={`absolute w-full h-full inset-0 `}
                                 style={{backgroundColor: `${item.background_color}`}}/>
                            <div className="text-[24px] z-20 text-black">{item.title}</div>
                        </div>
                    </SwiperSlide>
                ))}

                {data.length === 0 && (
                    <div className={'text-center text-[24px] '}>Loading...</div>
                )}

                {/* Nút điều hướng tiếp theo */}
                <div
                    className="button-next-slide md:flex hidden rounded bg-[#9f9a9a] w-[45px] h-[42px] items-center justify-center absolute top-[46%] right-0 z-30 hover:bg-[#0083c1] cursor-pointer">
                    <MdOutlineNavigateNext className="w-[25px] h-[30px] text-white"/>
                </div>

                {/* Nút điều hướng trước đó */}
                <div
                    className="button-prev-slide rounded md:flex hidden bg-[#9f9a9a] w-[45px] h-[42px] items-center justify-center absolute top-[46%] left-0 z-30 hover:bg-[#0083c1] cursor-pointer">
                    <GrFormPrevious className="w-[25px] h-[30px] text-white"/>
                </div>

                {/* Pagination */}
                <div
                    style={{bottom: "10px"}}
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
