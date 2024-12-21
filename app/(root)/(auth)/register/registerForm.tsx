"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginIn } from "@/lib/Login.action";


const formSchema = z
  .object({
    name: z.string().min(2, { message: "Tên phải hơn 2 kí tự" }),
    nick_name: z.string().min(2, { message: "Nickname phải hơn 2 kí tự" }),
    email: z.string().email({ message: "Địa chỉ email không hợp lệ" }),
    address: z
      .string()
      .min(5, { message: "Địa chỉ không hợp lệ , nhập thêm thông tin" }),
    phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
    password: z.string().min(6, { message: "Mật khẩu phải hơn 6 kí tự" }),
    password_confirmation: z
      .string()
      .min(6, { message: "Mật khẩu xác nhận phải hơn 6 kí tự" }),
    customer_id: z.number().default(1),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Mật khẩu và mật khẩu xác nhận không khớp",
    path: ["password_confirmation"],
  });

const RegisterForms = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      nick_name: "",
      email: "",
      address: "",
      phone: "",
      password: "",
      password_confirmation: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      loginIn()
        .then(data => console.log(data));
    } catch (err) {
      console.error("POST_ERR:", err);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Username" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nick_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>nick_name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="nick_name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>address</FormLabel>
              <FormControl>
                <Input type="text" placeholder="address" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>phone</FormLabel>
              <FormControl>
                <Input type="number" placeholder="phone" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password_confirmation</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password_confirmation"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Đăng kí</Button>
      </form>
    </Form>
  );
};

export default RegisterForms;
