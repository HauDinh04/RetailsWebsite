'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export const Login = async (email: string, password: string) => {
  try {
    await signIn('credentials', {
      email: email,
      password: password,
      redirectTo: '/'
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.cause?.error === 'CredentialsSignin') {
        return { error: 'Tài khoản hoặc mật khẩu không đúng.' };
      } else {
        return { error: error.cause?.err?.message || 'Đã xảy ra lỗi, vui lòng thử lại sau.' };
      }
    }
  }
};
