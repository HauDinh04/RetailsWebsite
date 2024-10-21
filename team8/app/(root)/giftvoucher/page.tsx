"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/customui/inputs";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/customui/forms";
import Aside from "@/components/layouts/Aside";

import { Checkbox } from "@/components/customui/checkboxs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  telephone: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fax: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  company: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  address1: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  address2: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  postCode: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  country: z.enum(["0", "1", "2", "3"]),
  regionState: z.enum(["0", "1", "2", "3"]),

  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  passwordConfirm: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  Subscribe: z.enum(["yes", "no"], {
    required_error: "You need to select a notification type.",
  }),
  agree: z.boolean().default(false).optional(),
});

export default function Gifvoucher() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      fax: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      postCode: "",
      password: "",
      passwordConfirm: "",
      agree: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
import Aside from "@/components/layouts/Aside";
import React from "react";
import GiftvoucherForm from "./giftvoucher-form";

export default function GiftVoucher() {
  return (
    <div className="flex flex-wrap -mx-4 mb-[23px]">
      <div className="md:w-3/4 w-full px-[15px]">
        <h2 className="text-[30px] mt-5 mb-[10px] font-light	">
          Purchase a Gift Card
        </h2>
        <p className="mb-[10px] text-info text-black-2">
          This gift card will be emailed to the recipient after your order has
          been paid for.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full"
            noValidate
          >
            <fieldset className="">
              <div className="mb-[15px] -mx-[15px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className=" mb-[15px] flex items-center justify-between">
                        <Label
                          htmlFor="firstName"
                          className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Recipient's Name
                        </Label>
                        <div className="basis-5/6 px-[15px] ">
                          <Input
                            id="firstName"
                            type="text"
                            placeholder=""
                            required
                            {...field}
                            className="text-[12px] font-light h-[34px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500"
                          />
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-[15px] -mx-[15px]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className=" mb-[15px] flex items-center justify-between">
                        <Label
                          htmlFor="email"
                          className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Recipient's e-mail
                        </Label>
                        <div className="basis-5/6 px-[15px]">
                          <Input
                            id="email"
                            type="text"
                            placeholder=""
                            required
                            {...field}
                            className="text-[12px] font-light h-[34px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500"
                          />
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-[15px] -mx-[15px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className=" mb-[15px] flex items-center justify-between">
                        <Label
                          htmlFor="firstName"
                          className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Your Name
                        </Label>
                        <div className="basis-5/6 px-[15px]">
                          <Input
                            id="firstName"
                            type="text"
                            placeholder=""
                            required
                            {...field}
                            className="text-[12px] font-light h-[34px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500"
                          />
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-[15px] -mx-[15px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className=" mb-[15px] flex items-center justify-between">
                        <Label
                          htmlFor="firstName"
                          className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Your e-mail
                        </Label>
                        <div className="basis-5/6 px-[15px]">
                          <Input
                            id="firstName"
                            type="text"
                            placeholder=""
                            required
                            {...field}
                            className="text-[12px] font-light h-[34px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500"
                          />
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-[15px] -mx-[15px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className=" mb-[15px] flex">
                        <Label
                          htmlFor="firstName"
                          className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Your e-mail
                        </Label>
                        <div className="basis-5/6 px-[15px]">
                          <RadioGroup defaultValue="option-one">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="General"
                                id="General"
                                className="w-[12px] h-[12px] text-[#0075FF]"
                              />
                              <Label
                                htmlFor="option-one"
                                className="text-[12px] font-normal text-black-2"
                              >
                                General
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="Birthday"
                                id="Birthday"
                                className="w-[12px] h-[12px] text-[#0075FF]"
                              />
                              <Label
                                htmlFor="option-two"
                                className="text-[12px] font-normal text-black-2"
                              >
                                Birthday
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2  ">
                              <RadioGroupItem
                                value="Christmas"
                                id="Christmas"
                                className="w-[12px] h-[12px]  text-[#0075FF]"
                              />
                              <Label
                                htmlFor="option-two"
                                className="text-[12px] font-normal text-black-2"
                              >
                                Christmas
                              </Label>
                            </div>
                          </RadioGroup>
                          <FormMessage className="text-[10px] font-normal mt-[4px] " />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-[15px] -mx-[15px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className=" mb-[15px] flex ">
                        <Label
                          htmlFor="firstName"
                          className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Message
                        </Label>
                        <div className="basis-5/6 px-[15px]">
                          <Textarea className="text-[12px]  resize-none font-light h-[99px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500" />
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-[15px] -mx-[15px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className=" mb-[15px] flex items-center justify-between">
                        <Label
                          htmlFor="firstName"
                          className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Amount
                        </Label>
                        <div className="basis-5/6 px-[15px]">
                          <Input
                            id="firstName"
                            type="text"
                            placeholder=""
                            required
                            {...field}
                            className="text-[12px] font-light h-[34px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500"
                          />
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
            <div className="flex items-center md:justify-end text-black-2 text-info">
              <div className="flex">
                I understand that gift certificates are non-refundable.
                <FormField
                  control={form.control}
                  name="agree"
                  render={({ field }) => (
                    <FormItem>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className=" checked:bg-bg-main"
                      />
                      &nbsp;&nbsp;
                    </FormItem>
                  )}
                />
              </div>
              <button
                type="submit"
                className="py-[7px] px-[13px] text-white text-[14px] font-normal bg-bg-main hover:bg-[#2e6da4]"
              >
                Continue
              </button>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-1/4 md:block hidden px-[15px]">
        <Aside />
      </div>
    </div>
  );
}
