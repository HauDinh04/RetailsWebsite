"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosStar } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormField,
    FormItem,
    FormMessage,
    FormControl,
} from "@/components/customui/forms";
import { RadioGroup, RadioGroupItem } from "@/components/customui/radio-groups";
import { Input } from "@/components/customui/inputs";
import { Textarea } from "@/components/customui/textarea";
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    bio: z
        .string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(160, {
            message: "Bio must not be longer than 30 characters.",
        }),
    rating: z.enum(["1", "2", "3", "4", "5"], {
        required_error: "You need to select a notification type.",
    }),
});

export default function TabsSlider() {
    const [activeTab, setActiveTab] = useState("description");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            bio: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <div className="px-[15px] pt-[70px] mb-[35px]">
            <ul className="flex ">
                <li className="mr-[10px] mb-[10px]">
                    <Button
                        onClick={() => handleTabClick("description")}
                        className={`text-[14px] py-[10px] px-[10px] border border-[#ddd] font-semibold bg-white hover:bg-[#0083c1] hover:text-white ${
                            activeTab === "description"
                                ? "border-[#0083c1] text-white bg-[#0083c1] "
                                : "text-black-1"
                        }`}
                    >
                        DESCRIPTION
                    </Button>
                </li>
                <li className="mr-[10px] mb-[10px]">
                    <Button
                        onClick={() => handleTabClick("reviews")}
                        className={`text-[14px] py-[10px] px-[10px] border border-[#ddd] font-semibold bg-white hover:bg-[#0083c1] hover:text-white ${
                            activeTab === "reviews"
                                ? "border-[#0083c1] text-white bg-[#0083c1]"
                                : "text-black-1"
                        }`}
                    >
                        REVIEWS (1)
                    </Button>
                </li>
                <li className="mr-[10px] mb-[10px]">
                    <Button
                        onClick={() => handleTabClick("tags")}
                        className={`text-[14px] py-[10px] px-[10px] border border-[#ddd] font-semibold bg-white hover:bg-[#0083c1] hover:text-white ${
                            activeTab === "tags"
                                ? "border-[#0083c1] text-white bg-[#0083c1]"
                                : "text-black-1"
                        }`}
                    >
                        TAGS
                    </Button>
                </li>
                <li className="mr-[10px] mb-[10px]">
                    <Button
                        onClick={() => handleTabClick("customTab")}
                        className={`text-[14px] py-[10px] px-[10px] border border-[#ddd] font-semibold bg-white hover:bg-[#0083c1] hover:text-white ${
                            activeTab === "customTab"
                                ? "border-[#0083c1] text-white bg-[#0083c1] "
                                : "text-black-1"
                        }`}
                    >
                        CUSTOM TAB
                    </Button>
                </li>
            </ul>
            <div className="p-[20px] border rounded-[4px] text-[12px] text-black-2">
                {activeTab === "description" && (
                    <div className="text-[12px] text-black-2">
                        <p className="mb-[10px]">
                            The 30-inch Apple Cinema HD Display delivers an
                            amazing 2560 x 1600 pixel resolution. Designed
                            specifically for the creative professional, this
                            display provides more space for easier access to all
                            the tools and palettes needed to edit, format and
                            composite your work. Combine this display with a Mac
                            Pro, MacBook Pro, or PowerMac G5 and no limit to
                            what you can achieve.
                            <br />
                            <br />
                            The Cinema HD features an active-matrix liquid
                            crystal display that produces flicker-free images
                            that deliver twice the brightness, twice the
                            sharpness and twice the contrast ratio of a typical
                            CRT display. Unlike other flat panels, designed with
                            a pure digital interface to deliver distortion-free
                            images that never need adjusting. With over 4
                            million digital pixels, the display is uniquely
                            suited for scientific and technical applications
                            such as visualizing molecular structures or
                            analyzing geological data.
                            <br />
                            <br />
                            Offering accurate, brilliant color performance, the
                            Cinema HD delivers up to 16.7 million colors across
                            a wide gamut allowing you to see subtle nuances
                            between colors from soft pastels to rich jewel
                            tones. A wide viewing angle ensures uniform color
                            from edge to edge. ColorSync technology allows you
                            to create custom profiles to maintain consistent
                            color onscreen and in print. The result: You can
                            confidently use this display in all your
                            color-critical applications.
                            <br />
                            <br />
                            Housed in a new aluminum design, the display has a
                            very thin bezel that enhances visual accuracy. Each
                            display features two FireWire 400 ports and two USB
                            2.0 ports, making attachment of desktop peripherals,
                            such as iSight, iPod, digital and still cameras,
                            hard drives, printers and scanners, even more
                            accessible and convenient. Taking advantage of the
                            much thinner and lighter footprint of an LCD, the
                            new displays support the VESA (Video Electronics
                            Standards Association) mounting interface standard.
                            Customers with the optional Cinema Display VESA
                            Mount Adapter kit gain the flexibility to mount
                            their display in locations most appropriate for
                            their work environment.
                            <br />
                            <br />
                            The Cinema HD features a single cable design with
                            elegant breakout for the USB 2.0, FireWire 400 and a
                            pure digital connection using the industry standard
                            Digital Video Interface (DVI) interface. The DVI
                            connection allows for a direct pure-digital
                            connection.
                        </p>
                    </div>
                )}

                {activeTab === "reviews" && (
                    <div>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="w-full"
                                noValidate
                            >
                                <div className="w-full">
                                    <table
                                        className={
                                            "w-full text-[12px] table-auto text-left border-collapse border border-solid border-[#ddd] "
                                        }
                                    >
                                        <thead
                                            className={
                                                "bg-[rgba(51,51,51,0.1)] border-b-[2px] border-solid border-[#ddd]"
                                            }
                                        >
                                            <tr>
                                                <th
                                                    className={
                                                        "p-2 text-[#555555]  text-left border border-solid border-[#ddd] w-1/2"
                                                    }
                                                >
                                                    Super Administrator
                                                </th>
                                                <th
                                                    className={
                                                        "p-2 text-[#555555] text-right font-light border border-solid border-[#ddd] w-1/2"
                                                    }
                                                >
                                                    29/07/2015
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className={"align-top"}>
                                                <td
                                                    colSpan={2}
                                                    className={
                                                        "p-2 border border-solid border-[#ddd]"
                                                    }
                                                >
                                                    <p className="mb-[10px]">
                                                        Best this product
                                                        opencart
                                                    </p>
                                                    <div className="flex">
                                                        <IoIosStar className="text-[12px]" />
                                                        <IoIosStar className="text-[12px]" />
                                                        <IoIosStar className="text-[12px]" />
                                                        <IoIosStar className="text-[12px]" />
                                                        <IoIosStar className="text-[12px]" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h2 className="mt-[20px] mb-[10px] text-[20px] font-medium">
                                    Write a review
                                </h2>
                                <div className="mb-[15px]">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="">
                                                    <Input
                                                        id="username"
                                                        type="text"
                                                        placeholder="Your Name"
                                                        required
                                                        {...field}
                                                        className="text-[12px] font-light h-[34px] text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500 focus:placeholder-transparent"
                                                    />
                                                    <FormMessage className="text-[10px] font-normal mt-[4px]" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="mb-[15px]">
                                    <FormField
                                        control={form.control}
                                        name="bio"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="">
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Your Review"
                                                            className="resize-none text-[12px] font-light text-black-2 rounded-none py-[6px] px-[12px] bg-white border border-slate-300 focus:shadow focus:shadow-sky-200 placeholder-slate-400 placeholder:text-[12px] focus:outline-none focus:border-sky-500 focus:ring-0 focus:ring-sky-500 focus:placeholder-transparent"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-[10px] font-normal mt-[4px]" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <span className="text-[11px] leading-[18px]">
                                    <span className="inline-block bg-[#a94442] text-white border rounded-[3px] px-[5px] my-[5px] leading-[18px]">
                                        Note:
                                    </span>
                                    &nbsp;HTML is not translated!
                                </span>
                                <div className="mb-[15px] flex flex-row">
                                    <b className="font-bold">Rating</b>
                                    &nbsp;
                                    <span>Bad</span>&nbsp;&nbsp;
                                    <FormField
                                        control={form.control}
                                        name="rating"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="flex md:flex-row items-center justify-between">
                                                    <RadioGroup
                                                        defaultValue="no"
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        className="flex  flex-row"
                                                    >
                                                        <RadioGroupItem
                                                            value="1"
                                                            id="r1"
                                                            className="w-[13px] h-[13px] appearance-none border rounded-full checked:border-bg-main"
                                                        />

                                                        <RadioGroupItem
                                                            value="2"
                                                            id="r2"
                                                            className="w-[13px] h-[13px]"
                                                        />
                                                        <RadioGroupItem
                                                            value="3"
                                                            id="r3"
                                                            className="w-[13px] h-[13px]"
                                                        />
                                                        <RadioGroupItem
                                                            value="4"
                                                            id="r4"
                                                            className="w-[13px] h-[13px]"
                                                        />
                                                        <RadioGroupItem
                                                            value="5"
                                                            id="r5"
                                                            className="w-[13px] h-[13px]"
                                                        />
                                                    </RadioGroup>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    &nbsp;&nbsp;
                                    <span>Good</span>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-[12px] mr-[10px] py-[7px] px-[13px] text-white text-[14px] font-normal bg-bg-main hover:bg-[#2e6da4]"
                                >
                                    Continue
                                </button>
                            </form>
                        </Form>
                    </div>
                )}

                {activeTab === "tags" && (
                    <div>
                        <p>Monitor, Apple</p>
                    </div>
                )}

                {activeTab === "customTab" && (
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                            <br />
                            <br />
                            At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing elitr.
                            <br />
                            <br />
                            Sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}