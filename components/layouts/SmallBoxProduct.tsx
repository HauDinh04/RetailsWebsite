import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaStar} from "react-icons/fa";

function SmallBoxProduct({id, name, rating, price, image, oldPrice, className = ''}: {
    id: string,
    name: string,
    rating: number,
    price: number,
    image: string,
    oldPrice: number,
    className?: string
}) {

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <Link href={`/product/${id}`} className={'flex gap-[10px] group w-[263px] h-[116px]' + ` ${className}`}>
            <div className="p-[5px] group-hover:border-[#0083c1] border border-solid border-[#ccc] rounded">
                <div className="relative w-[74px] h-[104px]">
                    <Image alt={name || ''} src={image} fill/>
                </div>
            </div>
            <div className="flex flex-col">
                <div
                    className="text-[rgba(0,0,0,0.7)] text-[18px] mt-[10px] mb-[5px] group-hover:text-[#0083c1]">{name}</div>
                <div className={'flex gap-[2px] text-[rgba(0,0,0,0.7)]'}>
                    {Array.from({length: fullStars}).map((_, index) => (
                        <FaStar className={'text-[12px]'} key={index}/>
                    ))}
                    {hasHalfStar && (
                        <div className={'flex'}>
                            {/* <FaStarHalfAl style={{
                                width: '12px',
                                height: '12px',
                                clipPath: 'inset(0 50% 0 0)'
                            }}/> */}
                        </div>
                    )}
                </div>
                <div className="flex gap-[10px] mt-[7px]">
                    <div className="text-[#ff5555] leading-[30px] text-[18px] font-medium">
                        ${price.toFixed(2)}
                    </div>
                    {oldPrice !== 0 && (
                        <s className={'text-[14px] font-medium block text-[#777777] leading-[30px]'}>${oldPrice.toFixed(2)}</s>)}
                </div>
            </div>

        </Link>
    );
}

export default SmallBoxProduct;