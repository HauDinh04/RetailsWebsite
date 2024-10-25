"use client";
import {useState} from "react";
import {NavLinks} from "@/app/constants";
import Link from "next/link";
import {FiMenu} from "react-icons/fi";
import {IoClose} from "react-icons/io5";
import Image from "next/image";
import SmallHorizontalBoxProduct from "@/components/pages/category/SmallHorizontalBoxProduct";

const home = [
    {
        label: "HOME PAGE - (DEFAULT)",
        image: "/images/home-1.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 2",
        image: "/images/home-2.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 3",
        image: "/images/home-2.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 4",
        image: "/images/home-2.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 5",
        image: "/images/home-2.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 6",
        image: "/images/home-2.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 7",
        image: "/images/home-2.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 8",
        image: "/images/home-2.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 9",
        image: "/images/home-2.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 10",
        image: "/images/home-2.jpg",
        href: "/"
    },
    {
        label: "HOME PAGE - LAYOUT 11",
        image: "/images/home-2.jpg",
        href: "/"
    },
]

const features = [
    {
        heading: "LISTING PAGES",
        links: [
            {
                label: "Category Page 1",
                href: "/categories",
            },
            {
                label: "Category Page 2",
                href: "/categories",
            },
            {
                label: "Category Page 3",
                href: "/categories",
            }
        ]
    },
    {
        heading: "PRODUCTS PAGES",
        links: [
            {
                label: "Image Size - big",
                href: "/products/1",
            },
            {
                label: "Image Size - medium",
                href: "/products/1",
            },
            {
                label: "Image Size - small",
                href: "/products/1",
            }
        ]
    },
    {
        heading: "SHOPPING PAGES",
        links: [
            {
                label: "Shopping Cart Page",
                href: "/cart",
            },
            {
                label: "Checkout Page",
                href: "/checkout",
            },
            {
                label: "Compare Page",
                href: "/compare",
            },
            {
                label: "Wishlist Page",
                href: "/wishlist",
            }
        ]
    },
    {
        heading: "MY ACCOUNT PAGES",
        links: [
            {
                label: "Login Page",
                href: "/login",
            },
            {
                label: "Register Page",
                href: "/register",
            },
            {
                label: "My Account",
                href: "/myaccount",
            },
            {
                label: "Order History",
                href: "/orders/history",
            },
            {
                label: "Order Information",
                href: "/orders/information/1",
            },
            {
                label: "Product Returns",
                href: "/return",
            },
            {
                label: "Gift Voucher",
                href: "/giftvoucher",
            }
        ]
    }
]

const pages = [
    {
        label: "Faq",
        href: "/faq",
    },
    {
        label: "Site map",
        href: "/sitemap",
    },
    {
        label: "Contact US",
        href: "/contact",
    },
    {
        label: "Banner Effect",
        href: "/effects/banner",
    },
    {
        label: "About Us 1",
        href: "/about",
    },
    {
        label: "About Us 2",
        href: "/about",
    },
    {
        label: "About Us 3",
        href: "/about",
    },
    {
        label: "About Us 4",
        href: "/about",
    }
]

const categories = [
    {
        image: "/images/home-2.jpg",
        heading: "automotive",
        Links: [
            {
                href: "/",
                label: 'Car Alarms and Security'
            },
            {
                href: "/",
                label: 'Car Audio and Speakers'
            },
            {
                href: "/",
                label: 'Gadgets & Auto Parts'
            },
            {
                href: "/",
                label: 'More Car Accessories'
            }
        ]
    },
    {
        image: "/images/home-2.jpg",
        heading: "Electronics",
        Links: [
            {
                href: "/",
                label: 'Battereries & Chargers'
            },
            {
                href: "/",
                label: 'Headphones, Headsets'
            },
            {
                href: "/",
                label: 'Home Audio'
            },
            {
                href: "/",
                label: 'Mp3 Players Accessories'
            }
        ]
    },
    {
        image: "/images/home-2.jpg",
        heading: "Jewelry & Watches",
        Links: [
            {
                href: "/",
                label: 'Earings'
            },
            {
                href: "/",
                label: 'Wedding Rings'
            },
            {
                href: "/",
                label: 'Men Watches'
            }
        ]
    },
    {
        image: "/images/home-2.jpg",
        heading: "Bags, Holiday Supplies",
        Links: [
            {
                href: "/",
                label: 'Gift & Lifestyle Gadgets'
            },
            {
                href: "/",
                label: 'Gift for Man'
            },
            {
                href: "/",
                label: 'Gift for Woman'
            },
            {
                href: "/",
                label: 'Lighter & Cigar Supplies'
            }
        ]
    }
]

