import Post from '@/components/pages/blog/Posts';
import { FaSearch } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import React from 'react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { fetchBlogPosts } from '@/lib/Blog.action';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa6';

export default async function Blog({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1;

  let posts: Post[] = [];

  let pagination: Pagination = {
    total: 0,
    current_page: currentPage,
    per_page: 1
  };

  const fetchPosts = async () => {
    const request = await fetchBlogPosts(currentPage);

    if (request.data) {
      const postData = request.data as Post[];
      posts = postData;
    }

    if (request.meta.pagination) {
      const paginationData = request.meta.pagination as Pagination;
      pagination = paginationData;
    }
  };

  await fetchPosts();

  return (
    <div className='mx-auto mt-4'>
      <Breadcrumb
        breadcrumbItems={[
          {
            label: 'Blog',
            link: '/blog'
          }
        ]}
      />

      <h1 className='text-[30px] mt-[20px] mb-[10px] text-[#222222] font-light'>Blog</h1>

      {posts.length > 0 ? (
        <div className='grid grid-cols-12 mt-3 gap-4'>
          {/* Column 1 */}
          <div className='col-span-12 md:col-span-9'>
            {/* Posts */}
            {posts.map((post, i) => (
              <Post
                slug={post.id.toString()}
                thumbnail_url={post.thumbnail}
                title={post.title}
                description={post.description}
                comment_count={0}
                datetime={post.created_at}
                key={i}></Post>
            ))}

            {/* Pagination */}
            <div className='border rounded-sm p-[9px] flex justify-between items-center bg-[#f8f8f8] mb-10 shadow-sm'>
              <div className='text-[12px] ms-2 text-zinc-600'>
                Item {(pagination.current_page - 1) * pagination.per_page + 1} -{' '}
                {Math.min(pagination.current_page * pagination.per_page, pagination.total)} of {pagination.total} total
              </div>
              <div className='flex text-[12px] text-white gap-[5px]'>
                {/* Previous button */}
                {pagination.current_page > 1 && (
                  <Link
                    href={`/blog?page=${pagination.current_page - 1}`}
                    className='w-[33px] h-[33px] flex justify-center items-center bg-white text-gray-700 border rounded-sm'>
                    <FaAngleLeft />
                  </Link>
                )}

                {/* Page numbers */}
                {Array.from({ length: Math.ceil(pagination.total / pagination.per_page) }, (_, i) => (
                  <Link
                    href={`/blog?page=${i + 1}`}
                    key={i}
                    className={`w-[33px] h-[33px] flex justify-center items-center ${
                      pagination.current_page === i + 1
                        ? 'bg-[#0083c1] border-[#0083c1] text-white'
                        : 'bg-white text-gray-700'
                    } border rounded-sm`}>
                    {i + 1}
                  </Link>
                ))}

                {/* Next button */}
                {pagination.current_page < Math.ceil(pagination.total / pagination.per_page) && (
                  <Link
                    href={`/blog?page=${pagination.current_page + 1}`}
                    className='w-[33px] h-[33px] flex justify-center items-center bg-white text-gray-700 border rounded-sm'>
                    <FaAngleRight />
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className='col-span-12 md:col-span-3'>
            {/* Search box */}
            <div className='bg-zinc-50 border rounded-sm p-6 py-5 shadow-sm border-zinc-300'>
              <div className='relative text-[13px]'>
                <input
                  type='text'
                  className='h-[44px] px-[12px] w-full border border-zinc-300 rounded-sm outline-none'
                  placeholder='Search product...'
                />
                <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[14px] text-gray-500 cursor-pointer' />
              </div>
            </div>

            {/* Category */}
            <div className='mt-4 md:mb-0 mb-4'>
              <div className='mt-2 text-[22px] text-gray-800 '>Blog Category</div>
              <div className='bg-zinc-50 border border-zinc-300 rounded-sm text-[12px] mt-2'>
                <div className='p-3 border-b border-zinc-300 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out'>
                  Our Blog
                </div>
                <div className='p-3 border-b border-zinc-300 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out'>
                  Demo Category 3
                </div>

                <div className='p-3 border-b border-zinc-300 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out'>
                  Demo Category 3
                </div>
                <div className='p-3 border-b border-zinc-300 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out'>
                  Demo Category 4
                </div>
                <div className='p-3 hover:bg-white hover:text-[#0083c1] transition duration-300 ease-in-out'>
                  Demo Category 5
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center text-zinc-500 text-[20px] mb-10'>No posts found</div>
      )}
    </div>
  );
}
