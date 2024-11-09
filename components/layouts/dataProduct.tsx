import React from "react";
import SlideShow from "@/components/customui/slideShow";
import { SwiperSlide } from "swiper/react";
import Product from "./Product";

const DataProducts = () => {
  const products = [
    { id: 1, name: "Dummy product #01", image: "/images/product-2.jpg", price: 74.0, oldPrice: 122.0, isNew: true, rating: 4.5 },
    { id: 2, name: "Dummy product #02", image: "/images/product-2.jpg", price: 65.0, oldPrice: 98.0, isNew: false, rating: 4.0 },
    { id: 3, name: "Dummy product #03", image: "/images/product-2.jpg", price: 80.0, oldPrice: 140.0, isNew: true, rating: 1.0 },
    { id: 3, name: "Dummy product #03", image: "/images/product-2.jpg", price: 80.0, oldPrice: 140.0, isNew: true, rating: 1.0 },
    { id: 3, name: "Dummy product #03", image: "/images/product-2.jpg", price: 80.0, oldPrice: 140.0, isNew: true, rating: 1.0 },
    { id: 3, name: "Dummy product #03", image: "/images/product-2.jpg", price: 80.0, oldPrice: 140.0, isNew: true, rating: 1.0 },
    { id: 3, name: "Dummy product #03", image: "/images/product-2.jpg", price: 80.0, oldPrice: 140.0, isNew: true, rating: 1.0 },
    { id: 3, name: "Dummy product #03", image: "/images/product-2.jpg", price: 80.0, oldPrice: 140.0, isNew: true, rating: 1.0 },
    { id: 3, name: "Dummy product #03", image: "/images/product-2.jpg", price: 80.0, oldPrice: 140.0, isNew: true, rating: 1.0 },
  ];

  return (
    <SlideShow title="Our Products" nextBt="next-btn" prevBt="prev-btn">
      
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Product product={product} className="border border-[#e5e5e5] rounded-[5px] p-[5px]" />
        </SwiperSlide>
      ))}
    </SlideShow>
  );
};

export default DataProducts;
