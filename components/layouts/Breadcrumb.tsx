import React from 'react';
import Link from "next/link";
import {FaAngleRight} from "react-icons/fa6";

interface BreadcrumbType {
    breadcrumbItems: {
        label: string,
        link: string
    }[]
}

function Breadcrumb({breadcrumbItems}: BreadcrumbType) {
    return (
        <div className="flex items-center my-[20px] text-[#777777] text-[14px]">
            <div className="flex items-center group w-max">
                <Link href={'/'} className={'group-hover:text-[#0083c1]'}>Home</Link>
                <div className="px-[10px]">
                    <FaAngleRight className={'group-hover:text-[#0083c1]  block text-[10px] text-[#777777]'}/>
                </div>
            </div>
            {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center group w-max">
                    <Link href={item.link} className={'group-hover:text-[#0083c1]'}>{item.label}</Link>
                    {index < breadcrumbItems.length - 1 && (
                        <div className="px-[10px]">
                            <FaAngleRight className={'group-hover:text-[#0083c1]  block text-[10px] text-[#777777]'}/>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Breadcrumb;