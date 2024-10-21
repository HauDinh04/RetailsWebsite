"use client";
import {
    FaHeart,
    FaExchangeAlt,
    FaChevronUp,
    FaChevronDown,
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaSkype,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";

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
    sku,
}: ProductModalProps) => {
    const [quantity, setQuantity] = useState(1);
    const [currentThumbnail, setThumbnails] = useState(thumbnail_url);

    const handleQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        if (!isNaN(Number(value)) && Number(value) > 0) {
            setQuantity(Number(value));
        }
    };

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const renderStars = (starCount: number) => {
        const stars = [];
        const roundedStars = Math.floor(starCount);

        for (let i = 0; i < 5; i++) {
            if (i < roundedStars) {
                stars.push(<FaHeart key={i} />);
            } else {
                stars.push(<FaExchangeAlt key={i} />);
            }
        }

        return stars;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-sm p-6 max-w-[1000px] w-full relative">
                <button
                    className="text-gray-600 hover:text-gray-900 absolute right-5"
                    onClick={onClose}
                >
                    <FaXmark />
                </button>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <Image
                            src={currentThumbnail}
                            alt="Thumbnails"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="w-full p-[1px] border aspect-[3/4] object-contain"
                        />

                        <Carousel className="mt-5">
                            <CarouselContent>
                                {images.map((image, index) => {
                                    return (
                                        <CarouselItem
                                            className="basis-1/4"
                                            key={index}
                                            onClick={() => setThumbnails(image)}
                                        >
                                            <Image
                                                src={image}
                                                alt=""
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                                className={`w-full aspect-[3/4] object-contain p-1 border ${
                                                    currentThumbnail == image
                                                        ? "border-blue-700"
                                                        : ""
                                                }`}
                                            />
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <div className="text-[12px]">
                        <div className="text-[24px]">{name}</div>
                        <div className="flex gap-1 my-8">
                            {renderStars(star)}
                        </div>
                        <div className="text-gray-700 text-[13px]">
                            {description}
                        </div>
                        <div className="font-bold mt-7">
                            Availability:{" "}
                            {in_stock ? (
                                <span className="text-green-500">In Stock</span>
                            ) : (
                                <span className="text-red-400">
                                    Out Of Stock
                                </span>
                            )}
                        </div>
                        <div className="font-bold mt-5">SKU: {sku}</div>
                        <div className="flex gap-2 mt-4 items-end">
                            <div className="text-red-500 font-bold text-[30px]">
                                ${price.toFixed(2)}
                            </div>
                            <div className="line-through text-[18px] text-gray-500 mb-2">
                                ${discount_price.toFixed(2)}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-10 mt-4">
                            <div className="text-[14px] font-bold text-gray-600 flex items-center gap-3">
                                Qtl:
                                <div className="border rounded-md w-[80px] p-2 flex divide-x">
                                    <input
                                        type="text"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className="w-full outline-none text-[12px] font-normal ms-2"
                                    />
                                    <div className="px-1 ps-2">
                                        <FaChevronUp
                                            className="text-[8px] mb-1 cursor-pointer"
                                            onClick={handleIncrement}
                                        />
                                        <hr />
                                        <FaChevronDown
                                            className="text-[8px] mt-1 cursor-pointer"
                                            onClick={handleDecrement}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="text-[12px] border h-[40px] flex items-center px-5 w-fit rounded-md cursor-pointer bg-[#0083c1] hover:bg-gray-600 text-white">
                                    ADD TO CART
                                </div>
                                <div className="bg-white flex justify-center items-center rounded-sm w-[40px] h-[40px] transform border cursor-pointer">
                                    <FaHeart />
                                </div>
                                <div className="bg-white flex justify-center items-center rounded-sm w-[40px] h-[40px] transform border cursor-pointer">
                                    <FaExchangeAlt />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="mt-[20px] flex justify-between items-center">
                            <div>Share This:</div>
                            <div className="flex gap-2">
                                <div className="h-[27px] w-[27px] bg-sky-400 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
                                    <FaFacebookF />
                                </div>
                                <div className="h-[27px] w-[27px] bg-blue-800 hover:bg-blue-300 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
                                    <FaTwitter />
                                </div>
                                <div className="h-[27px] w-[27px] bg-red-500 hover:bg-red-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
                                    <FaGooglePlusG />
                                </div>
                                <div className="h-[27px] w-[27px] bg-sky-600 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
                                    <FaSkype />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
