'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CommentBody, CommentBodyType } from '@/schemaValidations/comment.schema';
import { createComment } from '@/lib/Comment.action';
import { useState } from 'react';

export function CommentForm({ postId, newComment }: { postId: string; newComment: any }) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<CommentBodyType>({
    resolver: zodResolver(CommentBody),
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      comment: '',
      postId: postId,
      createdAt: new Date().toISOString()
    }
  });

  async function onSubmit(values: CommentBodyType) {
    try {
      const result = await createComment(postId, values);
      if (result.error) {
        setError(result.error);
        setSuccess(null);
      } else {
        newComment(values);
        setError(null);
        setSuccess('Đăng bình luận thành công!');
        form.reset();
      }
    } catch (error) {
      setError('Đăng bình luận thất bại');
      setSuccess(null);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <div className='mt-10'>
        <div className='mb-3'>
          <label htmlFor='name' className='text-[14px] text-zinc-600'>
            Name <span className='text-red-500'>*</span>
          </label>
          <input
            {...form.register('name')}
            type='text'
            className='w-full border outline-none h-[40px] px-[12px] py-[6px] rounded-sm focus:border-[#66afe9] shadow-sm focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] transition duration-500 ease-in-out'
          />
          {form.formState.errors.name && (
            <p className='text-red-500 text-sm mt-1'>{form.formState.errors.name.message}</p>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='text-[14px] text-zinc-600'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            {...form.register('email')}
            type='email'
            className='w-full border outline-none h-[40px] px-[12px] py-[6px] rounded-sm focus:border-[#66afe9] shadow-sm focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] transition duration-500 ease-in-out'
          />
          {form.formState.errors.email && (
            <p className='text-red-500 text-sm mt-1'>{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='telephone' className='text-[14px] text-zinc-600'>
            Telephone <span className='text-red-500'>*</span>
          </label>
          <input
            {...form.register('telephone')}
            type='tel'
            className='w-full border outline-none h-[40px] px-[12px] py-[6px] rounded-sm focus:border-[#66afe9] shadow-sm focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] transition duration-500 ease-in-out'
          />
          {form.formState.errors.telephone && (
            <p className='text-red-500 text-sm mt-1'>{form.formState.errors.telephone.message}</p>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='comment' className='text-[14px] text-zinc-600'>
            Comment <span className='text-red-500'>*</span>
          </label>
          <textarea
            {...form.register('comment')}
            className='w-full border outline-none h-[200px] px-[12px] py-[6px] rounded-sm focus:border-[#66afe9] shadow-sm focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] transition duration-500 ease-in-out'
          />
          {form.formState.errors.comment && (
            <p className='text-red-500 text-sm mt-1'>{form.formState.errors.comment.message}</p>
          )}
        </div>

        {error && <div className='text-red-500 text-sm mt-2'>{error}</div>}
        {success && <div className='text-green-500 text-sm mt-2'>{success}</div>}

        <div className='flex justify-between items-center text-[14px] mt-4'>
          <div className='text-red-500'>* Required Fields</div>
          <button
            type='submit'
            className='h-[40px] w-fit bg-[#333333] rounded-sm px-[12px] py-[6px] text-white flex items-center hover:bg-[#0083c1] transition duration-300'>
            SEND COMMENT
          </button>
        </div>
      </div>
    </form>
  );
}
