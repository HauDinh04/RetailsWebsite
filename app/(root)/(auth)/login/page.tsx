'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/customui/inputs';
import { Form, FormField, FormItem, FormMessage } from '@/components/customui/forms';
import { Label } from '@/components/ui/label';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { FaRegFile } from 'react-icons/fa';
import { FaRegFileAlt } from 'react-icons/fa';
import { Login } from '@/lib/Login.action';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const formSchema = z.object({
    email: z.string().email('Email must be valid.'),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters.'
    })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await Login(values.email, values.password);
      if (res?.error) {
        setError(res.error);
      } else {
        setError(null);
        router.push('/');
      }
    } catch (error) {}
  }

  return (
    <>
      <div className='container '>
        <Breadcrumb className='text-[14px] my-[20px]'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Account </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Login</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className='grid grid-cols-12 gap-7 mb-5'>
          <div className='col-span-12 md:col-span-6'>
            <div className='border'>
              <div className='p-[19px] min-h-[285px]'>
                <div className='flex items-center gap-2 text-[30px] font-light text-zinc-700 mt-[10px] mb-[20px]'>
                  <FaRegFile />
                  <div className='uppercase'> New Customer</div>
                </div>
                <div className='text-[12px] text-zinc-500'>
                  By creating an account you will be able to shop faster, be up to date on an order status, and keep
                  track of the orders you have previously made.
                </div>
              </div>
              <div className='bg-[#f5f5f5] border-t px-[20px] py-[10px] flex justify-end'>
                <a
                  href='#'
                  className='px-[12px] py-[7px] border bg-[#555555] text-white block w-fit text-[14px] hover:bg-[#0083c1]'>
                  Continue
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6'>
            <div className='border'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full' noValidate>
                  <div className='p-[19px]'>
                    <div className='flex items-center gap-2 text-[30px] font-light text-zinc-700 mt-[10px] mb-[20px]'>
                      <FaRegFileAlt />
                      <span className='uppercase'> Returning Customer </span>
                    </div>
                    <div className='text-[12px] font-bold text-gray-600 mb-[10px]'>I am a returning customer</div>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor='email' className='text-[12px] font-normal text-gray-600'>
                            E-Mail Address
                          </Label>
                          <Input
                            id='email'
                            type='text'
                            placeholder=''
                            required
                            {...field}
                            className='text-[12px] font-light h-[34px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-zinc-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500'
                          />
                          <FormMessage className='text-[12px] font-normal mt-[4px]' />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='password'
                      render={({ field }) => (
                        <FormItem className='mt-2 mb-[15px]'>
                          <Label htmlFor='password' className='text-[12px] font-normal text-gray-600'>
                            Password
                          </Label>
                          <Input
                            id='password'
                            type='text'
                            placeholder=''
                            required
                            {...field}
                            className='text-[12px] font-light h-[34px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-zinc-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500'
                          />
                          <FormMessage className='text-[12px] font-normal mt-[4px]' />
                        </FormItem>
                      )}
                    />
                    {error && <div className='text-[12px] font-bold text-red-600 mb-[10px]'>{error}</div>}
                  </div>
                  <div className='bg-[#f5f5f5] border-t px-[20px] py-[10px] flex justify-between items-center'>
                    <a className='text-[12px] hover:text-[#0083c1] transition duration-500 ease-in-out'>
                      Forgotten Password
                    </a>
                    <button
                      type='submit'
                      className='px-[12px] py-[7px] border bg-[#555555] hover:bg-[#0083c1] text-white block w-fit text-[14px]'>
                      Login
                    </button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
