"use client";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/customui/inputs";
import CartItem from "./CartItem";
const formSchema = z.object({
    search: z.string().min(2).max(50),
});

const cartItems = [
    {
        id: 1,
        image: "/images/product-1.jpg",
        name: "Filet Mign",
        quantity: 1,
        price: 12200,
    },
    {
        id: 2,
        image: "/images/product-1.jpg",
        name: "Canon EOS 5D",
        quantity: 2,
        price: 60,
    },
];

export default function Header() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <header>
            <div className="bg-[#f1f1f1]">
                <div className="container">
                    <div className="mx-[-15px] flex flex-row items-center justify-between text-[#555555]">
                        <div className="basis-1/2 flex flex-wrap items-center justify-start">
                            <div className="relative group px-5 after:absolute after:top-[14px] after:right-0 after:h-[13px] after:w-[1px] after:bg-[#cccccc]">
                                <div className="flex h-[40px] items-center justify-start text-caption hover:text-[#337ab7] cursor-pointer">
                                    <span className="">USD</span>
                                    <FaAngleDown className="ml-[3px]" />
                                </div>
                                <ul className="items-center absolute hidden group-hover:block top-full left-[-20px] min-w-[105px] bg-white-1 py-[5px] shadow-lg shadow-[#f1f1f1]-500/50 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-800 ease-out translate-y-[-10px] z-50">
                                    <li className=" hover:bg-[#f1f1f1]">
                                        <Link
                                            href="#"
                                            className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] block"
                                        >
                                            (€)&nbsp;Euro
                                        </Link>
                                    </li>
                                    <li className=" hover:bg-[#f1f1f1]">
                                        <Link
                                            href="#"
                                            className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] block"
                                        >
                                            (€)&nbsp;Pounds
                                        </Link>
                                    </li>
                                    <li className=" hover:bg-[#f1f1f1]">
                                        <Link
                                            href="#"
                                            className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] block"
                                        >
                                            (€)&nbsp;USD
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative group flex flex-row items-center px-5 cursor-pointer">
                                <div className="relative aspect-square w-[16px] h-[11px] mr-[2px]">
                                    <Image
                                        src="/images/gb.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex h-[40px] items-center justify-start text-info hover:text-bg-main">
                                    <span className="hidden md:block">
                                        English
                                    </span>
                                    <FaAngleDown className="ml-[3px]" />
                                </div>

                                <ul className="items-center absolute hidden group-hover:block top-full left-0 min-w-[105px] bg-white-1 py-[5px] shadow-lg shadow-[#f1f1f1]-500/50 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-800 ease-out translate-y-[-10px] z-50">
                                    <li className=" hover:bg-[#f1f1f1]">
                                        <Link
                                            href="#"
                                            className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] flex items-center"
                                        >
                                            <div className="relative aspect-square w-[16px] h-[11px] mr-[2px]">
                                                <Image
                                                    src="/images/gb.png"
                                                    alt=""
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            English
                                        </Link>
                                    </li>
                                    <li className=" hover:bg-[#f1f1f1]">
                                        <Link
                                            href="#"
                                            className="py-[3px] px-5 text-info font-normal hover:text-[#337ab7] flex items-center"
                                        >
                                            <div className="relative aspect-square w-[16px] h-[11px] mr-[2px]">
                                                <Image
                                                    src="/images/gb.png"
                                                    alt=""
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            Arabic
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="basis-1/2 px-[15px]">
                            <ul className="flex items-center flex-wrap justify-end text-caption">
                                <li className="px-[17px] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:translate-y-[-50%] md:after:h-[13px] md:after:w-[1px] md:after:bg-[#cccccc]">
                                    <Link
                                        href="#"
                                        className="hidden md:block hover:text-bg-main"
                                    >
                                        Welcome Customer!
                                    </Link>
                                </li>
                                <li className="pl-[17px] md:pr-[17px] relative md:after:absolute md:after:right-0 md:after:top-1/2 md:after:translate-y-[-50%] md:after:h-[13px] md:after:w-[1px] md:after:bg-[#cccccc]">
                                    <Link
                                        href="/login"
                                        className="hover:text-bg-main"
                                    >
                                        Sign In
                                    </Link>
                                </li>
                                <li className="pl-[17px]">
                                    <Link
                                        href="/register"
                                        className="hover:text-bg-main"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:pt-[31px] lg:pb-[33px] md:pt-[7px] md:pb-[16px] pt-[30px] pb-[16px]">
                <div className="container">
                    <div className="mx-[-15px]">
                        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between">
                            <div className="md:order-1 flex items-center justify-center order-1 basis-7/12 md:basis-full lg:basis-3/12 xl:basis-3/12  text-center pt-[13px] pb-[35px] px-[15px] md:pb-5 lg:pb-0 md:flex md:items-center md:justify-center lg:justify-start">
                                <div className="relative aspect-square w-full max-w-[194px] h-[38px] cursor-pointer">
                                    <Link href={"/"}>
                                        <Image
                                            src="/images/logo.png"
                                            alt="logo"
                                            fill
                                            sizes="100vw"
                                            className="w-full aspect-[3/4] object-contain"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="md:order-2 order-3 lg:basis-5/12 md:basis-8/12 basis-full py-[7px] px-[15px]">
                                <div className="flex w-full items-center shrink">
                                    <Form {...form}>
                                        <form
                                            onSubmit={form.handleSubmit(
                                                onSubmit
                                            )}
                                            className="w-full"
                                        >
                                            <div className="relative max-w-[430px]">
                                                <FormField
                                                    control={form.control}
                                                    name="search"
                                                    render={({ field }) => (
                                                        <FormItem className="">
                                                            <Input
                                                                placeholder="Search product..."
                                                                {...field}
                                                                className="h-[46px] w-full rounded-full pl-[30px] py-[6px] text-[#555555] bg-white border shadow-sm border-slate-300 placeholder-slate-400 placeholder:text-[14px] focus:outline-none focus:border-[#0083c1] block text-[14px]"
                                                            />
                                                        </FormItem>
                                                    )}
                                                />
                                                <Button
                                                    type="submit"
                                                    className="absolute top-1/2 right-[10px] transform -translate-y-1/2 bg-white-1 hover:bg-white-1 px-2 py-[4px] h-[30px]"
                                                >
                                                    <FaSearch className="text-black-1 w-[13px] h-[10px]" />
                                                </Button>
                                            </div>
                                        </form>
                                    </Form>
                                </div>
                            </div>
                            <div className="md:order-3 order-2 basis-5/12 sm:basis-4/12 flex flex-row md:items-center justify-end lg:justify-end xl:justify-between pl-[18px]">
                                <div className="hidden xl:flex flex-row items-center pt-[3px]">
                                    <FaPhone className="w-[11px] h-[14px] text-[#0083c1]" />
                                    <span className="text-sub-heading pl-2 text-[#555555] xl:leading-[58px]">
                                        Call Us: (888) 123456789
                                    </span>
                                </div>
                                <div className="pr-[15px]">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="pt-[16px] sm:pt-0 border-none hover:bg-white px-0 focus:outline-none bg-white-1"
                                            >
                                                <div className="flex flex-row">
                                                    <div className="relative aspect-square w-[31px] h-[40px] my-[5px] mx-[10px]">
                                                        <Image
                                                            src="/images/cart.png"
                                                            alt="cart"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="w-[22px] h-[22px] rounded-full bg-[#ff5555] absolute left-[-10px] bottom-[-8px] text-white-1">
                                                            2
                                                        </div>
                                                    </div>
                                                    <div className="hidden md:block">
                                                        <span className="font-semibold">
                                                            My cart
                                                        </span>
                                                        <p className="text-[#999] text-left text-[14px]">
                                                            $0.00
                                                        </p>
                                                    </div>
                                                </div>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-[330px] mt-[10px] border-t-[3px] border-[#0083c1] md:absolute md:top-0 md:right-[-60px]">
                                            <DropdownMenuLabel>
                                                <table>
                                                    <tbody>
                                                        {cartItems.map(
                                                            (item) => (
                                                                <CartItem
                                                                    key={
                                                                        item.id
                                                                    }
                                                                    image={
                                                                        item.image
                                                                    }
                                                                    name={
                                                                        item.name
                                                                    }
                                                                    quantity={
                                                                        item.quantity
                                                                    }
                                                                    price={
                                                                        item.price
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </DropdownMenuLabel>

                                            <DropdownMenuLabel>
                                                <div className="mb-[20px]">
                                                    <div className="flex flex-row items-center justify-between text-black-2 text-sub-heading font-bold py-2 px-2">
                                                        <p className="">
                                                            Sub-Total
                                                        </p>
                                                        <span className="font-normal">
                                                            $1,060.00
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between text-black-2 text-sub-heading font-bold py-2 px-2">
                                                        <p className="">
                                                            Eco Tax (-2.00)
                                                        </p>
                                                        <span className="font-normal">
                                                            $1.00
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between text-black-2 text-sub-heading font-bold py-2 px-2">
                                                        <p className="">
                                                            VAT (20%)
                                                        </p>
                                                        <span className="font-normal">
                                                            $200.00
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between text-black-2 text-sub-heading font-bold py-2 px-2">
                                                        <p className="">
                                                            Total
                                                        </p>
                                                        <span className="font-normal">
                                                            $1,262.00
                                                        </span>
                                                    </div>
                                                    <DropdownMenuSeparator className="bg-[#ddd]" />
                                                </div>
                                                <DropdownMenuLabel className="mb-[10px] flex items-center justify-end">
                                                    <Link
                                                        href="/cart"
                                                        className="bg-[#444] text-white py-[6px] px-[12px] text-sub-heading font-normal flex items-center hover:bg-[#0083c1]"
                                                    >
                                                        <IoCartSharp className="mr-2" />
                                                        View cart
                                                    </Link>
                                                    <Link
                                                        href="/checkout"
                                                        className="bg-[#444] text-white py-[6px] px-[12px] text-sub-heading font-normal ml-[18px] flex items-center hover:bg-[#0083c1]"
                                                    >
                                                        <FaShare className="mr-2" />
                                                        Checkout
                                                    </Link>
                                                </DropdownMenuLabel>
                                            </DropdownMenuLabel>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
