import React from 'react'
 interface Prop{
	id: number,
	name: string,
	message: string,
	role: string,
 }
const ItemClientSay = ({ testimonial }: {testimonial: Prop}) => {

  return (
    <div>
		<p className='max-w-[960px] mx-auto italic mb-[10px] text-center'>
			{testimonial.message}
		</p>
		<h3 className='mt-5 mb-[10px] font-bold text-center'>{testimonial.name}</h3>	
		<div className='relative mt-[7px] mb-[5px] flex items-center justify-center'>
			<span className='mx-[5px]'>---</span>
			<p className='italic'>{testimonial.role}</p>
			<span className='mx-[5px]'>---</span>
		</div>
	</div>
  )
}

export default ItemClientSay;
