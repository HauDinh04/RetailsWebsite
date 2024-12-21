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

export const LoginAPI = async (email: string, password: string) => {
  try {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
                "Bearer c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f",
          },
          body: JSON.stringify({
              "code": "",
              "phone": "",
              "email": email,
              "password": password,
              "customer_group_id": 1,
              "device_token": ""
          }),
          method: "POST",
        }
    );

    if (!res.ok) {
      console.log(`Error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error post Login...", error);
    return error;
  }
};