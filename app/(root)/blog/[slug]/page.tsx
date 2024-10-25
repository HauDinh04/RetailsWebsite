import {FaSearch} from "react-icons/fa";
import Image from "next/image";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGooglePlusG} from "react-icons/fa";
import {FaSkype} from "react-icons/fa";
import {MainComment} from "@/components/layouts/MainComment";
import {ReplyComment} from "@/components/layouts/ReplyComment";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import React from "react";

export default function Home() {
    return (
        <div className="">
            <Breadcrumb breadcrumbItems={[
                {
                    label: "Blog",
                    link: "/blog"
                },
            ]}/>

            <div className="grid grid-cols-12 gap-7 mt-10">
                {/* Column 1 */}
                <div className="col-span-12 md:col-span-9">
                    <div className="text-[30px] text-zinc-600 font-thin">
                        Black Friday event December 2016
                    </div>

                    {/* Thumbnail */}
                    <div className="transition duration-500 ease-in-out w-full h-fit relative mt-5">
                        <div className="p-2 border group-hover:border-transparent transition duration-700 ease-in-out">
                            <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width: "100%", height: "auto"}}
                                src={"/images/blog-3.jpg"}
                                alt=""
                                className="w-full "
                            />
                            <div
                                className="bg-white absolute top-4 left-4 p-3 py-2 rounded-sm flex flex-col items-center z-10 text-[#0083c1]">
                                <div className="text-[22px] font-bold mb-[-3px]">24</div>
                                <div className="text-[12px]">Dec</div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-[12px] mt-3 mb-8 text-zinc-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>{" "}
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. <br/> <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit.
                    </div>

                    {/* Share */}
                    <hr/>
                    <div className="mt-[20px] flex justify-between items-center mb-4">
                        <div className="text-[14px] text-zinc-600">Share This:</div>
                        <div className="flex gap-2">
                            <div
                                className="h-[27px] w-[27px] bg-sky-400 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
                                <FaFacebookF/>
                            </div>
                            <div
                                className="h-[27px] w-[27px] bg-[#456bbe] hover:bg-blue-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
                                <FaTwitter/>
                            </div>
                            <div
                                className="h-[27px] w-[27px] bg-red-500 hover:bg-red-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
                                <FaGooglePlusG/>
                            </div>
                            <div
                                className="h-[27px] w-[27px] bg-sky-600 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
                                <FaSkype/>
                            </div>
                        </div>
                    </div>

                    {/* Comment */}
                    <div className="mb-10 mt-20">
                        <div className="text-[22px] mb-1">12 comments</div>
                        <hr className="border-dashed mb-[1px]"/>
                        <hr className="border-dashed mb-[1px]"/>
                        <hr className="border-dashed mb-[1px]"/>

                        <div className="mt-10">
                            <MainComment
                                name="Hi Designer"
                                datetime="09/12/2016, 12:00:58 AM"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Duis aute irure dolor in reprehenderit in a voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            >
                                <ReplyComment
                                    name="Hi Designer"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                                    datetime="09/12/2016, 12:00:58 AM"
                                ></ReplyComment>
                                <ReplyComment
                                    name="Hi Designer"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                                    datetime="09/12/2016, 12:00:58 AM"
                                ></ReplyComment>
                            </MainComment>
                            <MainComment
                                name="Hi Designer"
                                datetime="09/12/2016, 12:00:58 AM"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Duis aute irure dolor in reprehenderit"
                            ></MainComment>
                        </div>
                    </div>

                    {/* Leave Comment */}
                    <div className="mb-10">
                        <div className="text-[22px] mb-1">Leave a comment</div>
                        <hr className="border-dashed mb-[1px]"/>
                        <hr className="border-dashed mb-[1px]"/>
                        <hr className="border-dashed mb-[1px]"/>

                        <div className="mt-10">
                            <div className="mb-3">
                                <label htmlFor="name" className="text-[14px] text-zinc-600">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full border outline-none h-[40px] px-[12px] py-[6px] rounded-sm focus:border-[#66afe9] shadow-sm focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] transition duration-500 ease-in-out"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="text-[14px] text-zinc-600">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    className="w-full border outline-none h-[40px] px-[12px] py-[6px] rounded-sm focus:border-[#66afe9] shadow-sm focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] transition duration-500 ease-in-out"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="telephone"
                                    className="text-[14px] text-zinc-600"
                                >
                                    Telephone <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="telephone"
                                    className="w-full border outline-none h-[40px] px-[12px] py-[6px] rounded-sm focus:border-[#66afe9] shadow-sm focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] transition duration-500 ease-in-out"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="comment" className="text-[14px] text-zinc-600">
                                    Comment <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="comment"
                                    className="w-full  border outline-none h-[200px] px-[12px] py-[6px] rounded-sm focus:border-[#66afe9] shadow-sm focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] transition duration-500 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-[14px]">
                            <div className="text-red-500 ">* Required Fields</div>
                            <div
                                className="h-[40px] w-fit bg-[#333333] rounded-sm px-[12px] py-[6px] text-white flex items-center">
                                SEND COMMENT
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="col-span-12 md:col-span-3">
                    {/* Search box */}
                    <div className="bg-zinc-50 border rounded-sm p-6 py-5 shadow-sm border-zinc-300">
                        <div className="relative text-[13px]">
                            <input
                                type="text"
                                className="h-[44px] px-[12px] w-full border border-zinc-300 rounded-sm outline-none"
                                placeholder="Search product..."
                            />
                            <FaSearch
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[14px] text-gray-500 cursor-pointer"/>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="mt-4 md:mb-0 mb-4">
                        <div className="mt-2 text-[22px] text-gray-800 ">Blog Category</div>
                        <div className="bg-zinc-50 border border-zinc-300 rounded-sm text-[12px] mt-2">
                            <div
                                className="p-3 border-b border-zinc-300 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out">
                                Our Blog
                            </div>
                            <div
                                className="p-3 border-b border-zinc-300 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out">
                                Demo Category 3
                            </div>

                            <div
                                className="p-3 border-b border-zinc-300 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out">
                                Demo Category 3
                            </div>
                            <div
                                className="p-3 border-b border-zinc-300 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out">
                                Demo Category 4
                            </div>
                            <div
                                className="p-3 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out">
                                Demo Category 5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
