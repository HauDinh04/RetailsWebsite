"use client";
import Image from "next/image";

const ProductCompare = () => {
  const products = [
    {
      name: "sản phẩm 1",
      image: "/images/blog-3.jpg",
      price: 500000,
      model: "pt01",
      brand: "apple",
      availability: "in stock",
      rating: "4.5",
      summary: "lorem ",
      weight: "1.45kg",
      dimensions: "0.00mn x 0.00mn",
      speed:"100mhz",
      memory:4,
    },
    {
      name: "sản phẩm 2",
      image: "/images/blog-3.jpg",
      price: 500000,
      model: "pt01",
      brand: "samsung",
      availability: "in stock",
      rating: "4.5",
      summary: "lorem ",
      weight: "1.45kg",
      dimensions: "0.00mn x 0.00mn",
      speed:"100mhz",
      memory:4,
    },
    {
      name: "sản phẩm 1",
      image: "/images/blog-3.jpg",
      price: 500000,
      model: "pt03",
      brand: "apple",
      availability: "in stock",
      rating: "4.5",
      summary: "lorem ",
      weight: "1.45kg",
      dimensions: "0.00mn x 0.00mn",
      speed:"100mhz",
      memory:4,
    },
    {
      name: "sản phẩm 1",
      image: "/images/blog-3.jpg",
      price: 500000,
      model: "pt03",
      brand: "apple",
      availability: "in stock",
      rating: "4.5",
      summary: "lorem ",
      weight: "1.45kg",
      dimensions: "0.00mn x 0.00mn",
      speed:"100mhz",
      memory:4,
    },
  ];
  return (
    <div className="">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="text-info font-bold text-black-2">
          <tr>
            <th className="p-2">Products Details</th>
            {products.map((product, index) => (
              <th key={index} className="text-red-600 border border-gray-300 px-4 py-2">
                {product.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">Image</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                <Image src={product.image} alt={product.name} width={100} height={100} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">Price</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                {product.price} VND
              </td>
            ))}
          </tr>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">Model</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                {product.model}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">Brand</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                {product.brand}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">Availability</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                {product.availability}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">Summary</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                {product.rating}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">Weight</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                {product.weight}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">Dimensions</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                {product.dimensions}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">ClockSpeed</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                {product.speed}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border text-info border-gray-300 px-4 py-2">Memory</td>
            {products.map((product, index) => (
              <td key={index} className="border text-info border-gray-300 px-4 py-2">
                {product.memory} GB
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductCompare;
