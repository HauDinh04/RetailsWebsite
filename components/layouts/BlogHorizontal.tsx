import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaComments, FaAngleDoubleRight, FaFacebookSquare, FaTwitterSquare, FaSkype } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";

function BlogHorizontal({id, title, image, content, postTime, countComments, className = ''}: {
    id: string,
    title: string,
    image: string,
    content: string,
    postTime: string,
    countComments: number,
    className?: string
}) {
    const [day, month] = postTime.split("/").map((item) => parseInt(item));

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[month - 1];

    return (
        <Link href={`/product/${id}`} className={'flex group w-[382px] h-[260px]' + ` ${className}`}>
            <div className="p-[5px] group-hover:border-[#0083c1] border border-solid border-[#ccc] rounded">
                <div className="relative w-[372px] h-[248px]">
                    <Image alt={title || ''} src={image} fill />
                    <div className="absolute top-[10px] left-[10px] w-[50px] h-[65px] bg-[#fff] flex flex-col items-center justify-center">
                        <p className="text-[#0083c1] text-[20px] font-extrabold">
                        {day}
                        </p>
                        <p className="text-[#0083c1] text-[12px]">
                        {monthName}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-[11px] pl-[23px] w-[458px] h-[242px]">
                <div className="relative  text-[rgba(0,0,0,0.7)] text-[18px] mt-[10px] mb-[10px] group-hover:text-[#0083c1] whitespace-nowrap overflow-hidden text-ellipsis"> {title} </div>
                <div className="w-[435px] text-[rgba(0,0,0,0.7)] text-[14px] pb-[10px]">
                    <p>{content}</p>
                </div>
                <div className="flex justify-between pb-[22px] border-b-2 border-[#f0f0f0]">
                    <div className="flex items-center">
                        <FaComments />
                        <div className="text-[14px] ml-[5px]">
                            {countComments}
                        </div>
                    </div>
                    <div className="flex text-[#0083c1] text-[12px] items-center">
                        View more
                        <div className="ml-1">
                            <FaAngleDoubleRight />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-[20px]">
                    <div className="flex items-center text-[14px]">
                        Share this:
                    </div>
                    <div className="flex text-[#0083c1] text-[27px] items-center">
                        <div className="ml-1 text-[#1d9ffa]">
                            <FaFacebookSquare />
                        </div>
                        <div className="ml-1 text-[#0000CD]">
                            <FaTwitterSquare />
                        </div>
                        <div className="ml-1 text-[#DC143C]">
                            <FaSquareGooglePlus />
                        </div>
                        <div className="ml-1">
                            <FaSkype />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BlogHorizontal;