'use client';
import React from 'react';
import Link from "next/link";
import {FaAngleRight} from "react-icons/fa6";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState} from "react";

function Page() {
    const [isHoveredEffect1, setIsHoveredEffect1] = useState(false);
    const [isHoveredEffect2, setIsHoveredEffect2] = useState(false);
    const [isHoveredEffect6, setIsHoveredEffect6] = useState(false);
    const [isHoveredEffect9, setIsHoveredEffect9] = useState(false);
    const [isHoveredEffect10, setIsHoveredEffect10] = useState(false);

    return (
        <div className={'container '}>
            <div className="flex items-center my-[20px] text-[#555555] gap-[10px] text-[14px]">
                <Link href={'/'} className={'hover:text-[#0083c1]'}>Home</Link>
                <FaAngleRight className={'block'}/>
                <div className="">Page</div>
                <FaAngleRight className={'block'}/>
                <div className="">Banner Effect</div>
            </div>
            <div className="">
                <h1 className={'text-[#555555] text-[18px] mt-[20px] mb-[10px]'}>Banner Hover</h1>
                <div className="text-[#555555] text-[12px] mb-[10px]">
                    Hover over image below to see effect.
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px] w-full h-max mb-[20px]">
                <div className="w-full h-auto flex flex-col gap-[10px] ">
                    <div className="text-[#555555] text-[18px]">Hover effect 1</div>
                    <div className="block w-full group cursor-pointer relative aspect-[6/2.3]">
                        <Image alt={'Hover effect 1'} className={'object-cover hover:opacity-[0.8]'} sizes="100vw"
                               src={'/images/product-1.jpg'} fill/>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px]">
                    <div className="text-[#555555] text-[18px]">Hover effect 2</div>
                    <div
                        className="block w-full cursor-pointer relative aspect-[6/2.3]"
                        onMouseEnter={() => setIsHoveredEffect1(true)}  // Bắt sự kiện hover
                        onMouseLeave={() => setIsHoveredEffect1(false)} // Bắt sự kiện rời khỏi hover
                    >
                        <Image
                            alt="Hover effect 1"
                            className="object-cover"
                            sizes="100vw"
                            src="/images/product-1.jpg"
                            fill
                        />
                        <motion.div
                            initial={{x: "-100%", opacity: 0, width: '0%'}}
                            animate={isHoveredEffect1 ? {x: "0%", width: '100%', opacity: 0.6} : {
                                x: "-100%",
                                opacity: 0
                            }} // Điều khiển dừng ở vị trí 0
                            transition={{duration: 0.6, ease: "easeInOut"}}
                            className="absolute inset-0 bg-white"
                        />
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px]">
                    <div className="text-[#555555] text-[18px]">Hover effect 3</div>
                    <div
                        className="block w-full cursor-pointer relative aspect-[6/2.3] overflow-hidden"
                        onMouseEnter={() => setIsHoveredEffect2(true)}
                        onMouseLeave={() => setIsHoveredEffect2(false)}
                    >
                        {/* Hình ảnh */}
                        <Image
                            alt="Hover effect with expanding circle"
                            className="object-cover"
                            sizes="100vw"
                            src="/images/product-1.jpg"
                            fill
                        />

                        {/* Hiệu ứng vòng tròn */}
                        <motion.div
                            initial={{scale: 0, opacity: 0.7}} // Vòng tròn ban đầu nhỏ
                            animate={isHoveredEffect2
                                ? {scale: 1.5, opacity: 0.7}
                                : {
                                    scale: 0,
                                    opacity: 0,
                                }}
                            transition={{duration: 0.8, ease: 'easeInOut'}}
                            className="absolute inset-0"
                            style={{
                                borderRadius: '100%',
                                background: 'radial-gradient(circle, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.3) 30%)',
                                transformOrigin: 'center',
                            }}
                        />
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px] ">
                    <div className="text-[#555555] text-[18px]">Hover effect 4</div>
                    <div className="block w-full group cursor-pointer relative aspect-[6/2.3]">
                        <Image alt={'Hover effect 1'} className={'object-cover'} sizes="100vw"
                               src={'/images/product-1.jpg'} fill/>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px] ">
                    <div className="text-[#555555] text-[18px]">Hover effect 5</div>
                    <div className="block w-full group cursor-pointer relative aspect-[6/2.3]">
                        <Image alt={'Hover effect 1'} className={'object-cover'} sizes="100vw"
                               src={'/images/product-1.jpg'} fill/>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px] ">
                    <div className="text-[#555555] text-[18px]">Hover effect 6</div>
                    <div
                        className="block max-w-full overflow-hidden w-full group cursor-pointer relative aspect-[6/2.3]">
                        <Image alt={'Hover effect 1'} className={`object-cover max-w-full transition-all 
                        duration-500 ease-in-out group-hover:scale-110`} sizes="100vw"
                               src={'/images/product-1.jpg'} fill/>
                        <div
                            className="hidden absolute inset-0 z-[2] h-full w-full bg-[rgba(0,0,0,0.3)]
                               group-hover:block"></div>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px]">
                    <div className="text-[#555555] text-[18px]">Hover effect 7</div>
                    <div
                        className="block w-full group cursor-pointer relative aspect-[6/2.3]"
                        onMouseEnter={() => setIsHoveredEffect6(true)}
                        onMouseLeave={() => setIsHoveredEffect6(false)}
                    >
                        {/* Hình ảnh */}
                        <Image
                            alt={'Hover effect 1'}
                            className={'object-cover'}
                            sizes="100vw"
                            src={'/images/product-1.jpg'}
                            fill
                        />

                        {/* Thanh đen lan ra từ giữa */}
                        <motion.div
                            initial={{width: '0%', left: '50%'}}
                            animate={isHoveredEffect6 ? {width: '100%', left: 0} : {width: '0%', left: '50%'}}
                            transition={{duration: 0.3, ease: 'easeInOut'}}
                            className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"
                        />
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px] ">
                    <div className="text-[#555555] text-[18px]">Hover effect 8</div>
                    <div className="block w-full group cursor-pointer relative aspect-[6/2.3]">
                        <Image alt={'Hover effect 1'} className={'object-cover'} sizes="100vw"
                               src={'/images/product-1.jpg'} fill/>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px] ">
                    <div className="text-[#555555] text-[18px]">Hover effect 9</div>
                    <div className="block w-full group cursor-pointer relative aspect-[6/2.3]">
                        <Image alt={'Hover effect 1'} className={`object-cover transition-all ease-in-out duration-300
                         group-hover:scale-[1.02] group-hover:shadow-xl`} sizes="100vw"
                               src={'/images/product-1.jpg'} fill/>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px]">
                    <div className="text-[#555555] text-[18px]">Hover effect 10</div>
                    <div
                        className="block w-full cursor-pointer relative aspect-[6/2.3]"
                        onMouseEnter={() => setIsHoveredEffect9(true)}
                        onMouseLeave={() => setIsHoveredEffect9(false)}
                    >
                        {/* Hình ảnh */}
                        <Image
                            alt={'Hover effect 1'}
                            className={'object-cover'}
                            sizes="100vw"
                            src={'/images/product-1.jpg'}
                            fill
                        />

                        {/* Nền đen với gradient */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={isHoveredEffect9 ? {opacity: 1} : {opacity: 0}}
                            transition={{duration: 0.6, ease: 'easeInOut'}}
                            className="absolute inset-0"
                            style={{
                                background: isHoveredEffect9
                                    ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))'
                                    : 'transparent'
                            }}
                        />
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px]">
                    <div className="text-[#555555] text-[18px]">Hover effect 11</div>
                    <div
                        className="block w-full cursor-pointer relative aspect-[6/2.3]"
                        onMouseEnter={() => setIsHoveredEffect10(true)}
                        onMouseLeave={() => setIsHoveredEffect10(false)}
                    >
                        <Image
                            alt={'Hover effect 10'}
                            className={'object-cover'}
                            sizes="100vw"
                            src={'/images/product-1.jpg'}
                            fill
                        />
                        <motion.div
                            initial={{width: 0, height: 0, x: '0%', y: '0%', opacity: 0}}
                            animate={isHoveredEffect10 ? {
                                width: '100%',
                                height: '100%',
                                x: '0%',
                                y: '0%',
                                opacity: 1
                            } : {}}
                            transition={{duration: 0.5, ease: 'easeInOut'}}
                            className="absolute top-0 left-0 bg-[rgba(0,0,0,0.1)]"
                        />
                        <motion.div
                            initial={{width: 0, height: 0, x: '0%', y: '0%', opacity: 0}}
                            animate={isHoveredEffect10 ? {
                                width: '100%',
                                height: '100%',
                                x: '0%',
                                y: '0%',
                                opacity: 1
                            } : {}}
                            transition={{duration: 0.5, ease: 'easeInOut'}}
                            className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.1)]"
                        />

                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-[10px]">
                    <div className="text-[#555555] text-[18px]">Hover effect 12</div>
                    <div className="block w-full group cursor-pointer relative aspect-[6/2.3]">
                        <Image alt={'Hover effect 1'} className={'object-cover'} sizes="100vw"
                               src={'/images/product-1.jpg'} fill/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;