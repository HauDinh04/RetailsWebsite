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

import { Checkbox } from "@/components/customui/checkboxs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  reciPientName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  reciPientEmail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  yourName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  yourEmail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  mesSage: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  aMount: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  giftCertificate: z.enum(["General", "Birthday", "Christmas"], {
    required_error: "You need to select a notification type.",
  }),
  agree: z.boolean().default(false).optional(),
});

export default function GiftvoucherForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reciPientName: "",
      reciPientEmail: "",
      yourName: "",
      yourEmail: "",
      mesSage: "",
      aMount: "",
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
        className="w-full"
        noValidate
      >
        <fieldset className="">
          <div className="mb-[15px] -mx-[15px]">
            <FormField
              control={form.control}
              name="reciPientName"
              render={({ field }) => (
                <FormItem>
                  <div className=" mb-[15px] flex items-center justify-between">
                    <Label
                      htmlFor="reciPientName"
                      className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                    >
                      Recipient Name
                    </Label>
                    <div className="basis-5/6 px-[15px] ">
                      <Input
                        id="reciPientName"
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
              name="reciPientEmail"
              render={({ field }) => (
                <FormItem>
                  <div className=" mb-[15px] flex items-center justify-between">
                    <Label
                      htmlFor="reciPientEmail"
                      className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                    >
                      Recipient e-mail
                    </Label>
                    <div className="basis-5/6 px-[15px]">
                      <Input
                        id="reciPientEmail"
                        type="reciPientEmail"
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
              name="yourName"
              render={({ field }) => (
                <FormItem>
                  <div className=" mb-[15px] flex items-center justify-between">
                    <Label
                      htmlFor="yourName"
                      className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                    >
                      Your Name
                    </Label>
                    <div className="basis-5/6 px-[15px]">
                      <Input
                        id="yourName"
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
              name="yourEmail"
              render={({ field }) => (
                <FormItem>
                  <div className=" mb-[15px] flex items-center justify-between">
                    <Label
                      htmlFor="yourEmail"
                      className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                    >
                      Your e-mail
                    </Label>
                    <div className="basis-5/6 px-[15px]">
                      <Input
                        id="yourEmail"
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
              name="giftCertificate"
              render={({ field }) => (
                <FormItem>
                  <div className=" mb-[15px] flex">
                    <Label
                      htmlFor="giftCertificate"
                      className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                    >
                      Gift Certificate Theme
                    </Label>
                    <div className="basis-5/6 px-[15px]">
                      <RadioGroup
                        defaultValue="no"
                        onValueChange={field.onChange}
                      >
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
              name="mesSage"
              render={({ field }) => (
                <FormItem>
                  <div className=" mb-[15px] flex ">
                    <Label
                      htmlFor="mesSage"
                      className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                    >
                      Message
                    </Label>
                    <div className="basis-5/6 px-[15px]">
                      <Textarea
                        id="mesSage"
                        required
                        {...field}
                        className="text-[12px]  resize-none font-light h-[99px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500"
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
              name="aMount"
              render={({ field }) => (
                <FormItem>
                  <div className=" mb-[15px] flex items-center justify-between">
                    <Label
                      htmlFor="aMount"
                      className=" pt-[7px] basis-1/6 text-right px-[12px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                    >
                      Amount
                    </Label>
                    <div className="basis-5/6 px-[15px]">
                      <Input
                        id="aMount"
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
        <div className="flex flex-col gap-[5px] md:flex-row items-start md:items-center md:justify-end text-black-2 text-info">
          <div className="flex items-center">
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
  );
}
