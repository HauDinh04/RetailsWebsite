'use client';
import {
    FaHeart,
    FaExchangeAlt,
    FaChevronUp,
    FaChevronDown,
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaSkype
} from 'react-icons/fa';
import {FaXmark} from 'react-icons/fa6';
import Image from 'next/image';
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import React, {useEffect, useState} from 'react';
import ImageZoomIn from './ImageZoomIn';
import StarRating from '@/components/layouts/StarRating';
import {MdClose} from "react-icons/md";
import Link from "next/link";
import {motion} from "framer-motion";

type ProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    thumbnail_url: string;
    images: string[];
    name: string;
    description: string;
    price: number;
    discount_price: number;
    star: number;
    in_stock: boolean;
    sku: string;
};

export const ProductModal = ({
                                 isOpen,
                                 onClose,
                                 thumbnail_url,
                                 images,
                                 name,
                                 description,
                                 price,
                                 discount_price,
                                 star,
                                 in_stock,
                                 sku
                             }: ProductModalProps) => {

    const [isShowAddCart, setIsShowAddCart] = useState(false);
    const [isShowWishList, setIsShowWishList] = useState(false);
    const [isShowCompare, setIsShowCompare] = useState(false);

    const [quantity, setQuantity] = useState(1);
    const [currentThumbnail, setThumbnails] = useState(thumbnail_url);

    useEffect(() => {
        setThumbnails(thumbnail_url);
    }, [thumbnail_url]);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!isNaN(Number(value)) && Number(value) > 0) {
            setQuantity(Number(value));
        }
    };

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    useEffect(() => {
        if (isShowAddCart) setTimeout(() => setIsShowAddCart(false), 3000);
    }, [isShowAddCart]);

    useEffect(() => {
        if (isShowWishList) setTimeout(() => setIsShowWishList(false), 3000);
    }, [isShowWishList]);

    useEffect(() => {
        if (isShowCompare) setTimeout(() => setIsShowCompare(false), 3000);
    }, [isShowCompare])

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.8)] bg-opacity-75 flex justify-center z-50'>
            <div className='bg-white p-[20px] mt-[40px] xl:h-[825px] max-w-[1000px] w-full relative'>
                <button className='text-gray-600 hover:text-gray-900 absolute right-5' onClick={onClose}>
                    <FaXmark/>
                </button>
                <div className='grid grid-cols-2 '>
                    <div className={'px-[15px] '}>
                        <ImageZoomIn image={currentThumbnail} scale={1.3}></ImageZoomIn>
                        <Carousel className='mt-5'>
                            <CarouselContent>
                                <CarouselItem className='basis-1/4'
                                              onClick={() => setThumbnails(thumbnail_url)}>
                                    <Image
                                        src={thumbnail_url}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        style={{
                                            width: '100%',
                                            height: 'auto'
                                        }}
                                        className={`w-full aspect-[3/4] object-contain p-1 border ${
                                            currentThumbnail == thumbnail_url ? 'border-blue-700' : ''
                                        }`}
                                    />
                                </CarouselItem>
                                {images.map((image, index) => {
                                    return (
                                        <CarouselItem className='basis-1/4' key={index}
                                                      onClick={() => setThumbnails(image)}>
                                            <Image
                                                src={image}
                                                alt=''
                                                width={0}
                                                height={0}
                                                sizes='100vw'
                                                style={{
                                                    width: '100%',
                                                    height: 'auto'
                                                }}
                                                className={`w-full aspect-[3/4] object-contain p-1 border ${
                                                    currentThumbnail == image ? 'border-blue-700' : ''
                                                }`}
                                            />
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <div className='px-[15px] text-[12px]'>
                        <div className='text-[24px]'>{name}</div>
                        <StarRating className={'my-8'} rating={star}/>
                        <div className='text-gray-700 text-[13px]'>{description}</div>
                        <div className='font-bold mt-7'>
                            Availability:{' '}
                            {in_stock ? (
                                <span className='text-green-500'>In Stock</span>
                            ) : (
                                <span className='text-red-400'>Out Of Stock</span>
                            )}
                        </div>
                        <div className='font-bold mt-5'>SKU: {sku}</div>
                        <div className='flex gap-2 mt-4 items-end'>
                            <div className='text-red-500 font-bold text-[30px]'>${price.toFixed(2)}</div>
                            <div
                                className='line-through text-[18px] text-gray-500 mb-2'>${discount_price.toFixed(2)}</div>
                        </div>

                        <div className='flex items-center justify-between mb-10 mt-4'>
                            <div className='text-[14px] font-bold text-gray-600 flex items-center gap-3'>
                                Qtl:
                                <div className='border rounded-md w-[80px] p-2 flex divide-x'>
                                    <input
                                        type='text'
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className='w-full outline-none text-[12px] font-normal ms-2'
                                    />
                                    <div className='px-1 ps-2'>
                                        <FaChevronUp className='text-[8px] mb-1 cursor-pointer'
                                                     onClick={handleIncrement}/>
                                        <hr/>
                                        <FaChevronDown className='text-[8px] mt-1 cursor-pointer'
                                                       onClick={handleDecrement}/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div onClick={() => setIsShowAddCart(true)}
                                     className='text-[12px] border h-[40px] flex items-center px-5 w-fit rounded-md cursor-pointer bg-[#0083c1] hover:bg-gray-600 text-white'>
                                    ADD TO CART
                                </div>
                                <div onClick={() => setIsShowWishList(true)}
                                     className='bg-white flex justify-center items-center rounded-sm w-[40px] h-[40px] transform border cursor-pointer'>
                                    <FaHeart/>
                                </div>
                                <div onClick={() => setIsShowCompare(true)}
                                     className='bg-white flex justify-center items-center rounded-sm w-[40px] h-[40px] transform border cursor-pointer'>
                                    <FaExchangeAlt/>
                                </div>
                            </div>
                        </div>

                        <hr/>

                        <div className='mt-[20px] flex justify-between items-center'>
                            <div>Share This:</div>
                            <div className='flex gap-2'>
                                <div
                                    className='h-[27px] w-[27px] bg-sky-400 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer'>
                                    <FaFacebookF/>
                                </div>
                                <div
                                    className='h-[27px] w-[27px] bg-blue-800 hover:bg-blue-300 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer'>
                                    <FaTwitter/>
                                </div>
                                <div
                                    className='h-[27px] w-[27px] bg-red-500 hover:bg-red-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer'>
                                    <FaGooglePlusG/>
                                </div>
                                <div
                                    className='h-[27px] w-[27px] bg-sky-600 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer'>
                                    <FaSkype/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isShowAddCart && (
                    <motion.div initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.3}}
                                className={`absolute shadow-xl top-0 right-0 bg-[rgba(241,241,241,0.97)] m-[10px] p-[10px] rounded-[3px] 
                            w-3/4 h-max xl:w-[250px] flex flex-col gap-[10px]`}>
                        <div className="flex justify-between items-center">
                            <div className="text-[12px] text-[#333333] font-bold">Product added to cart</div>
                            <div onClick={() => setIsShowAddCart(false)}
                                 className="rounded-[3px] bg-[#999] cursor-pointer hover:bg-[#777] py-[4px] px-[6px]">
                                <MdClose className={'text-white  text-[14px] leading-[18px]'}/>
                            </div>
                        </div>
                        <div className="flex gap-[15px]">
                            <div className="relative w-[50px] aspect-square">
                                <Image src={'/images/2b054882609bbaf6728aca0368212c14.jpg'} fill sizes={'100'}
                                       alt={'product'}
                                       className={'object-cover'}/>
                            </div>
                            <div className="flex-1 text-[12px] leading-[20px]">
                                <Link href={'/products/1'}
                                      className={'text-[#0083c1]'}>{`Apple Cinema 30"`}</Link> added
                                to <Link
                                className={'text-[#0083c1]'} href="/cart">shopping cart</Link>!
                            </div>
                        </div>
                    </motion.div>
                )}
                {isShowWishList && (
                    <motion.div initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.3}}
                                className={`absolute shadow-xl top-0 right-0 bg-[rgba(241,241,241,0.97)] m-[10px] p-[10px] rounded-[3px] 
                        w-3/4 h-max xl:w-[250px] flex flex-col gap-[10px]`}>
                        <div className="flex justify-between items-center">
                            <div className="text-[12px] text-[#333333] font-bold">Product added to Wishlist</div>
                            <div onClick={() => setIsShowWishList(false)}
                                 className="rounded-[3px] bg-[#999] cursor-pointer hover:bg-[#777] py-[4px] px-[6px]">
                                <MdClose className={'text-white text-[14px] leading-[18px]'}/>
                            </div>
                        </div>
                        <div className="flex gap-[15px]">
                            <div className="relative w-[50px] aspect-square">
                                <Image src={'/images/2b054882609bbaf6728aca0368212c14.jpg'} fill sizes={'100'}
                                       alt={'product'}
                                       className={'object-cover'}/>
                            </div>
                            <div className="flex-1 text-[12px] leading-[20px]">
                                You must <Link className={'text-[#0083c1]'} href="/compare">login</Link> to save <Link
                                href={'/products/1'} className={'text-[#0083c1]'}>{`Apple Cinema 30"`}</Link> to
                                your <Link
                                className={'text-[#0083c1]'} href="/compare">wish list</Link>!
                            </div>
                        </div>
                    </motion.div>
                )}
                {isShowCompare && (
                    <motion.div initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.3}}
                                className={`absolute shadow-xl top-0 right-0 bg-[rgba(241,241,241,0.97)] m-[10px] p-[10px] rounded-[3px] 
                        w-3/4 h-max xl:w-[250px] flex flex-col gap-[10px]`}>
                        <div className="flex justify-between items-center">
                            <div className="text-[12px] text-[#333333] font-bold">Product added to compare</div>
                            <div onClick={() => setIsShowCompare(false)}
                                 className="rounded-[3px] bg-[#999] cursor-pointer hover:bg-[#777] py-[4px] px-[6px]">
                                <MdClose className={'text-white text-[14px] leading-[18px]'}/>
                            </div>
                        </div>
                        <div className="flex gap-[15px]">
                            <div className="relative w-[50px] aspect-square">
                                <Image src={'/images/2b054882609bbaf6728aca0368212c14.jpg'} fill sizes={'100'}
                                       alt={'product'}
                                       className={'object-cover'}/>
                            </div>
                            <div className="flex-1 text-[12px] leading-[20px]">
                                Success: You have added
                                <Link href={'/products/1'} className={'text-[#0083c1]'}>{` Apple Cinema 30"`}</Link> to
                                your <Link
                                className={'text-[#0083c1]'} href="/compare">product comparison</Link>!
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
