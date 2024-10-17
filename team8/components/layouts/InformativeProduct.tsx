import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaStar, FaStarHalfAlt, FaHeart, FaExchangeAlt, FaSearch  } from "react-icons/fa";

function SmallBoxProduct({id, name, rating, price, image, oldPrice, content, DiscountPercentage, className = ''}: {
    id: string,
    name: string,
    rating: number,
    price: number,
    image: string,
    oldPrice: number,
    content: string,
    DiscountPercentage: number,
    className?: string
}) {

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <Link href={`/product/${id}`} className={'flex group w-[260px] h-[346px]' + ` ${className}`}>
            <div className="p-[5px] group-hover:border-[#0083c1] border border-solid border-[#ccc] rounded">
                <div className="relative w-[250px] h-[334px]">
                    <Image alt={name || ''} src={image} fill />
                    <div className="absolute top-[10px] left-[10px] w-[45px] h-[45px] bg-[#0083c1] rounded-full flex items-center justify-center">
                        <p className="text-white text-[12px]">
                            NEW
                        </p>
                    </div>

                    <div className="absolute top-[10px] right-[10px] w-[45px] h-[45px] bg-[#ff5555] rounded-full flex items-center justify-center">
                        <p className="text-white text-[12px]">
                            -{DiscountPercentage}%
                        </p>
                        
                    </div>
                    <div className="absolute bottom-[10px] right-[10px] flex flex-col gap-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-[40px] h-[40px] bg-white rounded-sm hover:bg-[#0083c1] flex items-center justify-center transition duration-300 group">
                            <FaHeart className="group-hover:text-white transition duration-300" />
                        </div>
                        <div className="w-[40px] h-[40px] bg-white rounded-sm hover:bg-[#0083c1] flex items-center justify-center transition duration-300 group">
                            <FaExchangeAlt className="group-hover:text-white transition duration-300" />
                        </div><div className="w-[40px] h-[40px] bg-white rounded-sm hover:bg-[#0083c1] flex items-center justify-center transition duration-300 group">
                            <FaSearch className="group-hover:text-white transition duration-300" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col pt-[30px] pl-[30px] w-[585px] h-[322px]">
            <div className="relative  text-[rgba(0,0,0,0.7)] text-[18px] mt-[10px] mb-[10px] group-hover:text-[#0083c1] whitespace-nowrap overflow-hidden text-ellipsis"> {name} </div>
                <div className={'flex gap-[5px] text-[rgba(0,0,0,0.7)] mt-[10px] mb-[20px]'}>
                    {Array.from({length: fullStars}).map((_, index) => (
                        <FaStar className={'text-[12px]'} key={index}/>
                    ))}
                    {hasHalfStar && (
                        <div className={'flex'}>
                            <FaStarHalfAlt style={{
                                width: '12px',
                                height: '12px',
                                clipPath: 'inset(0 50% 0 0)'
                            }}/>
                        </div>
                    )}
                </div>
                <div className="flex gap-[10px] mb-[15px]">
                    <div className="text-[#ff5555] leading-[30px] text-[18px] font-medium">
                        ${price.toFixed(2)}
                    </div>
                    {oldPrice !== 0 && (
                        <s className={'text-[14px] font-medium block text-[#777777] leading-[30px]'}>${oldPrice.toFixed(2)}</s>)}
                </div>
                <div className="w-[555px] text-[rgba(0,0,0,0.7)] text-[14px] pb-[10px]">
                    <p>{content}</p>
                </div>
                <button className="absolute bottom-[40px] w-[120px] h-[40px] text-[12px] border-[1px] border-[#555555] text-[#555555] rounded-md hover:border-[#0083c1] hover:bg-[#0083c1] hover:text-white transition duration-300">
                    ADD TO CART
                </button>
            </div>

        </Link>
    );
}

export default SmallBoxProduct;