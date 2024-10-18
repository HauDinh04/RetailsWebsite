import BoxBlogHorizonta from "@/components/layouts/BoxBlogHorizonta";
import React from "react";

function Page() {
        const product = {
        label: 'Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet b',
        image: '/images/blog-3.jpg', // Đường dẫn tới ảnh trong thư mục public
    };
  return (
    <div>
      <h1 className={"text-center"}>Đây là trang test</h1>
      <BoxBlogHorizonta
        label={product.label}
        image={product.image}
                />
    </div>
  );
}

export default Page;
