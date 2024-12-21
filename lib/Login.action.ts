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

export const loginIn = () => fetch("https://api-core.dsp.one/api/auth/user/register", {
  method: "POST",
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe 3",
    nick_name: "john 3",
    email: "john@example3.com",
    address: "123 Street",
    phone: "0123456789",
    password: "password1234",
    password_confirmation: "password1234",
    customer_id: 1,
  }),
})
  .then(async (response) => {
    console.log(response);
    return await response.json();
    // if (!response.ok) {
    //   const error = await response.json(); // Lấy thông tin lỗi từ API
    //   console.error("Error response:", error);
    // } else {
    //   const data = await response.json();
    //   console.log("Success:", data); // Xử lý kết quả thành công
    // }
  })
  .catch((error) => {
    console.error("Network Error:", error); // Lỗi mạng hoặc không kết nối được
  });