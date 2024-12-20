'use client';
import React, {useEffect, useState} from 'react';
import SmallHorizontalBoxProduct from "@/components/pages/category/SmallHorizontalBoxProduct";
import {fetchProduct} from "@/lib/Categories.action";

function LatestProduct() {
    const [products, setProducts] = useState([] as ProductType[]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProduct()
            .then(res => {
                if (res.message) {
                    return [
                        {
                            "id": "1",
                            "category_id": "1",
                            "name": "Sunt Molup",
                            "description": "A stunning display for creative professionals.",
                            "rating": 3.5,
                            "price": 100,
                            "image": "/images/sua_tuoi_horizon_organic.webp",
                            "oldPrice": 50,
                            "discount_price": 90,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU001",
                            "images": [
                                "/images/792f11308ba03ae698ec8c42eedbff80.jpg",
                                "/images/premium_photo-1669652639337-c513cc42ead6.jpg",
                                "/images/fa8e8d_795310e1890c45d89b2ac85172faad72~mv2.webp",
                                "/images/2b054882609bbaf6728aca0368212c14.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "2",
                            "category_id": "1",
                            "name": "Sunt Molup 2",
                            "description": "A stunning display for creative professionals.",
                            "rating": 3,
                            "price": 150,
                            "image": "/images/premium_photo-1669652639337-c513cc42ead6.jpg",
                            "oldPrice": 0,
                            "discount_price": 80,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU002",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "3",
                            "category_id": "1",
                            "name": "Sunt Molup 3",
                            "description": "A stunning display for creative professionals.",
                            "rating": 2.8,
                            "price": 250,
                            "image": "/images/fa8e8d_795310e1890c45d89b2ac85172faad72~mv2.webp",
                            "oldPrice": 122,
                            "discount_price": 170,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU003",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                        {
                            "id": "4",
                            "category_id": "2",
                            "name": "Sunt Molup 4",
                            "description": "A stunning display for creative professionals.",
                            "rating": 5,
                            "price": 500,
                            "image": "/images/product4.jpg",
                            "oldPrice": 400,
                            "discount_price": 30,
                            "in_stock": true,
                            "isNew": true,
                            "sku": "SKU004",
                            "images": [
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg",
                                "/images/product-2.jpg"
                            ]
                        },
                    ]
                } else {
                    return res.data;
                }
            })
            .then((res: {data: []}) => {
                const array = res.data.slice(0, 9);
                setProducts(array as ProductType[]);
                setIsLoading(false);
            });
    }, [])

    return (
        <div>
            <h1 className={'text-[22px] text-[#222222] mb-[10px]'}>Latest Product</h1>
            <div className="mt-[20px] flex flex-col gap-[20px]">
                {!isLoading && products && products.length > 0 && products.map((item, index) => (
                    <SmallHorizontalBoxProduct key={index} image={item.image} name={item.name} price={item.price}
                                               oldPrice={item.oldPrice} id={item.id} rating={item.rating}/>
                ))}
                {isLoading && (
                    <div className={'text-heading3'}>Loading ...</div>
                )}
            </div>
        </div>
    );
}

export default LatestProduct;