import ClientSay from '@/components/pages/about/ClientSay'
import OurTeam from '@/components/pages/about/OurTeam'
import Link from 'next/link'
import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='container mb-[23px]'>
            <ul className="my-5 mb-10">
                <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
                    <Link href="" className="hover:text-[#337ab7] ">
                        Home
                    </Link>
                    <span>
              <MdKeyboardArrowRight className="inline-block mx-[10px] size-4"/>
            </span>
                </li>
                <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
                    <Link href="" className="hover:text-[#337ab7] ">
                        Page
                    </Link>
                    <span>
              <MdKeyboardArrowRight className="inline-block mx-[10px] size-4"/>
            </span>
                </li>
                <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
                    Contact Us
                </li>
            </ul>
            <div className='text-[#555555] w-full'>
                <div className='grid grid-cols-1 sm:grid-cols-12 sm:gap-[30px] w-full h-auto'>
                    <div className='md:col-span-5 col-span-12'>
                        <div className="relative aspect-[3.4/2.6]">
                            <Image sizes={'100vw'} alt={''}
                                   src={'/images/product-1.jpg'}
                                   fill/>
                        </div>
                    </div>
                    <div className='md:col-span-7 col-span-12 mb-10'>
                        <h3 className='italic font-black my-[20px] text-[20px]'>About Us</h3>
                        <div>
                            <p className='mb-[10px] text-[12px] leading-[18px]'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu.
                            </p>
                            <p className='mb-[10px] text-[12px] leading-[18px]'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu.
                            </p>
                            <p className='mb-[10px] text-[12px] leading-[18px]'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-[60px] mt-[20px]'>
                <div className='relative text-center'>
                    <h2 className='text-[30px] font-light text-[#222222] italic px-5 bg-white inline-block'>What Clients
                        Say</h2>
                    <span
                        className='absolute w-full border border-dashed border-[#ccc] top-1/2 left-0 h-[1px] -z-10'></span>
                </div>
                <ClientSay/>
            </div>
            <div className=''>
                <div className='relative text-center my-5'>
                    <h2 className='text-[30px] font-light text-[#222222] italic px-5 bg-white inline-block'>Our
                        Team</h2>
                    <span
                        className='absolute w-full border border-dashed border-[#ccc] top-1/2 left-0 h-[1px] -z-10'></span>
                </div>
                <OurTeam/>
            </div>
        </div>
    )
}

export default AboutPage