import ProductCompare from "@/components/layouts/ProductCompare";
import React from "react";
import Breadcrumb from "@/components/layouts/Breadcrumb";

const Compare = () => {
  return (
    <div className="mb-[40px]">
        <Breadcrumb breadcrumbItems={[
            {
                label: "Product Comparison",
                link: "/compare",
            },
        ]}/>
        <div className="mt-[20px] font-light mb-[10px] text-[#222222] text-[30px]">Product Comparison</div>
      <ProductCompare />
    </div>
  );
};

export default Compare;
