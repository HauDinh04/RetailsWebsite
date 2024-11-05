"use client";
import { leftNavLinks } from "@/app/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const LeftNav = () => {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  return (
    <div className=" xl:grid grid-cols-1 items-start  border  w-[250px] rounded-lg  hidden absolute top-0  ">
      <div className=" items-center gap-2 px-4 py-3 bg-bg-main text-white uppercase text-heading4-bold flex ">
        <Menu />
        all categoties
      </div>
      {leftNavLinks.map((link, index) => (
        <div
          className="group px-[11px] py-[13px] border items-center text-left  "
          key={index}
        >
          <Link
            href={link.url}
            key={link.label}
            className="text-sub-heading hover:text-bg-main transition-all 0.5s flex justify-between gap-2 items-center"
          >
            {link.label}
            {link.icons && React.createElement(link.icons)}
          </Link>
          {link.subLinks && (
            <div className=" hidden group-hover:block absolute z-10 p-4 left-full top-0 w-[875px] bg-white border shadow-lg ">
              <div className="grid grid-cols-3 ">
                {link.subLinks.map((subLink, index) => (
                  <ul key={index}>
                    <Link
                      href={subLink.url}
                      className="block px-3 py-2 hover:bg-gray-200 text-[16px] font-semibold  hover:text-bg-main transition-all 0.5s "
                    >
                      {subLink.Label}
                    </Link>
                    {subLink.subsubLinks && (
                      <div className="">
                        {subLink.subsubLinks.map((subSubLinks, index) => (
                          <Link
                            href={subSubLinks.url}
                            key={index}
                            className="grid grid-cols-1 px-3 py-1 text-[14px] font-light  hover:text-bg-main transition-all 0.5s "
                          >
                            {subSubLinks.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </ul>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="bg-white">
        {showMoreCategories && (
          <div className="transition-all duration-300 ease-in-out">
            <div className="px-[11px] py-[13px] border items-center text-left bg-white  hover:text-bg-main transition-all 0.5">
              <Link href={"/"}>Jewelry & Watches</Link>
            </div>
            <div className="px-[11px] py-[13px] border items-center text-left  bg-white  hover:text-bg-main transition-all 0.5">
              <Link href={"/"}>Bags, Holiday Supplies</Link>
            </div>
            <div className="px-[11px] py-[13px] border items-center text-left  bg-white  hover:text-bg-main transition-all 0.5">
              <Link href={"/"}>More Car Accessories</Link>
            </div>
          </div>
        )}
        <button
          className="px-[11px] py-[13px] flex text-left items-center gap-2  bg-white text-4  hover:text-bg-main transition-all 0.5"
          onClick={() => setShowMoreCategories(!showMoreCategories)}
        >
          {showMoreCategories ? <CiSquareMinus /> : <CiSquarePlus />}
          {showMoreCategories ? "Close categories" : "More categories"}
        </button>
      </div>
    </div>
  );
};

export default LeftNav;
