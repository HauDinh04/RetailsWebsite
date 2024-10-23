/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoClose } from "react-icons/io5";

const CartItem = ({image, name, quantity, price, }:{image:string, name:string,quantity: number, price: number}) => {
  return (
	<tr className='bg-white my-[10px]'>
		<td className="p-2 text-center w-[70px]">
			<a href="product.html"> <img src={image} alt="Filet Mign" title="Filet Mign" className="w-[70px]"/> </a>
		</td>
		<td className="p-2 text-[14px] hover:text-[#0083c1] font-normal text-left text-[#666]"> <a className="cart_product_name" href="product.html">{name}</a> </td>
		<td className="p-2 text-[14px] font-normal text-center text-[#666]">x{quantity.toString()}</td>
		<td className="p-2 text-[14px] font-normal text-center text-[#666]">{price.toLocaleString()} VND</td>
		<td className="p-2 text-right">
			<a href="product.html" className="fa fa-edit"></a>
		</td>
		<td className="p-2 text-right">
		<IoClose className='bg-[#D2D2D2] cursor-pointer transition-colors duration-400 text-black font-semibold transform rounded size-5 hover:bg-[#0083C1] hover:text-white' />

		</td>
	</tr>
  )
}

export default CartItem