'use client';
import React from 'react';
import CategorySideBar from "@/components/pages/category/CategorySideBar";
import Link from "next/link";
import Image from 'next/image';

import LatestProduct from "@/components/pages/category/LatestProduct";
import {useState} from "react";
import {FaThLarge, FaThList} from "react-icons/fa";
import {motion} from 'framer-motion';
import BoxProduct from "@/components/pages/category/BoxProduct";
import InformativeProduct from "@/components/layouts/InformativeProduct";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Breadcrumb from "@/components/layouts/Breadcrumb";

interface DataProductAPI {
    products: {
        id: string
        name: string
        price: number
        image: string
        oldPrice: number
        rating: number
        isNew: boolean
        sale: number
        description: string
    }[],
    pagination: {
        total: number,
        totalPage: number,
        currentPage: number
    }
}

function Page() {
    const [hovered, setHovered] = useState(false);
    const [isList, setIsList] = useState(true);

    const data: DataProductAPI = {
        products: [
            {
                id: "1",
                name: "Dummy product #01",
                price: 74,
                image: '/images/product-2.jpg',
                oldPrice: 0,
                rating: 4.5,
                isNew: true,
                sale: 10,
                description: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .
                `
            },
            {
                id: "1",
                name: "Dummy product #01",
                price: 74,
                image: '/images/product-2.jpg',
                oldPrice: 0,
                rating: 4.5,
                isNew: true,
                sale: 10,
                description: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .
                `
            },
            {
                id: "1",
                name: "Dummy product #01",
                price: 74,
                image: '/images/product-2.jpg',
                oldPrice: 0,
                rating: 4.5,
                isNew: true,
                sale: 10,
                description: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .
                `
            },
            {
                id: "1",
                name: "Dummy product #01",
                price: 74,
                image: '/images/product-2.jpg',
                oldPrice: 0,
                rating: 4.5,
                isNew: true,
                sale: 10,
                description: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .
                `
            },
            {
                id: "1",
                name: "Dummy product #01",
                price: 74,
                image: '/images/product-2.jpg',
                oldPrice: 0,
                rating: 4.5,
                isNew: true,
                sale: 10,
                description: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .
                `
            },
            {
                id: "1",
                name: "Dummy product #01",
                price: 74,
                image: '/images/product-2.jpg',
                oldPrice: 0,
                rating: 4.5,
                isNew: true,
                sale: 10,
                description: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .
                `
            },
            {
                id: "1",
                name: "Dummy product #01",
                price: 74,
                image: '/images/product-2.jpg',
                oldPrice: 0,
                rating: 4.5,
                isNew: true,
                sale: 10,
                description: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .
                `
            },
            {
                id: "1",
                name: "Dummy product #01",
                price: 74,
                image: '/images/product-2.jpg',
                oldPrice: 0,
                rating: 4.5,
                isNew: true,
                sale: 10,
                description: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .
                `
            },
            {
                id: "1",
                name: "Dummy product #01",
                price: 74,
                image: '/images/product-2.jpg',
                oldPrice: 0,
                rating: 4.5,
                isNew: true,
                sale: 10,
                description: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .
                `
            }
        ],
        pagination: {
            total: 47,
            totalPage: 4,
            currentPage: 1
        }
    }

    return (
        <section className={'mb-[25px]'}>
            <Breadcrumb breadcrumbItems={[
                {
                    label: "Smartphone & Laptop",
                    link: "/categories"
                }
            ]}/>
            <div className="flex w-full  flex-col md:flex-row">
                <div className="pr-[15px] lg:flex lg:flex-col lg:gap-[30px]">
                    <CategorySideBar/>
                    <LatestProduct/>
                    <Link href={'/'}
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          className="hidden lg:block relative w-[262px] h-[313px] group"
                    >
                        <motion.div
                            initial={{clipPath: 'inset(0 50% 0 50%)'}}
                            animate={{clipPath: hovered ? 'inset(0 0 0 0)' : 'inset(0 50% 0 50%)'}}
                            transition={{duration: 0.3, ease: 'easeInOut'}}
                            className="absolute bg-[rgba(0,0,0,0.3)] w-full h-full inset-0 z-[2]"
                        />
                        <Image fill src="/images/product-1.jpg" alt="Product" className="object-cover w-full h-full"/>
                    </Link>
                </div>
                <div className="lg:pl-[15px] w-full">
                    <h3 className={"mt-[20px] mb-[10px] text-[18px] text-[#555555]"}>Featured Products</h3>
                    <div className="w-full flex gap-[30px] flex-col md:flex-row">
                        <div className="lg:max-w-[277px]">
                            <div className="relative w-[262px] h-[136px]">
                                <Image alt={''} fill src={'/images/product-1.jpg'}/>
                            </div>
                        </div>
                        <div className="lg:max-w-[555px] text-[12px] text-[#555555]">
                            <p className={'mb-[10px]'}>
                                Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla
                                venenatis. In
                                pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt
                                metus.
                                Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. Vestibulum
                                sed
                                ante. Donec sagittis euismod purus. Sed ut perspiciatis sit voluptatem accusantium
                                doloremque laudantium. Vestibulum iaculis lacinia est. Proin dictum elementum velit.
                                Fusce
                                euismod consequat ante.
                            </p>
                            <p className={'mb-[10px]'}>
                                Lorem ipsum dolor sit amet, consectetuer adipisMauris accumsan nulla vel diam. Sed in
                                lacus
                                ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod
                                in,auctor
                                ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis,
                                lobortis
                                dignissim, pulvinar ac, lorem.
                            </p>
                        </div>
                    </div>
                    <div className="mt-[20px] w-full">
                        <div
                            className="bg-none gap-[10px] md:gap-0 md:bg-[#f8f8f8] w-full h-max flex flex-col md:flex-row items-center px-[10px] justify-between
                             lg:h-[60px] rounded-[3px] border-none border md:border-solid border-[#dddddd]">
                            <div className="hidden lg:flex items-center gap-[5px]">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div onClick={() => setIsList(true)}
                                                 className={`w-[39px] border border-solid rounded-[3px]
                                                flex items-center justify-center h-[34px] ${isList ? 'bg-[#0083c1] border-[#0083c1]' : 'border-[#ccc]'}`}>
                                                <FaThLarge
                                                    className={`text-[14px] ${isList ? 'text-white' : 'text-[#333]'}`}/>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Grid</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div onClick={() => setIsList(false)}
                                                 className={`w-[39px] border border-solid rounded-[3px] flex items-center justify-center h-[34px] ${isList ? 'border-[#ccc]' : 'bg-[#0083c1] border-[#0083c1]'}`}>
                                                <FaThList
                                                    className={`text-[14px] ${isList ? 'text-[#333]' : 'text-white'}`}/>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>List</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div
                                className="bg-[#f8f8f8] w-full md:w-max text-center text-[12px] text-[#555555]
                                 h-[55px] leading-[55px] align-middle md:bg-none">
                                item 01-16 of {data.pagination.total} total
                            </div>
                            <div className="block md:hidden text-[12px] text-[#555555] leading-[55px] h-[55px]">Sort
                                By:
                            </div>
                            <div className="md:w-max flex flex-col-reverse md:flex-row w-full gap-[20px] items-center">
                                <select className="rounded-[3px] w-full bg-none md:w-auto py-[6px] px-[12px] group group-focus:border-[#66afe9]
                                flex items-center justify-center
                                     border border-solid border-[#dddddd] h-[34px] outline-0 text-[12px] text-[#555555]
                                     group md:bg-[#f8f8f8] focus:border-[#66afe9] transition-all ease-in-out duration-[1s]"
                                        defaultValue={'16'}
                                >
                                    <option value="16">16</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="75">75</option>
                                    <option value="100">100</option>
                                </select>
                                <div className="w-full md:w-max md:flex items-center gap-[5px]">
                                    <p className={'hidden md:block w-max min-w-[45px] text-[12px] text-[#555555]'}>Sort
                                        By: </p>
                                    <div className="w-full">
                                        <select defaultValue={'Default'} className="block w-full outline-0 bg-none focus:border-[#66afe9] transition-all ease-in-out duration-[1s] md:bg-[#f8f8f8]
                                        text-[12px] text-[#555555] rounded-[3px] border border-solid border-[#dddddd] py-[6px] px-[12px] md:w-[132px] h-[34px]">
                                            <option value="Default">Default</option>
                                            <option value="Name (A - Z)">Name (A - Z)</option>
                                            <option value="Name (Z - A)">Name (Z - A)</option>
                                            <option value="Price (Low > High)">Price (Low {'>'} High)</option>
                                            <option value="Price (High > Low)">Price (High {'>'} Low)</option>
                                            <option value="Rating (Highest)">Rating (Highest)</option>
                                            <option value="Rating (Lowest)">Rating (Lowest)</option>
                                            <option value="Model (A - Z)">Model (A - Z)</option>
                                            <option value="Model (Z - A)">Model (Z - A)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`w-full grid-cols-1 grid mt-[30px] gap-[30px] ${isList ? "sm:grid-cols-3 " : "grid-cols-1"}`}>
                            {isList && data && data.products.map((item, index) => (
                                <BoxProduct name={item.name} price={item.price} image={item.image} id={item.id}
                                            rating={item.rating} isNew={item.isNew} sale={item.sale}
                                            oldPrice={item.oldPrice} key={index}/>
                            ))}
                            {!isList && data && data.products.map((item, index) => (
                                <InformativeProduct key={index} oldPrice={item.oldPrice}
                                                    image={item.image}
                                                    price={item.price}
                                                    id={item.id} rating={item.rating} name={item.name}
                                                    content={item.description} DiscountPercentage={item.sale}/>
                            ))}
                        </div>
                        <div
                            className="bg-none mt-[20px] gap-[10px] md:gap-0 md:bg-[#f8f8f8] w-full h-max flex flex-col md:flex-row items-center px-[10px] justify-between
                             lg:h-[60px] rounded-[3px] border-none border md:border-solid border-[#dddddd]">
                            <div className="hidden lg:flex items-center gap-[5px]">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div onClick={() => setIsList(true)}
                                                 className={`w-[39px] border border-solid rounded-[3px]
                                                flex items-center justify-center h-[34px] ${isList ? 'bg-[#0083c1] border-[#0083c1]' : 'border-[#ccc]'}`}>
                                                <FaThLarge
                                                    className={`text-[14px] ${isList ? 'text-white' : 'text-[#333]'}`}/>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Grid</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div onClick={() => setIsList(false)}
                                                 className={`w-[39px] border border-solid rounded-[3px] flex items-center justify-center h-[34px] ${isList ? 'border-[#ccc]' : 'bg-[#0083c1] border-[#0083c1]'}`}>
                                                <FaThList
                                                    className={`text-[14px] ${isList ? 'text-[#333]' : 'text-white'}`}/>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>List</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div
                                className="bg-[#f8f8f8] w-full md:w-max text-center text-[12px] text-[#555555]
                                 h-[55px] leading-[55px] align-middle md:bg-none">
                                item 01-16 of {data.pagination.total} total
                            </div>
                            <div className="flex gap-[5px] items-center">
                                {Array.from({length: data.pagination.totalPage}, (_, index) => (
                                    <Link href={'/'}
                                          className={`text-[12px] rounded-[3px] border border-solid py-[6px] px-[12px]
                                          ${data.pagination.currentPage === index + 1 ? ' bg-[#337ab7] border-[#337ab7] text-white' : 'bg-white border-[#dddd] text-[#777777]'}`}
                                          key={index}>
                                        {index + 1}
                                    </Link>
                                ))}
                                <div
                                    className="text-[12px] bg-white rounded-[3px] border border-[#dddd] border-solid text-[#777777] py-[6px] px-[12px]">{'>'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;