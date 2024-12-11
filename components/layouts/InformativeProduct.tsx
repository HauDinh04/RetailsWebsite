import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaHeart, FaExchangeAlt, FaSearch} from "react-icons/fa";
import {useAppDispatch} from "@/redux/hooks";
import {setShowCartNotice, setShowCompareNotice, setShowWishListNotice} from "@/redux/features/notice/notice.slice";
import StarRating from "@/components/layouts/StarRating";
import {showProductModal} from "@/redux/features/product/product_modal.slice";
import {setIsLoading} from "@/redux/features/loading/loading.reducer";
import {useRouter} from "next/navigation";

function InformativeProduct({id, name, rating, price, image, oldPrice, content, discount_price, className = ''}: {
    id: string,
    name: string,
    rating: number,
    price: number,
    image: string,
    oldPrice: number,
    content: string,
    discount_price: number,
    className?: string
}) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleAddProduct = () => {
        dispatch(setShowCartNotice());
    }

    const handleCompareProduct = () => {
        dispatch(setShowCompareNotice())
    }

    const handleAddWishList = () => {
        dispatch(setShowWishListNotice());
    }

    const discountPercentage = Math.ceil(((price - discount_price) / price) * 100);

    const handleShowProductModal = () => {
        dispatch(showProductModal(id));
        dispatch(setIsLoading(true));
    }

    const handleNavigationDetail = () => {
        router.push(`/products/${id}`)
    }

    return (
        <div className={'flex flex-col sm:flex-row group w-full h-max' + ` ${className}`}>
            <div
                className="block p-[5px] w-auto h-auto border border-solid border-[#ccc] rounded-[3px] group-hover:bg-[#e5e5e5] group-hover:rounded-none transition-all ease-in-out duration-700">
                <div className="relative aspect-[3/4] w-full h-[334px]">
                    {image ? (<Image
                        src={image}
                        alt={name}
                        fill onClick={handleNavigationDetail}
                        className="object-cover"
                        sizes={'100'}
                    />) : (<Image
                        src={'/images/product-1.jpg'}
                        alt={name}
                        fill onClick={handleNavigationDetail}
                        sizes={'100'}
                        className="object-cover"
                    />)}
                    <div
                        className="absolute top-[10px] left-[10px] w-[45px] h-[45px] bg-[#0083c1] rounded-full flex items-center justify-center">
                        <p className="text-white text-[12px]">
                            NEW
                        </p>
                    </div>

                    <div
                        className="absolute top-[10px] right-[10px] w-[45px] h-[45px] bg-[#ff5555] rounded-full flex items-center justify-center">
                        <p className="text-white text-[12px]">
                            -{discountPercentage}%
                        </p>

                    </div>
                    <div
                        className="absolute bottom-[10px] right-[5px] opacity-0 transition-all ease-in-out duration-1000 group-hover:opacity-100">
                        <ul className="mb-[10px] w-[50px] h-[130px] flex flex-col">
                            <li onClick={handleAddWishList}
                                className="h-10 w-10 m-[5px] rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white">
                                <FaHeart className="w-[18px] h-[18px]"/>
                            </li>
                            <li onClick={handleCompareProduct}
                                className="h-10 w-10 m-[5px] cursor-pointer rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white">
                                <FaExchangeAlt className="w-[18px] h-[18px]"/>
                            </li>
                            <li onClick={handleShowProductModal}
                                className="h-10 w-10 m-[5px] rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white">
                                <FaSearch className="w-[18px] h-[18px]"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col pt-0 pl-0 lg:pt-[30px] sm:pl-[30px] w-max h-auto">
                <Link href={`/products/${id}`}
                      className="block text-[rgba(0,0,0,0.7)] text-[18px] lg:mt-[10px] lg:mb-[10px] group-hover:text-[#0083c1] whitespace-nowrap overflow-hidden text-ellipsis"> {name} </Link>
                <div className={'flex gap-[5px] text-[rgba(0,0,0,0.7)] sm:my-[5px] lg:mt-[10px] lg:mb-[20px]'}>
                    {rating ? (<StarRating rating={rating}/>) : <StarRating rating={5}/>}
                </div>
                <div className="flex gap-[10px] lg:mb-[15px]">
                    <div className="text-[#ff5555] leading-[30px] text-[18px] font-medium">
                        ${price.toFixed(2)}
                    </div>
                    {oldPrice && oldPrice !== 0 && (
                        <s className={'text-[14px] font-medium block text-[#777777] leading-[30px]'}>${oldPrice.toFixed(2)}</s>)}
                </div>
                <div className="max-w-[85vw] h-auto break-words text-[rgba(0,0,0,0.7)] text-[14px] pb-[10px]">
                    {content}
                </div>
                <button onClick={handleAddProduct}
                        className=" w-[120px] h-[40px] text-[12px] border-[1px] border-[#555555] text-[#555555] rounded-md hover:border-[#0083c1] hover:bg-[#0083c1] hover:text-white transition duration-300">
                    ADD TO CART
                </button>
            </div>

        </div>
    );
}


export default InformativeProduct;
