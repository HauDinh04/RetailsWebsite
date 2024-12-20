import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StarRating from "@/components/layouts/StarRating";

function SmallHorizontalBoxProductHeader({id, name, rating, price, image, oldPrice, className = ''}: {
    id: string,
    name: string,
    rating: number,
    price: number,
    image: string,
    oldPrice: number,
    className?: string
}) {

    return (
        <Link href={`/products/${id}`} className={'flex gap-[10px] group w-[262.5px] h-[94px]' + ` ${className}`}>
            <div className="rounded">
                <div className="relative w-[85px] aspect-square">
                    <Image alt={name || ''} src={image} fill/>
                </div>
            </div>
            <div className="w-full h-max flex flex-col justify-center gap-[5px]">
                <div
                    className="text-[#828282] text-[13px] mt-[10px] group-hover:text-[#0083c1]">{name}</div>
                <StarRating className={'h-auto'} rating={rating}/>
                <div className="flex gap-[5px]">
                    <div className="text-[#333] leading-[24px] text-[13px]">
                        ${price.toFixed(2)}
                    </div>
                    {oldPrice !== 0 && (
                        <s className={'text-[14px] font-medium block text-[#777777] leading-[30px]'}>${oldPrice.toFixed(2)}</s>)}
                </div>
            </div>
        </Link>
    );
}

export default SmallHorizontalBoxProductHeader;