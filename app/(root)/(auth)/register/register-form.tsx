"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/customui/inputs";
import { RadioGroup, RadioGroupItem } from "@/components/customui/radio-groups";
import { Checkbox } from "@/components/customui/checkboxs";
import Link from "next/link";
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
import FieldsetLegend from "./FieldsetLegend";
import {
    RegisterBody,
    RegisterBodyType,
} from "@/schemaValidations/auth.schema";
import { Register } from "@/lib/Register.action";

// const formSchema = z.object({
//     firstName: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
//     lastName: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
//     email: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
//     telephone: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
//     fax: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),

//     company: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
//     address1: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
//     address2: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
//     city: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
//     postCode: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),

//     country: z.enum(["0", "1", "2", "3"]),
//     regionState: z.enum(["0", "1", "2", "3"]),

//     password: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
//     confirmPassword: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),

//     subscribe: z.enum(["yes", "no"], {
//         required_error: "You need to select a notification type.",
//     }),
//     agree: z.boolean().default(false).optional(),
// });
export default function RegisterForm() {
    const form = useForm<RegisterBodyType>({
        resolver: zodResolver(RegisterBody),
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
            confirmPassword: "",
            agree: false,
        },
    });

    async function onSubmit(values: RegisterBodyType) {
        // const result = await fetch(
        //     `${process.env.NEXT_PUBLIC_API_URL_JSON}/users`,
        //     {
        //         body: JSON.stringify(values),
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         method: "POST",
        //     }
        // ).then((res) => res.json());
        // console.log(result);
        const result = await Register(values);
        console.log(result);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full"
                noValidate
            >
                <fieldset>
                    <FieldsetLegend title="Your Personal Details" />
                    <div className="mb-[15px]">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="firstName"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            First Name
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="lastName"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            Last Name
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="email"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            E-Mail
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="telephone"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            Telephone
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="fax"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light"
                                        >
                                            Fax
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                <fieldset>
                    <FieldsetLegend title="Your Address" />
                    <div className="mb-[15px]">
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="company"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light"
                                        >
                                            Company
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="address1"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            Address 1
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="address2"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light"
                                        >
                                            Address 2
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                    <div className="mb-[15px]">
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="city"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            City
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
                                            <Input
                                                id="city"
                                                type="text"
                                                placeholder="City"
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
                            name="postCode"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="postCode"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            Post Code
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
                                            <Input
                                                id="postCode"
                                                type="text"
                                                placeholder="Post Code"
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
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="country"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            Country
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                                                    <SelectItem value="1">
                                                        Aaland Islands
                                                    </SelectItem>
                                                    <SelectItem value="2">
                                                        Afghanistan
                                                    </SelectItem>
                                                    <SelectItem value="3">
                                                        Albania
                                                    </SelectItem>
                                                </SelectContent>
                                                <FormMessage className="text-[10px] font-normal mt-[4px]" />
                                            </Select>
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="mb-[15px]">
                        <FormField
                            control={form.control}
                            name="regionState"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="regionState"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            Region / State
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
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
                                                    <SelectItem value="1">
                                                        AAberdeen
                                                    </SelectItem>
                                                    <SelectItem value="2">
                                                        Aberdeenshire
                                                    </SelectItem>
                                                    <SelectItem value="3">
                                                        Anglesey
                                                    </SelectItem>
                                                </SelectContent>
                                                <FormMessage className="text-[10px] font-normal mt-[4px]" />
                                            </Select>
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <FieldsetLegend title="Your Password" />
                    <div className="mb-[15px]">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="password"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            Password
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
                                            <Input
                                                id="password"
                                                type="password"
                                                placeholder="Password"
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
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="confirmPassword"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            Password Confirm
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px]">
                                            <Input
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="Password Confirm"
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
                <fieldset>
                    <FieldsetLegend title="Newsletter" />
                    <div className="mb-[15px]">
                        <FormField
                            control={form.control}
                            name="subscribe"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <Label
                                            htmlFor="subscribe"
                                            className="basis-full mb-[5px] md:pt-[7px] md:basis-1/6 md:text-right md:px-[15px] text-info font-light before:content-['*'] before:text-[#F00] before:mr-1"
                                        >
                                            subscribe
                                        </Label>
                                        <div className="basis-full md:basis-5/6 md:pl-[15px] h-[25px]">
                                            <RadioGroup
                                                defaultValue="no"
                                                onValueChange={field.onChange}
                                                className="flex flex-row"
                                            >
                                                <div className="flex items-center space-x-2 text-[12px] font-light text-black-2 pt-[7px]">
                                                    <RadioGroupItem
                                                        value="yes"
                                                        id="r1"
                                                        className="w-[13px] h-[13px] appearance-none border rounded-full checked:border-bg-main"
                                                    />
                                                    <Label
                                                        htmlFor="r1"
                                                        className=""
                                                    >
                                                        Yes
                                                    </Label>
                                                </div>
                                                <div className="flex items-center space-x-2 text-[12px] font-light text-black-2 pt-[7px]">
                                                    <RadioGroupItem
                                                        value="no"
                                                        id="r2"
                                                        className="w-[13px] h-[13px]"
                                                    />
                                                    <Label htmlFor="r2">
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
                <div className="flex items-center justify-end text-black-2 text-info">
                    <div className="flex">
                        I have read and agree to the&nbsp;
                        <Link
                            href={""}
                            className="text-[#222222] font-bold hover:text-bg-main"
                        >
                            Pricing Tables&nbsp;
                        </Link>
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
