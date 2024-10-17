'use client';
import React, {useState} from 'react';
import Link from "next/link";
import {FaRegPlusSquare} from "react-icons/fa";
import {motion} from "framer-motion";
import {FaAngleRight, FaRegSquareMinus} from "react-icons/fa6";

interface categories {
    name: string;
    subCategories?: {
        name: string;
    }[]
}

function CategorySideBar() {
    const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedCategory(expandedCategory === index ? null : index);
    };
    const categories: categories[] = [
        {
            name: 'Smartphone & Tablets',
            subCategories: [
                {
                    name: "Men's Watches"
                },
                {
                    name: "Woman's Watches",
                },
                {
                    name: "Kid's Watches",
                },
                {
                    name: "Accessories",
                }
            ]
        },
        {
            name: 'Electronics',
            subCategories: [
                {
                    name: "Cycling"
                },
                {
                    name: "Running"
                },
                {
                    name: "Swimming"
                },
                {
                    name: "Football"
                },
                {
                    name: "Golf"
                },
                {
                    name: "Windsurfing"
                },
            ]
        },
        {
            name: 'Shoes',
            subCategories: [
                {
                    name: "Sub Categories"
                },
                {
                    name: "Sub Categories"
                },
                {
                    name: "Sub Categories"
                },
                {
                    name: "Sub Categories"
                },
                {
                    name: "Sub Categories"
                }
            ]
        },
        {
            name: 'Watches',
            subCategories: [
                {
                    name: "Men's Watches",
                },
                {
                    name: "Woman's Watches",
                },
                {
                    name: "Kids' Watches",
                },
                {
                    name: "Accessories",
                }
            ]
        },
        {
            name: 'Jewellery'
        },
        {
            name: "Health & Beauty"
        },
        {
            name: "Kids & Babies"
        },
        {
            name: "Sports"
        },
        {
            name: "Home & Garden",
        },
        {
            name: "Wines & Spirits",
        }
    ]
    return (
        <div className={'sm:w-full mb-[30px]'}>
            <div className="text-[22px] text-[#222222] mb-[10px]">Categories</div>
            <div className="rounded-[3px] w-full mt-[10px] border border-solid border-[#dddddd]">
                {categories.map((item, index) => (
                    <div key={index} className={'sm:w-full'}>
                        <div
                            className={'flex w-full hover:text-[#0083c1] hover:bg-[#fff] justify-between text-[14px] pr-[15px] items-center text-[#444444] border-b border-solid ' +
                                'border-[#dddddd] py-[10px] pl-[20px] w-[260px] bg-[#f8f8f8] h-[39px]'}>
                            <Link href={'/category'} className="">
                                {item.name}
                            </Link>
                            {expandedCategory !== index && item.subCategories && (
                                <div className="w-[30px] h-[30px] flex items-center justify-center group"
                                     onClick={() => toggleExpand(index)}>
                                    <FaRegPlusSquare className={'text-center group-hover:text-[#0083c1] text-[12px]'}/>
                                </div>
                            )}
                            {expandedCategory === index && (
                                <div className="w-[30px] h-[30px] flex items-center justify-center group"
                                     onClick={() => toggleExpand(index)}>
                                    <FaRegSquareMinus
                                        className={'text-center text-[#0083c1] group-hover:text-[#0083c1] text-[12px]'}/>
                                </div>
                            )}
                        </div>
                        {item.subCategories && (
                            <motion.div
                                initial={{height: 0, opacity: 0}}
                                animate={
                                    expandedCategory === index
                                        ? {height: 'auto', opacity: 1}
                                        : {height: 0, opacity: 0}
                                }
                                transition={{duration: 0.3}}
                                className="overflow-hidden flex flex-col"
                            >

                                {item.subCategories.map((subItem, subIndex) => (
                                    <div key={subIndex}
                                         className={'px-[10px] group hover:bg-[#fff] min-h-[28px] bg-[#f8f8f8]'}>
                                        <Link href={'/category'}
                                              className="group-hover:text-[#0083c1] transition-all ease-in-out duration-300 flex
                                               items-center gap-[5px] text-[14px] pl-[20px] py-[5px] ">
                                            <FaAngleRight
                                                className={'hidden text-[14px] transition-all ease-in duration-700 text-[#0083c1] group-hover:block'}/>
                                            <p>{subItem.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategorySideBar;