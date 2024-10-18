import ProductCompare from "@/components/layouts/ProductCompare";
import React from "react";

const Compare = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <h2 className="py-4 text-heading2-bold">Product Comparison</h2>
      </div>
      <ProductCompare />
    </div>
  );
};

export default Compare;
