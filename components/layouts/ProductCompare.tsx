"use client";
import Image from "next/image";
import AddToCart from "../customui/addTocart";
import RemoveCart from "../customui/removeCart";

const ProductCompare = () => {
  const products = [
    {
      name: "product 1",
      image: "/images/blog-3.jpg",
      price: 500000,
      model: "pt01",
      brand: "apple",
      availability: "in stock",
      rating: "4.5",
      summary:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..",
      weight: "1.45kg",
      dimensions: "0.00mn x 0.00mn",
      speed: "100mhz",
    },
    {
      name: "product 2",
      image: "/images/blog-3.jpg",
      price: 500000,
      model: "pt01",
      brand: "samsung",
      availability: "in stock",
      rating: "4.5",
      summary:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.. ",
      weight: "1.45kg",
      dimensions: "0.00mn x 0.00mn",
      speed: "100mhz",
      memory: "Hammered metal outer - Semi-precious stone embellishments",
    },
    {
      name: "product 3",
      image: "/images/blog-3.jpg",
      price: 500000,
      model: "pt03",
      brand: "apple",
      availability: "in stock",
      rating: "4.5",
      summary:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.. ",
      weight: "1.45kg",
      dimensions: "0.00mn x 0.00mn",
      speed: "100mhz",
    },
  ];
  return (
    <div className="">
      <div className="p-2 border text-info font-bold bg-[#f0f0f0] wi-full ">
        <p className="text-[#555555]">Product Details</p>{" "}
      </div>
      <div className="w-full overflow-x-auto ">
        <table className="min-w-full text-left table-auto border-collapse border border-gray-300">
          <thead className="text-info font-bold text-black-2">
            <tr>
              <th className="p-2">Product</th>
              {products.map((product, index) => (
                <th
                  key={index}
                  className="text-red-600 border border-gray-300 px-4 py-2"
                >
                  {product.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                Image
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2 items-center"
                >
                  <div className="flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                   className="border p-1"/>
                   </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                Price
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  {product.price} VND
                </td>
              ))}
            </tr>
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                Model
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  {product.model}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                Brand
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  {product.brand}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                Availability
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  {product.availability}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                Summary
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  {product.summary}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                Weight
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  {product.weight}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                Dimensions (L x W x H)
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  {product.dimensions}
                </td>
              ))}
            </tr>
            {/* <td className="bg-[#f0f0f0] text-[12px] font-bold p-2">Processor</td> */}
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                ClockSpeed
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  {product.speed}
                </td>
              ))}
            </tr>
            {/* <td className="bg-[#f0f0f0] text-[12px] font-bold p-2">Memory</td> */}
            <tr>
              <td className="border text-info border-gray-300 px-4 py-2">
                RAM
              </td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  {product.memory}
                </td>
              ))}
            </tr>
            <tr>
              <td className=""></td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border text-info border-gray-300 px-4 py-2"
                >
                  <AddToCart product={product} />
                  <RemoveCart product={product} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductCompare;