const accessories = {
    information: [
        {
            heading: 'Automotive',
            links: [
                {
                    href: "/",
                    label: "Car Alarms and Security"
                },
                {
                    href: "/",
                    label: "Car Audio & Speakers"
                },
                {
                    href: "/",
                    label: "Car Alarms and Security"
                },
                {
                    href: "/",
                    label: "Gadgets & Auto Parts"
                }
            ]
        },
        {
            heading: 'Sport & Outdoors',
            links: [
                {
                    href: "/",
                    label: "Camping & Hiking"
                },
                {
                    href: "/",
                    label: "Cameras & Photo"
                },
                {
                    href: "/",
                    label: "Cables & Connectors"
                }
            ]
        },
        {
            heading: 'Smartphone & Tablets',
            links: [
                {
                    href: "/",
                    label: "Accessories for i Pad"
                },
                {
                    href: "/",
                    label: "Apparel"
                },
                {
                    href: "/",
                    label: "Accessories for iPhone"
                }
            ]
        },
        {
            heading: 'Electronics',
            links: [
                {
                    href: "/",
                    label: "Battereries & Chargers"
                },
                {
                    href: "/",
                    label: "Bath & Body"
                },
                {
                    href: "/",
                    label: "Outdoor & Traveling"
                }
            ]
        }
    ],
    bestSeller: {
        heading: "bestseller",
        products: [
            {
                id: "1",
                image: "/images/product-1.jpg",
                name: "Filet Migin",
                price: 123,
                rating: 5,
                oldPrice: 0
            },
            {
                id: "2",
                image: "/images/product-1.jpg",
                name: "Filet Migin",
                price: 321,
                rating: 5,
                oldPrice: 0
            },
            {
                id: "2",
                image: "/images/product-1.jpg",
                name: "Filet Migin",
                price: 154,
                rating: 5,
                oldPrice: 0
            },
        ]
    }
}


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenuIndex, setActiveMenuIndex] = useState<null | number>(null);
    const [isHoveringOnMenu, setIsHoveringOnMenu] = useState(false);

    const handleMouseEnter = (index: number) => {
        setActiveMenuIndex(index);
    };

    const handleMouseLeave = () => {
        if (!isHoveringOnMenu) {
            setTimeout(() => setActiveMenuIndex(null), 300); // Thêm khoảng trễ 300ms khi tắt menu
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex bg-bg-main py-[10px] h-[48px]">
            <div className="flex container items-center justify-between">
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl focus:outline-none"
                    >
                        <FiMenu/>
                    </button>
                </div>

                <div className="hidden lg:flex items-center gap-[10px]">
                    {NavLinks.map((link, index) => (
                        <div key={link.url} className="relative">
                            {index === 5 && (
                                <Link href={link.url}
                                      className={`flex items-center text-left px-5 py-[5px] uppercase text-[14px] font-bold leading-[18px] ${
                                          index === activeMenuIndex ? "text-bg-main bg-white" : "text-white"
                                      } hover:text-bg-main hover:bg-white rounded-lg`}>
                                    {link.label}
                                </Link>
                            )}

                            {index === 0 && (
                                <div
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => {
                                        if (!isHoveringOnMenu) {
                                            handleMouseLeave();
                                        }
                                    }}
                                    className={`flex items-center cursor-pointer text-left px-5 py-[5px] uppercase text-[14px] font-bold leading-[18px] 
                                    text-bg-main bg-white hover:text-bg-main hover:bg-white rounded-lg`}
                                >
                                    {link.label}
                                </div>
                            )}

                            {index !== 5 && index !== 0 && (
                                <div
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => {
                                        if (!isHoveringOnMenu) {
                                            handleMouseLeave();
                                        }
                                    }}
                                    className={`flex items-center cursor-pointer text-left px-5 py-[5px] uppercase text-[14px] font-bold leading-[18px] ${
                                        index === activeMenuIndex ? "text-bg-main bg-white" : "text-white"
                                    } hover:text-bg-main hover:bg-white rounded-lg`}
                                >
                                    {link.label}
                                </div>
                            )}

                            {activeMenuIndex === 0 && index === 0 && (
                                <div
                                    onMouseEnter={() => setIsHoveringOnMenu(true)}
                                    onMouseLeave={() => {
                                        setIsHoveringOnMenu(false);
                                        handleMouseLeave();
                                    }}
                                    className="absolute top-full z-[30] p-5 grid grid-cols-4 left-0 mt-2 bg-white lg:w-[90dvw] xl:w-[70dvw] 2xl:w-[60dvw] rounded shadow-lg gap-[30px]"
                                >
                                    {home.map((item, index) => (
                                        <Link href={item.href} key={index}
                                              className="w-full text-center group flex flex-col gap-[10px]">
                                            <div className="relative aspect-[3/1.8] group-hover:bg-[rgba(0,0,0,0.2)]">
                                                <Image fill sizes={'50'} alt={item.label} src={item.image}
                                                       className={'object-contain border border-solid border-[#ddd] w-full p-[3px]'}/>
                                            </div>
                                            <div
                                                className="group-hover:text-[#0083c1] text-[12px] uppercase">{item.label}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {activeMenuIndex === 1 && index === 1 && (
                                <div
                                    onMouseEnter={() => setIsHoveringOnMenu(true)}
                                    onMouseLeave={() => {
                                        setIsHoveringOnMenu(false);
                                        handleMouseLeave();
                                    }}
                                    className="absolute top-full z-[30] p-5 grid grid-cols-4 left-0 mt-2 bg-white lg:w-[70dvw] xl:w-[65dvw]
                                     2xl:w-[60dvw] rounded shadow-lg gap-[30px]"
                                >
                                    {features.map((item, index) => (
                                        <div key={index} onMouseEnter={() => setIsHoveringOnMenu(true)}
                                             className="flex flex-col gap-[5px] text-[13px]">
                                            <div onMouseEnter={() => setIsHoveringOnMenu(true)}
                                                 className="text-[#222222] cursor-pointer hover:text-[#0083c1] font-bold leading-[24px]
                                                 border-b border-solid border-[#ddd] pb-[5px]">{item.heading}</div>
                                            <div onMouseEnter={() => setIsHoveringOnMenu(true)}
                                                 className="flex flex-col gap-[5px]">
                                                {item.links.map((item, index) => (
                                                    <Link onMouseEnter={() => setIsHoveringOnMenu(true)} key={index}
                                                          href={item.href}
                                                          className="text-[#828282] hover:text-[#0083c1]">{item.label}</Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeMenuIndex === 2 && index === 2 && (
                                <div
                                    onMouseEnter={() => setIsHoveringOnMenu(true)}
                                    onMouseLeave={() => {
                                        setIsHoveringOnMenu(false);
                                        handleMouseLeave();
                                    }}
                                    className="absolute top-full z-[30] p-5 grid grid-cols-2 left-0 mt-2 bg-white lg:w-[50dvw] xl:w-[40dvw]
                                     2xl:w-[30dvw] rounded shadow-lg gap-x-[30px] gap-y-[5px]"
                                >
                                    {pages.map((item, index) => (
                                        <Link href={item.href} key={index} className="text-[13px] hover:text-[#0083c1]">
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {activeMenuIndex === 3 && index === 3 && (
                                <div
                                    onMouseEnter={() => setIsHoveringOnMenu(true)}
                                    onMouseLeave={() => {
                                        setIsHoveringOnMenu(false);
                                        handleMouseLeave();
                                    }}
                                    className="absolute top-full z-[30] p-5 grid grid-cols-4 left-[-240%] mt-2 bg-white lg:w-[90dvw] xl:w-[70dvw]
                                     2xl:w-[60dvw] rounded shadow-lg gap-x-[30px]"
                                >
                                    {categories.map((item, index) => (
                                        <div key={index} className={'cursor-pointer flex flex-col gap-[10px]'}>
                                            <div className="relative w-full aspect-[3/2]">
                                                <Image alt={item.heading} fill sizes={'100'} src={item.image}/>
                                            </div>
                                            <div onMouseEnter={() => setIsHoveringOnMenu(true)}
                                                 className="text-[#222222] cursor-pointer hover:text-[#0083c1] font-bold leading-[24px]
                                                 border-b border-solid border-[#ddd] pb-[5px]">{item.heading}</div>
                                            <div className="flex flex-col gap-[5px]">
                                                {item.Links.map((item, index) => (
                                                    <Link href={item.href} key={index}
                                                          className={'text-[#828282] text-[13px] hover:text-[#0083c1]'}>
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeMenuIndex === 4 && index === 4 && (
                                <div
                                    onMouseEnter={() => setIsHoveringOnMenu(true)}
                                    onMouseLeave={() => {
                                        setIsHoveringOnMenu(false);
                                        handleMouseLeave();
                                    }}
                                    className="absolute top-full z-[30] p-5 grid grid-cols-4 left-[-330%] mt-2 bg-white lg:w-[90dvw] xl:w-[70dvw]
                                     2xl:w-[60dvw] rounded shadow-lg gap-[30px]"
                                >
                                    <div className="col-span-3 grid grid-cols-2 gap-x-[30px] gap-y-0">
                                        {accessories.information.map((item, index) => (
                                            <div key={index} className={'flex flex-col gap-[10px]'}>
                                                <div onMouseEnter={() => setIsHoveringOnMenu(true)}
                                                     className="text-[#222222] cursor-pointer hover:text-[#0083c1] font-bold leading-[24px]
                                                 border-b border-solid border-[#ddd] pb-[5px]">{item.heading}</div>
                                                <div className="flex flex-col gap-[5px]">
                                                    {item.links.map((item, index) => (
                                                        <Link href={item.href} key={index}>
                                                            {item.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-[10px]">
                                        <div onMouseEnter={() => setIsHoveringOnMenu(true)}
                                             className="text-[#222222] cursor-pointer hover:text-[#0083c1] font-bold leading-[24px]
                                                 border-b border-solid border-[#ddd] pb-[5px]">{accessories.bestSeller.heading}</div>
                                        <div className="">
                                            {accessories.bestSeller.products.map((item, index) => (
                                                <SmallHorizontalBoxProduct key={index} name={item.name}
                                                                           price={item.price} rating={item.rating}
                                                                           image={item.image} id={item.id}
                                                                           oldPrice={item.oldPrice}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {isMenuOpen && (
                <div className="xl:hidden bg-white text-black w-2/5 h-full absolute top-12 left-0 py-2 z-10 ">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white text-xl absolute right-0"
                    >
                        <IoClose className="bg-black"/>
                    </button>
                    {NavLinks.map((link) => (
                        <Link
                            href={link.url}
                            key={link.url}
                            className={`block px-6 py-2 uppercase text-[14px] font-bold leading-[18px] hover:text-bg-main hover:bg-white`}
                            onClick={toggleMenu}
                        >
                            {link.label}
                        </Link>
                    ))}

                </div>
            )}
        </div>
    );
};

export default NavBar;
