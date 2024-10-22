import Image from "next/image";
import Link from "next/link";
import FeatureProduct from "@/components/layouts/FeatureProduct";
import SmallBoxProduct from "@/components/layouts/SmallBoxProduct";
import TabsSlider from "./TabsSlider";
import ProductDetails from "./ProductDetails";
import Breadcrumb from "@/components/layouts/Breadcrumb";

const products = [
    {
        id: "1",
        name: "Sunt Molup",
        rating: 5,
        price: 100,
        image: "/images/product-2.jpg",
        oldPrice: 0,
    },
    {
        id: "2",
        name: "Lorem Ipsum",
        rating: 4,
        price: 120,
        image: "/images/product-2.jpg",
        oldPrice: 0,
    },
    {
        id: "3",
        name: "Dolor Sit",
        rating: 3,
        price: 90,
        image: "/images/product-2.jpg",
        oldPrice: 0,
    },
    {
        id: "4",
        name: "Dolor Sit",
        rating: 4,
        price: 90,
        image: "/images/product-2.jpg",
        oldPrice: 0,
    },
];

const productDetail = {
    thumbnail_url: "/images/product-1.jpg",
    images: [
        "/images/product-2.jpg",
        "/images/product-2.jpg",
        "/images/product-2.jpg",
        "/images/product-2.jpg",
        "/images/product-2.jpg",
        "/images/product-2.jpg",
    ],
    name: "Apple Cinema HD Display 30-inch",
    description: "A stunning display for creative professionals.",
    content:
        "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed for creative professionals, this display allows for easier access to tools and palettes needed for editing and formatting work. Combine this display with a Mac Pro, MacBook Pro, or PowerMac G5 and there's no limit to what you can achieve.",
    price_new: 129.99,
    price_old: 149.99,
    discount_price: 99.99,
    star: 4,
    in_stock: true,
    sku: "SKU001",
};

export default function ProductDetail() {
    return (
        <>
            <Breadcrumb
                breadcrumbItems={[
                    {
                        label: "Smartphone & Tablets",
                        link: "#",
                    },
                    {
                        label: "Bint Beef",
                        link: "#",
                    },
                ]}
            />
            <div className="mx-[-15px] flex flex-row justify-between">
                <div className="w-full xl:basis-3/4">
                    <ProductDetails productDetail={productDetail} />
                    <TabsSlider />
                </div>
                <div className="basis-1/4 shrink-0 grow hidden xl:block px-[15px]">
                    <div className="flex flex-row items-center justify-between mb-[5px]">
                        <h3 className="text-[#222222] text-heading1 font-normal">
                            Latest Product
                        </h3>
                    </div>
                    <hr className="border-dashed border border-[#f2f2f2]" />
                    <hr className="border-dashed border border-[#f2f2f2]" />
                    <hr className="border-dashed border border-[#f2f2f2]" />
                    <div className="my-[20px]">
                        {products.map((product) => (
                            <SmallBoxProduct
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                rating={product.rating}
                                price={product.price}
                                image={product.image}
                                oldPrice={product.oldPrice}
                                className="mb-[20px] text-[14px]"
                            />
                        ))}
                    </div>
                    <div>
                        <div className="relative group w-[270px] h-[322px]">
                            <Link href={"/"}>
                                <Image
                                    src="/images/left-image-static.png"
                                    alt="Sample Image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    className="object-contain z-10"
                                />
                            </Link>

                            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                                <div className="w-0 h-full bg-black-2 opacity-50 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[40px]">
                <FeatureProduct
                    breakpoints={{
                        480: { slidesPerView: 4, spaceBetween: 30 },
                        1024: { slidesPerView: 5, spaceBetween: 30 },
                    }}
                    className=""
                />
            </div>
        </>
    );
}
