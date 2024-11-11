import React from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SmallBoxProduct from './SmallBoxProduct';

interface slideProps {
    title: string;
    nextBtn: string;
    prevBtn: string;
}

const Slide: React.FC<slideProps> = ({ title, nextBtn, prevBtn }) => {
    return (
        <div className="pt-[43px] relative">
            <div className="flex flex-row items-center justify-between mb-[5px]">
                <h3 className="text-[#222222] text-heading1">{title}</h3>
                <div className="flex flex-row">
                    <div className={`w-[30px] h-[30px] bg-[#f2f2f2] group hover:bg-bg-main flex items-center justify-center rounded ${prevBtn}`}>
                        <GrFormPrevious className="text-[#333] group-hover:text-white-1 w-[16px] h-[16px]" />
                    </div>
                    <div className={`bg-[#f2f2f2] group hover:bg-bg-main w-[30px] h-[30px] flex items-center justify-center rounded ml-[5px] ${nextBtn}`}>
                        <MdOutlineNavigateNext className="text-[#333] group-hover:text-white-1" />
                    </div>
                </div>
            </div>
            <hr className="border-dashed border border-[#f2f2f2]" />
            <hr className="border-dashed border border-[#f2f2f2]" />
            <hr className="border-dashed border border-[#f2f2f2]" />
            <div className="py-[20px]">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                        nextEl: `.${nextBtn}`,
                        prevEl: `.${prevBtn}`,
                    }}
                    modules={[Navigation, Scrollbar, Autoplay]}
                    scrollbar={{ hide: true }}
                    loop={true}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <SwiperSlide key={index} className="grid grid-cols-3 gap-5 ">
                            {Array.from({ length: 3 }).map((_, subIndex) => (
                                <div className="mt-3" key={index}> <SmallBoxProduct
                                key={subIndex}
                                id={`${subIndex}`}
                                name={`Product ${subIndex + 1}`}
                                rating={4.5}
                                price={20}
                                oldPrice={25}
                                image="/images/product-1.jpg"
                            /></div>
                               
                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slide;
