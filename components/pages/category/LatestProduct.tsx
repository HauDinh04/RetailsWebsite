'use client';
import React, {useEffect, useState} from 'react';
import SmallHorizontalBoxProduct from "@/components/pages/category/SmallHorizontalBoxProduct";
import {fetchProductByPage} from "@/lib/Categories.action";


function LatestProduct() {
    const [products, setProducts] = useState([] as ProductType[]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProductByPage(1, 4)
            .then(data => {
                setProducts(data as ProductType[]);
                setIsLoading(false)
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
            <div className="">

            </div>
        </div>
    );
}

export default LatestProduct;