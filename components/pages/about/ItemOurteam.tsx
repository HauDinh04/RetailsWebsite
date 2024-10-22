/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { FaRss, FaTwitter } from 'react-icons/fa'
import { LiaGoogle } from 'react-icons/lia'
import { RiFacebookFill } from 'react-icons/ri'
interface Prop{
	id: number,
	name: string,
	message: string,
	role: string,
	image:string
 }
const ItemOurteam = ({ testimonial }: {testimonial: Prop}) => {
  return (
	<div>
		<div>
			<img src={testimonial.image} alt="" className='w-full'/>
		</div>
		<div className='pt-[15px] text-center'>
			<h3 className='mt-5 mb-[10px] font-bold text-center'>{testimonial.name}</h3>
			<div className='relative mt-[7px] mb-[5px] flex items-center justify-center'>
				<span className='mx-[5px]'>---</span>
				<p className='italic'>{testimonial.role}</p>
				<span className='mx-[5px]'>---</span>
			</div>
			<p className='mb-[10px] text-[12px] leading-[18px]'>{testimonial.name}</p>
			<ul className='list-none mb-[10px] flex items-center justify-center'> 
				<li>
					<Link href=''><FaRss className='size-[30px] p-[6px] mx-[5px]  rounded-full bg-[#F8BC2E] text-white hover:bg-[#337ab7]' /></Link>
				</li>
				<li>
					<Link href=''><RiFacebookFill className='size-[30px] p-[6px] mx-[5px]  rounded-full bg-[#39599F] text-white hover:bg-[#337ab7]' /></Link>
				</li>
				<li>
					<Link href=''><FaTwitter  className='size-[30px] p-[6px] mx-[5px]  rounded-full bg-[#45B0E3] text-white hover:bg-[#337ab7]' /></Link>
				</li>
				<li>
					<Link href=''><LiaGoogle  className='size-[30px] p-[6px] mx-[5px]  rounded-full bg-[#1872BF] text-white hover:bg-[#337ab7]' /></Link>
				</li>
			</ul>
		</div>
	</div>
  )
}

export default ItemOurteam