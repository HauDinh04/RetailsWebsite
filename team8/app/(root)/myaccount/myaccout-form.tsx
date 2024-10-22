"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/customui/inputs";
import { RadioGroup, RadioGroupItem } from "@/components/customui/radio-groups";

import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "@/components/customui/forms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/customui/selects";

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
export default function MyAccountForm() {
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
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full text-[#55555]"
        noValidate
      >
        <div className="flex flex-wrap -mx-[15px]">
          <div className="md:w-1/2 w-full px-[15px]">
            <fieldset className="">
              <legend className="w-full text-[18px] py-[7px] mb-[20px] text-[#333] border-b border-[#e5e5e5] block ">
                Personal Details
              </legend>

              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="firstName"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          First Name
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="First Name"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="lastName"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Last Name
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="email"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          E-Mail
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="email"
                            type="email"
                            placeholder="E-Mail"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="telephone"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Telephone
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="telephone"
                            type="phone"
                            placeholder="Telephone"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="fax"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="fax"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Fax
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="fax"
                            type="text"
                            placeholder="Fax"
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
          </div>
          <div className="md:w-1/2 w-full px-[15px]">
            <fieldset className="">
              <legend className="w-full text-[18px] py-[7px] mb-[20px] text-[#333] border-b border-[#e5e5e5] block ">
                Change Password
              </legend>
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="company"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Company
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="company"
                            type="text"
                            placeholder="Company"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="address1"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="address1"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Address 1
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="address1"
                            type="text"
                            placeholder="Address 1"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="address2"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="address2"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Address 2
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="address2"
                            type="text"
                            placeholder="Address 2"
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
            <fieldset className="">
              <legend className="w-full text-[18px] py-[7px] mb-[20px] text-[#333] border-b border-[#e5e5e5] block ">
                Newsletter
              </legend>
              <div className=" mb-[15px]">
                <FormField
                  control={form.control}
                  name="Subscribe"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="Subscribe"
                          className="text-black-2 px-[15px] w-1/3 mb-[5px] text-info font-normal "
                        >
                          Subscribe
                        </Label>
                        <div className="w-2/3 px-[15px] h-[25px]">
                          <RadioGroup
                            defaultValue="no"
                            onValueChange={field.onChange}
                            className="flex items-center flex-row"
                          >
                            <div className="flex  items-center space-x-2 text-[12px] font-light text-black-2 ">
                              <RadioGroupItem
                                value="yes"
                                id="r1"
                                className="w-[13px] h-[13px] appearance-none border rounded-full checked:border-bg-main"
                              />
                              <Label htmlFor="r1" className="text-[12px]">
                                Yes
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 text-[12px] font-light text-black-2 ">
                              <RadioGroupItem
                                value="no"
                                id="r2"
                                className="w-[13px] h-[13px]"
                              />
                              <Label htmlFor="r2" className="text-[12px]">
                                No
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <div className="flex flex-wrap -mx-[15px]">
          <div className="md:w-1/2 w-full px-[15px]">
            <fieldset className="">
              <legend className="w-full text-[18px] py-[7px] mb-[20px] text-[#333] border-b border-[#e5e5e5] block ">
                Payment Address
              </legend>

              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="firstName"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal"
                        >
                          Company
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="First Name"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="lastName"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Address 1
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="email"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          City
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="email"
                            type="email"
                            placeholder="E-Mail"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="telephone"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Post Code
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="telephone"
                            type="phone"
                            placeholder="Telephone"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="fax"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="fax"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Country
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="text-[12px] font-light h-[34px] text-black-1 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500">
                                <SelectValue placeholder=" --- Please Select --- " />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="text-[12px] font-light text-black-1 ">
                              <SelectItem value="0">
                                --- Please Select ---
                              </SelectItem>
                              <SelectItem value="1">Aaland Islands</SelectItem>
                              <SelectItem value="2">Afghanistan</SelectItem>
                              <SelectItem value="3">Albania</SelectItem>
                            </SelectContent>
                            <FormMessage className="text-[10px] font-normal mt-[4px]" />
                          </Select>
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="fax"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="fax"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Region / State
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="text-[12px] font-light h-[34px] text-black-1 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500">
                                <SelectValue placeholder=" --- Please Select --- " />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="text-[12px] font-light text-black-1 ">
                              <SelectItem value="0">
                                --- Please Select ---
                              </SelectItem>
                              <SelectItem value="1">AAberdeen</SelectItem>
                              <SelectItem value="2">Aberdeenshire</SelectItem>
                              <SelectItem value="3">Anglesey</SelectItem>
                            </SelectContent>
                            <FormMessage className="text-[10px] font-normal mt-[4px]" />
                          </Select>
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
          </div>
          <div className="md:w-1/2 w-full px-[15px]">
            <fieldset className="">
              <legend className="w-full text-[18px] py-[7px] mb-[20px] text-[#333] border-b border-[#e5e5e5] block ">
                Shipping Address
              </legend>

              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="firstName"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal"
                        >
                          Company
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="First Name"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="lastName"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Address 1
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="email"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          City
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="email"
                            type="email"
                            placeholder="E-Mail"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="telephone"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Post Code
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Input
                            id="telephone"
                            type="phone"
                            placeholder="Telephone"
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
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="fax"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="fax"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Country
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="text-[12px] font-light h-[34px] text-black-1 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500">
                                <SelectValue placeholder=" --- Please Select --- " />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="text-[12px] font-light text-black-1 ">
                              <SelectItem value="0">
                                --- Please Select ---
                              </SelectItem>
                              <SelectItem value="1">Aaland Islands</SelectItem>
                              <SelectItem value="2">Afghanistan</SelectItem>
                              <SelectItem value="3">Albania</SelectItem>
                            </SelectContent>
                            <FormMessage className="text-[10px] font-normal mt-[4px]" />
                          </Select>
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-[15px]">
                <FormField
                  control={form.control}
                  name="fax"
                  render={({ field }) => (
                    <FormItem>
                      <div className="">
                        <Label
                          htmlFor="fax"
                          className="leading-[18px] text-black-2 basis-full mb-[7px] md:basis-1/6 md:text-right text-info font-normal before:content-['*'] before:text-[#F00] before:mr-1"
                        >
                          Region / State
                        </Label>
                        <div className="basis-full md:basis-5/6">
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="text-[12px] font-light h-[34px] text-black-1 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500">
                                <SelectValue placeholder=" --- Please Select --- " />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="text-[12px] font-light text-black-1 ">
                              <SelectItem value="0">
                                --- Please Select ---
                              </SelectItem>
                              <SelectItem value="1">AAberdeen</SelectItem>
                              <SelectItem value="2">Aberdeenshire</SelectItem>
                              <SelectItem value="3">Anglesey</SelectItem>
                            </SelectContent>
                            <FormMessage className="text-[10px] font-normal mt-[4px]" />
                          </Select>
                          <FormMessage className="text-[10px] font-normal mt-[4px]" />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
          </div>
        </div>

        <div className="flex items-center justify-end text-black-2 text-info">
          <button
            type="submit"
            className="py-[7px] px-[13px] text-white text-[14px] font-normal bg-bg-main hover:bg-[#2e6da4]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </Form>
  );
}
