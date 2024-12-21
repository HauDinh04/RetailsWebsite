"use client";
import LeftNav from "@/components/layouts/LeftNav";
import {Swiper, SwiperSlide} from "swiper/react";
import React, {useEffect, useState} from "react";
import Notice from "@/components/layouts/Notice";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {TbPigMoney} from "react-icons/tb";
import {IoRocketOutline} from "react-icons/io5";
import FeatureProduct from "@/components/layouts/FeatureProduct";
import Slideshow from "@/components/layouts/SlideShow";
import {CountDownProduct} from "@/components/layouts/CountDownProduct";
import Image from "next/image";
import {FreeMode, Navigation, Pagination} from "swiper/modules";
import Link from "next/link";
import Slide from "@/components/layouts/Slide";
import {GrFormPrevious} from "react-icons/gr";
import {MdOutlineNavigateNext} from "react-icons/md";
import {fetchBanners, fetchProducts} from "@/lib/Home.action";
import {fetchBlogPosts} from "@/lib/Blog.action";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const [isShow, setIsShow] = useState(true);

    const [banner, setBanner] = useState([] as Banner[]);

    const [blogPosts, setBlogPosts] = useState([] as Post[]);

    const [isBlogPostsError, setIsBlogPostsError] = useState(true);

    const [products, setProducts] = useState([] as ProductType[]);

    const [isProductLoading, setIsProductLoading] = useState(true);

    useEffect(() => {
        fetchBanners()
            .then(res => res.data)
            .then(data => {
                setBanner(data as Banner[]);
            })
    }, []);

    useEffect(() => {
        fetchBlogPosts()
            .then(res => {
                if (res.massage) {
                    setIsBlogPostsError(true);
                } else return res.data;
            })
            .then(data => {
                setIsBlogPostsError(false);
                setBlogPosts(data as Post[]);
                setIsProductLoading(false);
            })
    }, []);

    useEffect(() => {
        fetchProducts()
            .then(res => {
                if (res.massage) {
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
                        {
                            "id": "10",
                            "category_id": "3",
                            "name": "Sunt Molup 10",
                            "description": "A stunning display for creative professionals.",
                            "rating": 4,
                            "price": 200,
                            "image": "/images/f6a55f4499aa962b7559983fdddbb0cf.jpg",
                            "oldPrice": 0,
                            "discount_price": 150,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU0010",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        }
                    ];
                } else return res.data;
            })
            .then(res => {
                if (res.length > 0) setProducts(res as ProductType[]);
                setProducts(res.data as ProductType[]);
            })
    }, []);

    const handleDetailPost = (id: number) => {
        router.push(`/blog/${id}`);
    }

    return (
        <>
            <div className="items-center justify-center py-[10px] mb-4 ">
                <div className=" mx-[-15px] items-center w-full  flex justify-between  relative xl:h-[430px]">
                    <div className="px-[15px]">
                        <LeftNav/>
                    </div>
                    <Slideshow data={banner}/>
                </div>
                <div className="mt-4">
                    <div className="py-[10px] grid grid-cols-1 md:grid-cols-3  ">
                        <div className="flex border justify-center items-center sm:justify-start p-5">
                            <IoRocketOutline className="text-[50px] opacity-60"/>
                            <div className="ml-4">
                                <h2 className="uppercase text-sub-heading-bold">
                                    free shipping & return{" "}
                                </h2>
                                <span className="text-info text-price-2">
                  Free shipping on orders $49
                </span>
                            </div>
                        </div>
                        <div className="flex justify-center border items-center sm:justify-start p-5">
                            <TbPigMoney className="text-[50px] opacity-60"/>
                            <div className="ml-4">
                                <h2 className="uppercase text-sub-heading-bold">
                                    money guarantee
                                </h2>
                                <span className="text-info text-price-2">
                  30 days money back guarantee
                </span>
                            </div>
                        </div>
                        <div className="flex border justify-center items-center sm:justify-start p-5">
                            <TfiHeadphoneAlt className="text-[50px] opacity-60"/>
                            <div className="ml-4">
                                <h2 className="uppercase text-sub-heading-bold">
                                    online support
                                </h2>
                                <span className="text-info text-price-2">
                  We support online 24/24 on day
                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center justify-between">
                        <div className="pt-3">
                            <h3 className="text-heading2">Deals of the Week</h3>
                        </div>
                        <div className="flex flex-row">
                            <div
                                className={`w-[30px] h-[30px] bg-[#f2f2f2] group hover:bg-bg-main flex items-center justify-center rounded button-prev-deal-p`}>
                                <GrFormPrevious className="text-[#333] group-hover:text-white-1 w-[16px] h-[16px]"/>
                            </div>
                            <div
                                className={`bg-[#f2f2f2] group hover:bg-bg-main w-[30px] h-[30px] flex items-center justify-center rounded ml-[5px] button-next-deal-p`}>
                                <MdOutlineNavigateNext className="text-[#333] group-hover:text-white-1"/>
                            </div>
                        </div>
                    </div>
                    <div className="pb-3">
                        <hr className="border-dashed border border-[#f2f2f2]"/>
                        <hr className="border-dashed border border-[#f2f2f2]"/>
                        <hr className="border-dashed border border-[#f2f2f2]"/>
                    </div>
                    <div className="">
                        {isProductLoading && (
                            <div className={'text-heading1-bold text-center'}>Loading...</div>
                        )}
                        <div className="custom-pagination hidden"></div>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={10}
                            loop={true}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                el: '.custom-pagination',
                            }}
                            navigation={{
                                nextEl: ".button-next-deal-p",
                                prevEl: ".button-prev-deal-p",
                            }}
                            modules={[FreeMode, Pagination, Navigation]}
                            className="mySwiper h-auto w-full"
                            breakpoints={{
                                375: {
                                    slidesPerView: 1, // Màn hình nhỏ vẫn 2 slides
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2, // Màn hình lớn vẫn 2 slides
                                    spaceBetween: 15,
                                },
                            }}
                        >
                            {products.map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    className={""}
                                >
                                    <CountDownProduct
                                        thumbnail_url={item.thumbnail?.path || '/images/product-1.jpg'}
                                        name={item.name}
                                        description={item.short_description}
                                        price={item.price}
                                        in_stock={true}
                                        sku={`sku_${index}${index + 2}`}
                                        images={["/images/product-1.jpg"]}
                                        star={5}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <section className="hidden lg:block mt-10">
                    <div className="grid grid-cols-2 gap-4 ">
                        <Link href={"/"}>
                            <div className="relative group overflow-hidden w-full h-[200px]">
                                <Image
                                    src={"/banner/banner1.jpg"}
                                    alt="banner"
                                    fill sizes={'100'}
                                    className="transition-transform duration-500 group-hover:scale-105 object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                            </div>
                        </Link>
                        <Link href={"/"}>
                            <div className="relative group overflow-hidden w-full h-[200px]">
                                <Image
                                    src={"/banner/banner1.jpg"}
                                    alt="banner"
                                    fill sizes={'100'}
                                    className="transition-transform object-cover duration-500 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <Link href={"/"}>
                            <div className="relative group overflow-hidden w-[274px] h-[400px]">
                                <Image
                                    src={"/banner/banner2.jpg"}
                                    alt="banner"
                                    fill sizes={'100'}
                                    className="transition-transform object-cover duration-500 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                            </div>
                        </Link>
                        <Link href={"/"}>
                            <div className="relative group overflow-hidden w-[560px] h-[400px]">
                                <Image
                                    src={"/banner/banner3.jpg"}
                                    alt="banner"
                                    fill sizes={'100'}
                                    className="transition-transform object-cover duration-500 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                            </div>
                        </Link>
                        <Link href={"/"}>
                            <div className="relative group overflow-hidden w-[274px] h-[400px]">
                                <Image
                                    src={"/banner/banner2.jpg"}
                                    alt="banner"
                                    fill sizes={'100'}
                                    className="transition-transform object-cover duration-500 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent bg-[#45474B] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                            </div>
                        </Link>
                    </div>
                </section>

                <FeatureProduct data={products}/>
                <div className="">
                    <div className="flex items-center justify-between">
                        <div className="py-3">
                            <h3 className="text-heading2">Latest Blog</h3>
                            <hr className="border-dashed border border-[#f2f2f2]"/>
                            <hr className="border-dashed border border-[#f2f2f2]"/>
                            <hr className="border-dashed border border-[#f2f2f2]"/>
                        </div>
                        <div className="flex flex-row">
                            <div
                                className={`w-[30px] h-[30px] bg-[#f2f2f2] group hover:bg-bg-main flex items-center justify-center rounded button-prev-blog-p`}>
                                <GrFormPrevious className="text-[#333] group-hover:text-white-1 w-[16px] h-[16px]"/>
                            </div>
                            <div
                                className={`bg-[#f2f2f2] group hover:bg-bg-main w-[30px] h-[30px] flex items-center justify-center rounded ml-[5px] button-next-blog-p`}>
                                <MdOutlineNavigateNext className="text-[#333] group-hover:text-white-1"/>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        freeMode={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                        }}
                        navigation={{
                            nextEl: ".button-next-blog-p",
                            prevEl: ".button-prev-blog-p",
                        }}
                        modules={[FreeMode, Navigation, Pagination]}
                        className="mySwiper h-auto"
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 4,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 4,
                            },
                        }}
                    >
                        {isBlogPostsError && [...Array(10)].map((_, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex items-center justify-center "
                            >
                                <div className="w-full h-auto relative group p-1 border rounded-sm">
                                    <Image
                                        src="/images/blog-3.jpg"
                                        alt="images blogs"
                                        width={390}
                                        height={260}
                                        className="object-cover hover:cursor-pointer"
                                    />
                                    <div
                                        className="absolute top-3 rounded-[3px] left-4 w-[56px] h-[65px] bg-white items-center flex flex-col pointer-events-none z-10">
                                        <p className="text-[24px] font-bold leading-4 mt-[15px] mb-[3px] text-[#0083C1]">
                                            24
                                        </p>
                                        <p className="text-[12px] mb-[10px] mt-1 text-[#0083C1] leading-4">
                                            Dec
                                        </p>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-600 ease-in-out">
                                        <p className="text-white text-sm px-4 py-2 absolute bottom-1 ">
                                            Lorem Ipsum is simply dummy text of the printing.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {!isBlogPostsError && blogPosts.length > 0 && blogPosts.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex items-center justify-center"
                            >
                                <div onClick={() => handleDetailPost(item.id)}
                                     className="w-full h-auto relative group p-1 border rounded-sm xl:min-h-[214px] cursor-pointer">
                                    <Image
                                        src={item.thumbnail}
                                        alt="images blogs"
                                        width={390}
                                        height={260}
                                        className="object-cover hover:cursor-pointer"
                                    />
                                    <div
                                        className="absolute top-3 rounded-[3px] left-4 w-[56px] h-[65px] bg-white items-center flex flex-col pointer-events-none z-10">
                                        <p className="text-[24px] font-bold leading-4 mt-[15px] mb-[3px] text-[#0083C1]">
                                            24
                                        </p>
                                        <p className="text-[12px] mb-[10px] mt-1 text-[#0083C1] leading-4">
                                            Dec
                                        </p>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-600 ease-in-out">
                                        <p className="text-white text-sm px-4 py-2 absolute bottom-1 ">
                                            {item.content.length > 50 ? item.content.substring(0, 50) : item.content}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <section className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 px-[-15px]">
                    <div className="">
                        <Slide title="New Arrivals" nextBtn="nex" prevBtn="pre"/>
                    </div>
                    <div className="">
                        <Slide title="Bestsellers" nextBtn="next" prevBtn="prevt"/>
                    </div>

                    <div className="">
                        <Slide title="Featured" nextBtn="next1" prevBtn="prev1"/>
                    </div>
                    <div className="">
                        <Slide title="Hot Sale" nextBtn="next2" prevBtn="prev2"/>
                    </div>
                </section>
                <div className="">
                    <div className="flex items-center justify-between">
                        <div className="py-3">
                            <h3 className="text-heading2">Featured brands</h3>
                            <hr className="border-dashed border border-[#f2f2f2]"/>
                            <hr className="border-dashed border border-[#f2f2f2]"/>
                            <hr className="border-dashed border border-[#f2f2f2]"/>
                        </div>
                        <div className="flex flex-row">
                            <div
                                className={`w-[30px] h-[30px] bg-[#f2f2f2] group hover:bg-bg-main flex items-center justify-center rounded button-prev-featured-p`}>
                                <GrFormPrevious className="text-[#333] group-hover:text-white-1 w-[16px] h-[16px]"/>
                            </div>
                            <div
                                className={`bg-[#f2f2f2] group hover:bg-bg-main w-[30px] h-[30px] flex items-center justify-center rounded ml-[5px] button-next-featured-p`}>
                                <MdOutlineNavigateNext className="text-[#333] group-hover:text-white-1"/>
                            </div>
                        </div>
                    </div>
                    <div className="custom-pagination hidden"></div>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={10}
                        loop={true}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                        }}
                        navigation={{
                            nextEl: ".button-next-featured-p",
                            prevEl: ".button-prev-featured-p",
                        }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper h-auto w-full"
                        breakpoints={{
                            375: {
                                slidesPerView: 2,
                                spaceBetween: 2,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 2,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 5,
                            },
                        }}
                    >
                        {Array.from({length: 10}).map((_, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex items-center justify-center border"
                            >
                                <div className="w-full relative">
                                    <Image
                                        src="/images/170x200.jpg"
                                        alt="images blogs"
                                        width={170}
                                        height={100}
                                        className=" transition-transform duration-500 hover:scale-x-110"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Notice isShow={isShow} setIsShow={setIsShow}/>
        </>
    );
}
