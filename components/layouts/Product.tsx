'use client';
import React from "react";
import {FaHeart} from "react-icons/fa";
import {FaExchangeAlt} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {IoIosStar} from "react-icons/io";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {useAppDispatch} from "@/redux/hooks";
import { showProductModal } from '@/redux/features/product/product_modal.slice';
import {setShowCartNotice, setShowCompareNotice, setShowWishListNotice} from "@/redux/features/notice/notice.slice";

interface productType {
  product: {
    id: number;
    image: string;
    isNew: boolean;
    isSale?: number;
    rating: number;
    name: string;
    price: number;
    oldPrice: number;
  };
  className: string;
}

export default function Product({product, className}: productType) {
    const dispatch = useAppDispatch();

    const handleAddProduct = () => {
        dispatch(setShowCartNotice());
    }

    const handleCompareProduct = () => {
        dispatch(setShowCompareNotice())
    }

    const handleAddWishList = () => {
        dispatch(setShowWishListNotice());
    }

    return (
        <div className="group">
            <div
                className="relative border border-[#e5e5e5] rounded-[5px] p-[5px] group-hover:bg-[#e5e5e5] group-hover:rounded-none transition-all ease-in-out duration-700">
                <div className={`relative ${className} w-full`}>
                    <Link href={`/products/${product.id}`}>
                        <Image
                            src={product.image}
                            alt={product.image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            className="w-full"
                        />
                    </Link>
                    {product.isNew && (
                        <div
                            className="absolute uppercase left-[6px] top-[6px] w-[45px] h-[45px] rounded-full bg-bg-main text-white-1 text-info flex items-center justify-center">
                            New
                        </div>
                    )}
                    {product.isSale && (
                        <div
                            className="absolute uppercase right-[6px] top-[6px] w-[45px] h-[45px] rounded-full bg-[#ff5555] text-white-1 text-info flex items-center justify-center">
                            {`-${product.isSale}%`}
                        </div>
                    )}
                </div>
                <div
                    className="absolute bottom-0 right-[5px] opacity-0 transition-all ease-in-out duration-1000 group-hover:opacity-100">
                    <ul className="mb-[10px] w-[50px] items-center flex flex-col gap-[5px]">
                        <li onClick={handleAddWishList}
                            className="h-10 w-10 rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white">
                            <FaHeart className="w-[18px] h-[18px]"/>
                        </li>
                        <li onClick={handleCompareProduct}
                            className="h-10 w-10 rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white">
                            <FaExchangeAlt className="w-[18px] h-[18px]"/>
                        </li>
                        <li onClick={() => dispatch(showProductModal(product.id))}
                          className="h-10 w-10 rounded-[3px] hidden  bg-white md:flex items-center justify-center hover:bg-bg-main hover:text-white">
                            <FaSearch className="w-[18px] h-[18px]"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-[5px]">
                <div>
                    <h4 className="my-[10px] text-center text-black-1 text-sub-heading font-medium group-hover:text-bg-main transition-all ease-in-out duration-700">
                        <Link href={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </h4>
                    <div className="h-[30px] flex flex-row items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                            <IoIosStar
                                key={i}
                                className={
                                    product.rating > i
                                        ? "text-black"
                                        : "text-footer-info"
                                }
                            />
                        ))}
                    </div>
                    <div className="mt-[10px] mb-[15px] text-center">
                        <span className="text-[#ff5555] text-heading3-bold">
                            ${product.price.toFixed(2)}
                        </span>
                        <span className="text-black-3 text-sub-heading font-medium line-through ml-1">
                            ${product.oldPrice.toFixed(2)}
                        </span>
                    </div>
                </div>

                <div className="text-center">
                    <Button onClick={handleAddProduct}
                            variant="outline"
                            className="uppercase w-[120px] h-[40px] text-info group-hover:bg-bg-main transition-all ease-in-out duration-300"
                    >
                        <span className="text-black-3 group-hover:text-white">
                            Add to Cart
                        </span>
                    </Button>
                </div>
            </div>
          )}
        </div>
        <div className='absolute bottom-0 right-[5px] opacity-0 transition-all ease-in-out duration-1000 group-hover:opacity-100'>
          <ul className='mb-[10px] w-[50px] items-center flex flex-col gap-[5px]'>
            <li className='h-10 w-10 rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white'>
              <Link href=''>
                <FaHeart className='w-[18px] h-[18px]' />
              </Link>
            </li>
            <li className='h-10 w-10 rounded-[3px] bg-white flex items-center justify-center hover:bg-bg-main hover:text-white'>
              <Link href=''>
                <FaExchangeAlt className='w-[18px] h-[18px]' />
              </Link>
            </li>
            <li
              className='h-10 w-10 rounded-[3px] hidden  bg-white md:flex items-center justify-center hover:bg-bg-main hover:text-white'
              onClick={() => {
                dispatch(showProductModal(product.id));
              }}>
              <div>
                <FaSearch className='w-[18px] h-[18px]' />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='pt-[5px]'>
        <div>
          <h4 className='my-[10px] text-center text-black-1 text-sub-heading font-medium group-hover:text-bg-main transition-all ease-in-out duration-700'>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h4>
          <div className='h-[30px] flex flex-row items-center justify-center'>
            {[...Array(5)].map((_, i) => (
              <IoIosStar key={i} className={product.rating > i ? 'text-black' : 'text-footer-info'} />
            ))}
          </div>
          <div className='mt-[10px] mb-[15px] text-center'>
            <span className='text-[#ff5555] text-heading3-bold'>${product.price.toFixed(2)}</span>
            <span className='text-black-3 text-sub-heading font-medium line-through ml-1'>
              ${product.oldPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className='text-center'>
          <Button
            variant='outline'
            className='uppercase w-[120px] h-[40px] text-info group-hover:bg-bg-main transition-all ease-in-out duration-300'>
            <span className='text-black-3 group-hover:text-white'>Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
