/* eslint-disable @next/next/no-img-element */
import ClientSay from '@/components/pages/about/ClientSay'
import Ourteam from '@/components/pages/about/OurTeam'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const AboutPage = () => {
  return (
	<div className='container mb-[23px]'>
		<ul className="my-5 mb-10">
          <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
            <Link href="" className="hover:text-[#337ab7] ">
              Home
            </Link>
            <span>
              <MdKeyboardArrowRight className="inline-block mx-[10px] size-4" />
            </span>
          </li>
		  <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
            <Link href="" className="hover:text-[#337ab7] ">
              Page
            </Link>
            <span>
              <MdKeyboardArrowRight className="inline-block mx-[10px] size-4" />
            </span>
          </li>
          <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
			Contact Us
          </li>
        </ul>
		<div className='text-[#555555]'>
			<div className='grid grid-cols-12 gap-[30px]'>
				<div className='md:col-span-5 col-span-12 mb-10'>
					<img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/about/wellcometoshop.png" alt="" />
				</div>
				<div className='md:col-span-7 col-span-12 mb-10'>
					<h3 className='italic font-black my-[20px] text-[20px]'>About Us</h3>
					<div>
						<p className='mb-[10px] text-[12px] leading-[18px]'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
						</p>
						<p className='mb-[10px] text-[12px] leading-[18px]'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
						</p>
						<p className='mb-[10px] text-[12px] leading-[18px]'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className='mb-[60px]'>
			<div className='relative text-center'>
				<h2 className='text-[30px] font-light text-[#222222] italic px-5 bg-white inline-block'>What Clients Say</h2>
				<span className='absolute w-full border border-dashed border-[#ccc] top-1/2 left-0 h-[1px] -z-10'></span>
			</div>
			<ClientSay/>
		</div>
		<div className=''>
			<div className='relative text-center my-5'>
				<h2 className='text-[30px] font-light text-[#222222] italic px-5 bg-white inline-block'>Our Team</h2>
				<span className='absolute w-full border border-dashed border-[#ccc] top-1/2 left-0 h-[1px] -z-10'></span>
			</div>
			<Ourteam/>
		</div>
	</div>
  )
}

export default AboutPage