'use client';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { MainComment } from '@/components/layouts/MainComment';

import Breadcrumb from '@/components/layouts/Breadcrumb';
import React, { useEffect, useState } from 'react';
import { fetchBlogPostByID } from '@/lib/Blog.action';
import { fetchCommentsByPostID } from '@/lib/Comment.action';
import { CommentForm } from './Comment';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<any[]>([]);

  const fetchComments = async () => {
    const response = await fetchCommentsByPostID(params.slug);

    console.log(response);

    if (response.data.length > 0) {
      setComments(response.data as Comment[]);
    }
  };

  const newComment = (data: any) => {
    setComments([...comments, data]);
  };

  useEffect(() => {
    fetchBlogPostByID(params.slug).then(post => setPost(post));
    fetchComments();
  }, [params.slug]);

  return (
    <div className=''>
      <Breadcrumb
        breadcrumbItems={[
          {
            label: 'Blog',
            link: '/blog'
          }
        ]}
      />

      {post ? (
        <div className='grid grid-cols-12 gap-7 mt-10'>
          {/* Column 1 */}
          <div className='col-span-12 md:col-span-9'>
            <div className='text-[30px] text-zinc-600 font-thin'>{post.title}</div>

            {/* Thumbnail */}
            <div className='transition duration-500 ease-in-out w-full h-fit relative mt-5'>
              <div className='p-2 border group-hover:border-transparent transition duration-700 ease-in-out'>
                <Image
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: '100%', height: 'auto' }}
                  src={post.thumbnail}
                  alt=''
                  className='w-full '
                />
                <div className='bg-white absolute top-4 left-4 p-3 py-2 rounded-sm flex flex-col items-center z-10 text-[#0083c1]'>
                  <div className='text-[22px] font-bold mb-[-3px]'>24</div>
                  <div className='text-[12px]'>Dec</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className='text-[12px] mt-3 mb-8 text-zinc-600'>{post.content}</div>

            {/* Share */}
            <hr />
            <div className='mt-[20px] flex justify-between items-center mb-4'>
              <div className='text-[14px] text-zinc-600'>Share This:</div>
              <div className='flex gap-2'>
                <div className='h-[27px] w-[27px] bg-sky-400 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer'>
                  <FaFacebookF />
                </div>
                <div className='h-[27px] w-[27px] bg-[#456bbe] hover:bg-blue-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer'>
                  <FaTwitter />
                </div>
                <div className='h-[27px] w-[27px] bg-red-500 hover:bg-red-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer'>
                  <FaGooglePlusG />
                </div>
                <div className='h-[27px] w-[27px] bg-sky-600 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer'>
                  <FaSkype />
                </div>
              </div>
            </div>

            {/* Comment */}
            <div className='mb-10 mt-20'>
              <div className='text-[22px] mb-1'>{comments.length} comments</div>
              <hr className='border-dashed mb-[1px]' />
              <hr className='border-dashed mb-[1px]' />
              <hr className='border-dashed mb-[1px]' />

              <div className='mt-10'>
                {comments.map(comment => (
                  <MainComment
                    key={comment.id}
                    name={comment.name}
                    datetime={comment.created_at}
                    content={comment.comment}></MainComment>
                ))}

                {comments.length === 0 && (
                  <div className='text-center text-[14px] text-zinc-600'>No comments found</div>
                )}
              </div>
            </div>

            {/* Leave Comment */}
            <div className='mb-10'>
              <div className='text-[22px] mb-1'>Leave a comment</div>
              <hr className='border-dashed mb-[1px]' />
              <hr className='border-dashed mb-[1px]' />
              <hr className='border-dashed mb-[1px]' />

              <CommentForm postId={params.slug} newComment={newComment} />
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
        <div className='text-center text-[22px] text-zinc-600 mt-10 mb-10'>No post found</div>
      )}
    </div>
  );
}
