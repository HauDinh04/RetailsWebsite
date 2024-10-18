"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosStar } from "react-icons/io";

export default function TabsSlider() {
    const [activeTab, setActiveTab] = useState("description");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };
    return (
        <div className="pr-[15px] pt-[70px] mb-[35px]">
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
                            Pro, MacBook Pro, or PowerMac G5 and there's no
                            limit to what you can achieve.
                            <br />
                            <br />
                            The Cinema HD features an active-matrix liquid
                            crystal display that produces flicker-free images
                            that deliver twice the brightness, twice the
                            sharpness and twice the contrast ratio of a typical
                            CRT display. Unlike other flat panels, it's designed
                            with a pure digital interface to deliver
                            distortion-free images that never need adjusting.
                            With over 4 million digital pixels, the display is
                            uniquely suited for scientific and technical
                            applications such as visualizing molecular
                            structures or analyzing geological data.
                            <br />
                            <br />
                            Offering accurate, brilliant color performance, the
                            Cinema HD delivers up to 16.7 million colors across
                            a wide gamut allowing you to see subtle nuances
                            between colors from soft pastels to rich jewel
                            tones. A wide viewing angle ensures uniform color
                            from edge to edge. Apple's ColorSync technology
                            allows you to create custom profiles to maintain
                            consistent color onscreen and in print. The result:
                            You can confidently use this display in all your
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
                        <div className="overflow-x-auto w-full">
                            <table
                                className={
                                    "w-full min-w-[600px] text-[12px] table-auto text-left border-collapse border border-solid border-[#ddd] "
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
                                                Best this product opencart
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
                        <p>Review 1: This display is fantastic...</p>
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
