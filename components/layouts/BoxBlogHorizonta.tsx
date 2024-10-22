/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
 'use client'
import React from "react";

const BoxBlogHorizontal = ({image, label} :{image: string, label: string}) => {
  
  return (
       <div  className="relative group">
        <div className="absolute bg-white top-4 left-4 z-20 w-[50px] h-[65px] text-center rounded">
          <p className="font-bold text-heading1 mt-[15px] mb-[3px] text-[#0083c1] h-[18px]">24</p>
          <p className="text-[#0083c1] text-sub-heading mb-[10px] h-[18px]">Dec</p>
        </div>
        <a href="" className="overflow-hidden relative group">
        <div className="w-full p-[5px] rounded border border-solid border-[#dddddd]">
          <img
            src={image}
            alt=''
            className='w-full h-auto'
          />
          <p className="absolute hidden bottom-0 text-sub-heading py-[10px] group-hover:block">
            {label}
          </p>
          <span className="absolute rounded inset-0 bg-inherit transition-all duration-300 group-hover:bg-opacity-50 group-hover:bg-gray-600"></span>
        </div>
        </a>
      </div>
  
  );
};
export default BoxBlogHorizontal;

