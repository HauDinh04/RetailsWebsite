import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StarRating from "@/components/layouts/StarRating";

function SmallHorizontalBoxProduct({id, name, rating, price, image, oldPrice, className = ''}: {
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
            <div className="p-[5px] group-hover:border-[#0083c1] border border-solid border-[#ccc] rounded">
                <div className="relative w-[100px] h-[82px]">
                    {image ? (<Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes={'100'}
                    />) : (<Image
                        src={'/images/product-1.jpg'}
                        alt={name}
                        fill
                        sizes={'100'}
                        className="object-cover"
                    />)}
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div
                    className="text-[#222222] text-[14px] mt-[10px] mb-[5px] group-hover:text-[#0083c1]">{name}</div>
                <div className="flex gap-[10px]">
                    <div className="text-[#ff5555] leading-[30px] text-[18px] font-medium">
                        ${price.toFixed(2)}
                    </div>
                    {oldPrice && oldPrice !== 0 && (
                        <s className={'text-[14px] font-medium block text-[#777777] leading-[30px]'}>${oldPrice.toFixed(2)}</s>)}
                </div>
                {rating ? (<StarRating rating={rating}/>) : <StarRating rating={5}/>}
            </div>
        </Link>
    );
}

export default SmallHorizontalBoxProduct;