import Post from "@/components/pages/blog/Posts";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import React from "react";
import Breadcrumb from "@/components/layouts/Breadcrumb";

export default function Blog() {
  const posts = [
    {
      slug: "post1",
      thumbnail_url: "/images/blog-1.jpg",
      title: "Kire Tuma Demonstraverunt Lector",
      description:
        "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet b",
      comment_count: 2,
      datetime: "2023-12-24T12:00:00Z",
    },
    {
      slug: "post2",
      thumbnail_url: "/images/blog-1.jpg",
      title: "Kire Tuma Demonstraverunt Lector 2",
      description:
        "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet b",
      comment_count: 0,
      datetime: "2023-12-26T12:00:00Z",
    },
  ];

  return (
      <div className="mx-auto mt-4">
        <Breadcrumb breadcrumbItems={[
          {
            label: "Blog",
            link: "/blog"
          },
        ]}/>

        <h1 className="text-[30px] mt-[20px] mb-[10px] text-[#222222] font-light">Blog</h1>

        <div className="grid grid-cols-12 mt-3 gap-4">
          {/* Column 1 */}
          <div className="col-span-12 md:col-span-9">
            {/* Posts */}
            {posts.map((post, i) => (
                <Post
                    slug={post.slug}
                    thumbnail_url={post.thumbnail_url}
                    title={post.title}
                    description={post.description}
                    comment_count={post.comment_count}
                    datetime={post.datetime}
                    key={i}
                ></Post>
            ))}

            {/* Pagination */}
            <div className="border rounded-sm p-[9px] flex justify-between items-center bg-[#f8f8f8] mb-10 shadow-sm ">
              <div className="text-[12px] ms-2 text-zinc-600">
                item 01 - 05 of 47 total
              </div>
              <div className="flex text-[12px] text-white gap-[5px]">
                <div
                    className="w-[33px] h-[33px] flex justify-center items-center bg-[#0083c1] border border-[#0083c1] rounded-sm">
                  1
                </div>
                <div
                    className="w-[33px] h-[33px] flex justify-center items-center bg-white text-gray-700 border rounded-sm">
                  2
                </div>
                <div
                    className="w-[33px] h-[33px] flex justify-center items-center bg-white text-gray-700 border rounded-sm">
                  3
                </div>
                <div
                    className="w-[33px] h-[33px] flex justify-center items-center bg-white text-gray-700 border rounded-sm">
                  <FaAngleRight/>
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
                <div className="p-3 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out">
                  Demo Category 5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
