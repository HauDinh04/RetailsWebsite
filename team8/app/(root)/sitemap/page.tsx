import React from "react";
import SiteMapList from "./site-map";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

interface SubItem {
  title: string;
  link: string;
  subItems?: SubItem[];
}

const sitemapItems1: SubItem[] = [
  {
    title: "Watches",
    link: "/kids-and-babies",
    subItems: [
      {
        title: "Men's Watches",
        link: "/kids-and-babies/toys",
      },
      {
        title: "Women's Watches",
        link: "/kids-and-babies/puzzles",
      },
      {
        title: "Kids' Watches",
        link: "/kids-and-babies/hobbies",
      },
      {
        title: "Accessories",
        link: "/kids-and-babies/strollers",
      },
    ],
  },
  {
    title: "Health & Beauty",
    link: "/kids-and-babies",
    subItems: [
      {
        title: "Perfumes",
        link: "/kids-and-babies/toys",
      },
      {
        title: "Makeup",
        link: "/kids-and-babies/puzzles",
      },
      {
        title: "Sun Care",
        link: "/kids-and-babies/hobbies",
      },
      {
        title: "Skin Care",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Eye Care",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Hair Care",
        link: "/kids-and-babies/strollers",
      },
    ],
  },
  {
    title: "Kids & Babies",
    link: "/kids-and-babies",
    subItems: [
      {
        title: "Toys",
        link: "/kids-and-babies/toys",
      },
      {
        title: "Games",
        link: "/kids-and-babies/games",
        subItems: [
          {
            title: "Test 25",
            link: "/kids-and-babies/games/test25",
          },
        ],
      },
      {
        title: "Puzzles",
        link: "/kids-and-babies/puzzles",
      },
      {
        title: "Hobbies",
        link: "/kids-and-babies/hobbies",
      },
      {
        title: "Strollers",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Health & Safety",
        link: "/kids-and-babies/health-safety",
      },
    ],
  },
  {
    title: "Sports",
    link: "/kids-and-babies",
    subItems: [
      {
        title: "Cycling",
        link: "/kids-and-babies/toys",
      },
      {
        title: "Running",
        link: "/kids-and-babies/puzzles",
      },
      {
        title: "Swimming",
        link: "/kids-and-babies/hobbies",
      },
      {
        title: "Football",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Golf",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Windsurfing",
        link: "/kids-and-babies/strollers",
      },
    ],
  },
  {
    title: "Home & Garden",
    link: "/kids-and-babies",
    subItems: [
      {
        title: "Bedding",
        link: "/kids-and-babies/toys",
      },
      {
        title: "Food",
        link: "/kids-and-babies/puzzles",
      },
      {
        title: "Furniture",
        link: "/kids-and-babies/hobbies",
      },
      {
        title: "Kitchen",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Lighting",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Tools",
        link: "/kids-and-babies/strollers",
      },
    ],
  },
  {
    title: "Wines & Spirits",
    link: "/kids-and-babies",
    subItems: [
      {
        title: "Wine",
        link: "/kids-and-babies/toys",
      },
      {
        title: "Whiskey",
        link: "/kids-and-babies/puzzles",
      },
      {
        title: "Vodka",
        link: "/kids-and-babies/hobbies",
      },
      {
        title: "Liqueurs",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Beer",
        link: "/kids-and-babies/strollers",
      },
    ],
  },
  {
    title: "Special Offers",
    link: "/kids-and-babies",
  },
  {
    title: "My Account",
    link: "/kids-and-babies",
    subItems: [
      {
        title: "Order History",
        link: "/kids-and-babies/toys",
      },
      {
        title: "Order Information",
        link: "/kids-and-babies/puzzles",
      },
      {
        title: "Return",
        link: "/kids-and-babies/hobbies",
      },
      {
        title: "Gift Voucher",
        link: "/kids-and-babies/strollers",
      },
    ],
  },
  {
    title: "Shopping Cart",
    link: "/kids-and-babies",
  },
  {
    title: "Checkout",
    link: "/kids-and-babies",
  },
  {
    title: "Search",
    link: "/kids-and-babies",
  },
  {
    title: "Information",
    link: "",
    subItems: [
      {
        title: "About Us",
        link: "/kids-and-babies/toys",
      },
      {
        title: "Email Template Page",
        link: "/kids-and-babies/puzzles",
      },
      {
        title: "Elements",
        link: "/kids-and-babies/hobbies",
      },
      {
        title: "Forms",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Careers",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Faq",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "404",
        link: "/kids-and-babies/strollers",
      },
      {
        title: "Contact Us",
        link: "/kids-and-babies/strollers",
      },
    ],
  },
];
const sitemapItems2: SubItem[] = [
  {
    title: "Special Offers",
    link: "/kids-and-babies",
  },
  {
    title: "My Account",
    link: "/kids-and-babies",
    subItems: [
      {
        title: "Order History",
        link: "/kids-and-babies/toys",
      },
      {
        title: "Order Information",
        link: "/kids-and-babies/puzzles",
      },
      {
        title: "Return",
        link: "/kids-and-babies/hobbies",
      },
      {
        title: "Gift Voucher",
        link: "/kids-and-babies/strollers",
      },
    ],
  },
  {
    title: "Shopping Cart",
    link: "/kids-and-babies",
  },
  {
    title: "Checkout",
    link: "/kids-and-babies",
  },
  {
    title: "Search",
    link: "/kids-and-babies",
  },
];
export default function SiteMap() {
  return (
    <div className="container mb-[23px]">
      <h2 className="text-[30px] text-[#222222] font-light mt-5 mb-[10px]">
        Site Map
      </h2>

      <div className="flex flex-wrap">
        <div className="md:w-5/12 w-full">
          <SiteMapList sitemapItems={sitemapItems1} />
        </div>
        <div className="md:w-4/12	">
          <SiteMapList sitemapItems={sitemapItems2} />
          <ul className="pl-[12px]">
            <li>
              <div className="flex items-center">
                <MdNavigateNext className="mr-[10px] h-[20px] text-[#444]" />
                <p className=" text-[12px] leading-[18px] text-[#444]">
                  Information
                </p>
              </div>
              <ul>
                <li className="pl-[12px] pb-[8px]">
                  <div className="flex items-center">
                    <MdNavigateNext className="mr-[10px] text-[#444]" />
                    <Link
                      href={""}
                      className="text-[12px] hover:text-[#0083c1]"
                    >
                      About Us
                    </Link>
                  </div>
                </li>
                <li className="pl-[12px] pb-[8px]">
                  <div className="flex items-center">
                    <MdNavigateNext className="mr-[10px] text-[#444]" />
                    <Link
                      href={""}
                      className="text-[12px] hover:text-[#0083c1]"
                    >
                      Email Template Page
                    </Link>
                  </div>
                </li>
                <li className="pl-[12px] pb-[8px]">
                  <div className="flex items-center">
                    <MdNavigateNext className="mr-[10px] text-[#444]" />
                    <Link
                      href={""}
                      className="text-[12px] hover:text-[#0083c1]"
                    >
                      Elements
                    </Link>
                  </div>
                </li>
                <li className="pl-[12px] pb-[8px]">
                  <div className="flex items-center">
                    <MdNavigateNext className="mr-[10px] text-[#444]" />
                    <Link
                      href={""}
                      className="text-[12px] hover:text-[#0083c1]"
                    >
                      Forms
                    </Link>
                  </div>
                </li>
                <li className="pl-[12px] pb-[8px]">
                  <div className="flex items-center">
                    <MdNavigateNext className="mr-[10px] text-[#444]" />
                    <Link
                      href={""}
                      className="text-[12px] hover:text-[#0083c1]"
                    >
                      Careers
                    </Link>
                  </div>
                </li>
                <li className="pl-[12px] pb-[8px]">
                  <div className="flex items-center">
                    <MdNavigateNext className="mr-[10px] text-[#444]" />
                    <Link
                      href={""}
                      className="text-[12px] hover:text-[#0083c1]"
                    >
                      Faq
                    </Link>
                  </div>
                </li>
                <li className="pl-[12px] pb-[8px]">
                  <div className="flex items-center">
                    <MdNavigateNext className="mr-[10px] text-[#444]" />
                    <Link
                      href={""}
                      className="text-[12px] hover:text-[#0083c1]"
                    >
                      404
                    </Link>
                  </div>
                </li>
                <li className="pl-[12px] pb-[8px]">
                  <div className="flex items-center">
                    <MdNavigateNext className="mr-[10px] text-[#444]" />
                    <Link
                      href={""}
                      className="text-[12px] hover:text-[#0083c1]"
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
