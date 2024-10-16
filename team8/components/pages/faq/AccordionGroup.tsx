
import React from 'react'
import { HiOutlineMinusSm } from "react-icons/hi";
import { IoAddSharp } from "react-icons/io5";

interface Props{
	id: number
	title: string
	label1: string
	label2: string
	show :number
	setShow:React.Dispatch<React.SetStateAction<number>>
}
const AccordionGroup = (props : Props) => {
	const { id, title, label1, label2, show , setShow} = props
  return (
	<li>
	<h3
	  onClick={() => setShow(id)} // Toggle khi click
	  className="group cursor-pointer bg-[#f4f4f4] relative z-10 flex items-center text-[#555555] hover:bg-[#8e8e8e]"
	>
	{show === id ? (<HiOutlineMinusSm className="absolute w-8 h-8 bg-[#A0A0A0] text-white left-0 group-hover:bg-[#828282]" />):
	(<IoAddSharp className="absolute w-8 h-8 bg-[#A0A0A0] text-white left-0 group-hover:bg-[#828282]" />)}
	  
	  
	  <span className="ml-12 leading-6 py-1 group-hover:text-[#fff] text-heading4 font-normal">
		{title}
	  </span>
	</h3>
	<div
	  style={{
		maxHeight: show === id ? "300px" : "0px",
		padding: show === id ? "10px 15px" : "0px 15px",
		overflow: "hidden",
		transition: "all 0.5s ease",
	  }}
	  className="border border-solid border-[#f4f4f4] bg-[#e6e6e3]"
	>
	  <p className="mb-[10px] text-caption leading-none">
		{label1}
	  </p>
	  <p className="mb-[10px] text-caption leading-none">
		{label2}
	  </p>
	</div>
  </li>
  )
}

export default AccordionGroup