'use client';
import React, {useEffect} from 'react';
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
import {
    fetchCategory,
    fetchProduct,
} from "@/lib/Categories.action";
import {useAppDispatch} from "@/redux/hooks";
import {setIsLoading} from "@/redux/features/loading/loading.reducer";

function Page() {
    const dispatch = useAppDispatch();
    const [total, setTotal] = useState(0);
    const [categories, setCategories] = useState([] as CategoryType[]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const limit = 9;
    const [products, setProducts] = useState([] as ProductType[]);
    const [hovered, setHovered] = useState(false);
    const [isList, setIsList] = useState(true);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const handleNextPage = () => {
        if (page < totalPage) {
            setPage(page + 1);
            scrollToTop();
        }
    }

    const handlePrevPage = () => {
        if (page >= totalPage) {
            setPage(page - 1);
            scrollToTop();
        }
    }

    useEffect(() => {
        dispatch(setIsLoading(true));
    }, []);

    useEffect(() => {
        fetchCategory()
            .then(res => {
                if(res.message) setCategories([
                    {
                        "id": "1",
                        "name": "Smartphone & Tablets",
                        "subCategories": [
                            {
                                "id": "1",
                                "name": "Men's Watches"
                            },
                            {
                                "id": "2",
                                "name": "Women's Watches"
                            },
                            {
                                "id": "3",
                                "name": "Kids' Watches"
                            },
                            {
                                "id": "4",
                                "name": "Accessories"
                            }
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Electronics",
                        "subCategories": [
                            {
                                "id": "1",
                                "name": "Cycling"
                            },
                            {
                                "id": "2",
                                "name": "Running"
                            },
                            {
                                "id": "3",
                                "name": "Swimming"
                            },
                            {
                                "id": "4",
                                "name": "Football"
                            },
                            {
                                "id": "5",
                                "name": "Golf"
                            },
                            {
                                "id": "6",
                                "name": "Windsurfing"
                            }
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Shoes",
                        "subCategories": [
                            {
                                "id": "1",
                                "name": "Sub Categories"
                            },
                            {
                                "id": "2",
                                "name": "Sub Categories"
                            },
                            {
                                "id": "3",
                                "name": "Sub Categories"
                            },
                            {
                                "id": "4",
                                "name": "Sub Categories"
                            },
                            {
                                "id": "5",
                                "name": "Sub Categories"
                            }
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Watches",
                        "subCategories": [
                            {
                                "id": "1",
                                "name": "Men's Watches"
                            },
                            {
                                "id": "2",
                                "name": "Women's Watches"
                            },
                            {
                                "id": "3",
                                "name": "Kids' Watches"
                            },
                            {
                                "id": "4",
                                "name": "Accessories"
                            }
                        ]
                    },
                    {
                        "id": "4",
                        "name": "Jewellery",
                        "subCategories": [
                            {
                                "id": "1",
                                "name": "Sub Categories"
                            },
                            {
                                "id": "2",
                                "name": "Sub Categories"
                            },
                            {
                                "id": "3",
                                "name": "Sub Categories"
                            },
                            {
                                "id": "4",
                                "name": "Sub Categories"
                            },
                            {
                                "id": "5",
                                "name": "Sub Categories"
                            }
                        ]
                    },
                    {
                        "id": "5",
                        "name": "Health & Beauty"
                    },
                    {
                        "id": "6",
                        "name": "Kids & Babies"
                    },
                    {
                        "id": "7",
                        "name": "Sports"
                    },
                    {
                        "id": "8",
                        "name": "Home & Garden"
                    },
                    {
                        "id": "9",
                        "name": "Wines & Spirits"
                    }
                ]);
                else return res.data
            })
            .then(data => {
                console.log(data);
                setCategories(data as CategoryType[]);
            })
    }, [])

    useEffect(() => {
        fetchProduct(page)
            .then(res => {
                if (res.message) {
                    return [
                        {
                            "id": "1",
                            "category_id": "1",
                            "name": "Sunt Molup",
                            "description": "A stunning display for creative professionals.",
                            "rating": 3.5,
                            "price": 100,
                            "image": "/images/sua_tuoi_horizon_organic.webp",
                            "oldPrice": 50,
                            "discount_price": 90,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU001",
                            "images": [
                                "/images/792f11308ba03ae698ec8c42eedbff80.jpg",
                                "/images/premium_photo-1669652639337-c513cc42ead6.jpg",
                                "/images/fa8e8d_795310e1890c45d89b2ac85172faad72~mv2.webp",
                                "/images/2b054882609bbaf6728aca0368212c14.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "2",
                            "category_id": "1",
                            "name": "Sunt Molup 2",
                            "description": "A stunning display for creative professionals.",
                            "rating": 3,
                            "price": 150,
                            "image": "/images/premium_photo-1669652639337-c513cc42ead6.jpg",
                            "oldPrice": 0,
                            "discount_price": 80,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU002",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "3",
                            "category_id": "1",
                            "name": "Sunt Molup 3",
                            "description": "A stunning display for creative professionals.",
                            "rating": 2.8,
                            "price": 250,
                            "image": "/images/fa8e8d_795310e1890c45d89b2ac85172faad72~mv2.webp",
                            "oldPrice": 122,
                            "discount_price": 170,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU003",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "4",
                            "category_id": "2",
                            "name": "Sunt Molup 4",
                            "description": "A stunning display for creative professionals.",
                            "rating": 5,
                            "price": 500,
                            "image": "/images/product4.jpg",
                            "oldPrice": 400,
                            "discount_price": 30,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU004",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "5",
                            "category_id": "2",
                            "name": "Sunt Molup 5",
                            "description": "A stunning display for creative professionals.",
                            "rating": 5,
                            "price": 140,
                            "image": "/images/LibrariesandBooksinMedievalEngland3D.webp",
                            "oldPrice": 0,
                            "discount_price": 100,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU005",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "6",
                            "category_id": "2",
                            "name": "Sunt Molup 6",
                            "description": "A stunning display for creative professionals.",
                            "rating": 5,
                            "price": 180,
                            "image": "/images/782c93e915e444b8e6929d407d40e93c.jpg",
                            "oldPrice": 120,
                            "discount_price": 120,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU006",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "7",
                            "category_id": "3",
                            "name": "Sunt Molup 7",
                            "description": "A stunning display for creative professionals.",
                            "rating": 3.4,
                            "price": 160,
                            "image": "/images/2b054882609bbaf6728aca0368212c14.jpg",
                            "oldPrice": 0,
                            "discount_price": 120,
                            "in_stock": false,
                            "isNew": true,
                            "sku": "SKU007",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "8",
                            "category_id": "3",
                            "name": "Sunt Molup 8",
                            "description": "A stunning display for creative professionals.",
                            "rating": 3.9,
                            "price": 360,
                            "image": "/images/792f11308ba03ae698ec8c42eedbff80.jpg",
                            "oldPrice": 0,
                            "discount_price": 320,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU008",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "9",
                            "category_id": "3",
                            "name": "Sunt Molup 9",
                            "description": "A stunning display for creative professionals.",
                            "rating": 4.5,
                            "price": 450,
                            "image": "/images/e16e647db7a70739f44b227dbc51b027.jpg",
                            "oldPrice": 0,
                            "discount_price": 360,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU009",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                    ]
                } else {
                    return res.data;
                }
            })
            .then((res: { data: [], pagination: { total: number, last_page: number } }) => {
                const array = res.data.slice(0, limit);
                setProducts(array as ProductType[]);
                setTotal(res.pagination.total);
                dispatch(setIsLoading(false));
                setTotalPage(res.pagination.last_page);
            });
    }, [page, setPage]);

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
                    {categories && categories.length > 0 ? (
                        <CategorySideBar data={categories}/>
                    ) : (
                        <div className="text-heading2">Loading ...</div>
                    )}
                    <div className="mt-[30px] xl:mt-0">
                        <LatestProduct/>
                    </div>
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
                        <Image fill sizes={'100'} src="/images/65a10b505e3001c955109b7f1906a314.jpg" alt="Product"
                               className="object-cover w-full h-full"/>
                    </Link>
                </div>
                <div className="lg:pl-[15px] w-full">
                    <h3 className={"mt-[20px] mb-[10px] text-[18px] text-[#555555]"}>Featured Products</h3>
                    <div className="w-full flex gap-[30px] flex-col md:flex-row">
                        <div className="lg:max-w-[277px]">
                            <div className="relative w-[262px] h-[136px]">
                                <Image alt={''} sizes={'100'} fill
                                       src={'/images/2fd8c9b3a502e65586d008fe1a2456ce.jpg'}/>
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
                                item 01-09 of {total} total
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
                            {isList && products && products.map((item, index) => (
                                <BoxProduct name={item.name} price={item.price} image={item.image} id={item.id}
                                            rating={item.rating} isNew={item.isNew} discount_price={item.discount_price}
                                            oldPrice={item.oldPrice} key={index}/>
                            ))}
                            {!isList && products && products.map((item, index) => (
                                <InformativeProduct key={index} oldPrice={item.oldPrice}
                                                    image={item.image}
                                                    price={item.price}
                                                    id={item.id} rating={item.rating} name={item.name}
                                                    content={item.description} discount_price={item.discount_price}/>
                            ))}
                            {isList && products && products.length === 0 && (
                                <div className={'text-center col-span-3 text-heading2'}>Loading ...</div>
                            )}
                            {!isList && products && products.length === 0 && (
                                <div className={'text-center col-span-3 text-heading2'}>Loading ...</div>
                            )}
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
                                item 01-09 of {total} total
                            </div>
                            <div className="flex gap-[5px] items-center">
                                <div onClick={handlePrevPage}
                                     className={`text-[12px] bg-white cursor-pointer
                                     rounded-[3px] border border-[#dddd] border-solid
                                      text-[#777777] py-[6px] px-[12px] ${page >= Math.ceil(total / limit) ? "hover:bg-[#eee]" : "cursor-not-allowed"}`}>{'<'}</div>
                                {Array.from({length: Math.ceil(total / limit)}, (_, index) => (
                                    <Link href={'/'}
                                          className={`text-[12px] rounded-[3px] border border-solid py-[6px] px-[12px]
                                          ${page === index + 1 ? ' bg-[#337ab7] border-[#337ab7] text-white' : `bg-white border-[#dddd]
                                           hover:bg-[#eee] text-[#777777]`}`}
                                          key={index} onClick={(e) => {
                                        e.preventDefault();
                                        setPage(index + 1);
                                        scrollToTop();
                                    }}>
                                        {index + 1}
                                    </Link>
                                ))}
                                <div onClick={handleNextPage}
                                     className={`text-[12px] bg-white cursor-pointer
                                     rounded-[3px] border border-[#dddd] border-solid
                                      text-[#777777] py-[6px] px-[12px] ${page < Math.ceil(total / limit) ? "hover:bg-[#eee]" : "cursor-not-allowed"}`}>{'>'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;