/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import { LiaClone } from 'react-icons/lia';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { IoMdArrowDropdown } from "react-icons/io";
import Link from 'next/link'; // Nếu bạn dùng Next.js

interface CartItem {
  id: number;
  image: string;
  name: string;
  model: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

const ItemCart = ({ item }: { item: CartItem }) => {
  // Sử dụng state để quản lý quantity
  const [quantity, setQuantity] = useState(item.quantity);

  // Hàm xử lý thay đổi quantity
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity); // Cập nhật giá trị state
  };

  return (
    <tr>
      <td className="flex items-center p-2 border-b border-slate-300">
        <Link href="product.html" className="mx-auto">
          <img
            width="70px"
            src={item.image}
            alt={item.name}
            title={item.name}
            className="inline-block max-w-full h-auto p-1 bg-white border border-[#ddd] border-solid rounded-sm"
          />
        </Link>
      </td>
      <td className="text-left border border-slate-300 text-red-500 leading-none align-top p-2">
        <a href="product.html">{item.name}</a>
        <br />
      </td>
      <td className="text-left border border-slate-300 align-top leading-none p-2">
        {item.model}
      </td>
      <td className="text-left border border-slate-300 align-top leading-none p-2" width="200px">
        <div className="flex items-center justify-center">
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}  // Lắng nghe sự kiện thay đổi
            size={1}
            className="h-[34px] w-10 px-3 py-[6px] border border-solid border-[#ccc] bg-white md:w-full outline-none"
          />
          <div className="relative group">
            <button>
              <LiaClone className="w-10 h-[33px] p-1 text-white bg-[#337AB7]" />
            </button>
            
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] transition-opacity bg-black text-white text-caption leading-[18px] px-2 py-1 rounded">
              Update
            </span>
            <IoMdArrowDropdown className='absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[15px] transition-opacity text-black size-7' />
          </div>
          <div className="relative group">
            <button>
              <IoCloseCircleSharp className="w-10 h-[33px] p-2 font-sans text-white bg-[#D9534F]" />
            </button>
            
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] transition-opacity bg-black text-white text-caption leading-[18px] px-2 py-1 rounded">
              Remove
            </span>
            <IoMdArrowDropdown className='absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[15px] transition-opacity text-black size-7' />
          </div>
        </div>
      </td>
      <td className="text-right border border-slate-300 align-top leading-none p-2">
        {item.unitPrice.toFixed(3)} VND
      </td>
      <td className="text-right border border-slate-300 align-top leading-none p-2">
        {(item.unitPrice * quantity).toFixed(3)} VND
      </td>
    </tr>
  );
};

export default ItemCart;
