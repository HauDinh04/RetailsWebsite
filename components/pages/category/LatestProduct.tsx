import React from 'react';
import SmallHorizontalBoxProduct from "@/components/pages/category/SmallHorizontalBoxProduct";

function LatestProduct() {
    const products = [
        {
            id: "1",
            name: 'Sunt Molup',
            image: '/images/product-1.jpg',
            price: 123,
            oldPrice: 0,
            rating: 4.3
        },
        {
            id: "1",
            name: 'Et Spare',
            image: '/images/product-1.jpg',
            price: 123,
            oldPrice: 0,
            rating: 4.3
        },
        {
            id: "1",
            name: 'Sunt Molup',
            image: '/images/product-1.jpg',
            price: 123,
            oldPrice: 0,
            rating: 4.3
        },
        {
            id: "1",
            name: 'Sunt Molup',
            image: '/images/product-1.jpg',
            price: 123,
            oldPrice: 0,
            rating: 4.3
        },

    ]

    return (
        <div>
            <h1 className={'text-[22px] text-[#222222] mb-[10px]'}>Latest Product</h1>
            <div className="mt-[20px] ">
                {products.map((item, index) => (
                    <SmallHorizontalBoxProduct key={index} image={item.image} name={item.name} price={item.price}
                                               oldPrice={item.oldPrice} id={item.id} rating={item.rating}/>
                ))}
            </div>
            <div className="">

            </div>
        </div>
    );
}

export default LatestProduct;