// import BoxBlogHorizonta from "@/components/layouts/BoxBlogHorizonta";
// import React from "react";

// function Page() {
//         const product = {
//         label: 'Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet b',
//         image: '/images/blog-3.jpg', // Đường dẫn tới ảnh trong thư mục public
//     };
//   return (
//     <div>
//       <h1 className={"text-center"}>Đây là trang test</h1>
//       <BoxBlogHorizonta
//         label={product.label}
//         image={product.image}
//                 />
//     </div>
//   );
// }

// export default Page;

'use client';

import React from 'react';
import InformativeProduct from '@/components/layouts/InformativeProduct';
import BlogHorizontal from '@/components/layouts/BoxBigBlogHorizontal';

function Page() {
    const product = {
        id: '1',
        name: 'Sample Product',
        rating: 3.8,
        price: 99.99,
        oldPrice: 120.00,
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . ',
        image: '/images/smallproductimage.jpg',
    };
    // const product = {
    //     id: '1',
    //     title: 'Sample Blog',
    //     rating: 3.8,
    //     price: 99.99,
    //     oldPrice: 120.00,
    //     content: 'Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet b',
    //     image: '/images/blog-3.jpg',
    //     postTime: '25/12/2024',
    //     countComments: 23
    // };
    return (
        <div className="p-4">
            <h1 className="text-center text-3xl mb-6">Đây là trang test</h1>

            <InformativeProduct
                id={product.id}
                name={product.name}
                rating={product.rating}
                price={product.price}
                oldPrice={product.oldPrice}
                content={product.content}
                DiscountPercentage={ Math.floor(((product.oldPrice - product.price) / product.oldPrice) * 100)}
                image={product.image}
            />
            <InformativeProduct
                id={product.id}
                name={product.name}
                rating={product.rating}
                price={product.price}
                oldPrice={product.oldPrice}
                content={product.content}
                DiscountPercentage={ Math.floor(((product.oldPrice - product.price) / product.oldPrice) * 100)}
                image={product.image}
            />
            {/* <BlogHorizontal
                id={product.id}
                title={product.title}
                content={product.content}
                DiscountPercentage={ Math.floor(((product.oldPrice - product.price) / product.oldPrice) * 100)}
                image={product.image}
                postTime={product.postTime}
                countComments={product.countComments}
            /> */}
        </div>
    );
}

export default Page;