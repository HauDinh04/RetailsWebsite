import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export function CountDownProduct({
  thumbnail_url,
  name,
  description,
  price,
  discount_price,
}: {
  thumbnail_url: string;
  name: string;
  description: string;
  price: number;
  discount_price: number;
}) {
  const discountPercentage = Math.round(
    ((discount_price - price) / discount_price) * 100
  );

  return (
    <div className="flex">
      <div className="w-6/12 relative ">
        <img
          src={thumbnail_url}
          alt=""
          className="w-full p-[5px] border hover:border-0 rounded-sm"
        />
        <div className="h-[45px] w-[45px] bg-[#ff5555] absolute rounded-full top-3 right-3 flex justify-center items-center text-white text-[12px] z-10">
          -{discountPercentage}%
        </div>
        <div className="hover:bg-transparent/25 h-full w-full absolute top-0 right-0 transition duration-300 ease-in-out"></div>
      </div>
      <div className="w-6/12 p-1 px-4">
        <div className="mt-[11px] mb-[5px] text-[12px] uppercase text-[#ff5555]">
          Hurry Up! Offer ends in:
        </div>

        <div className="flex justify-center space-x-2 p-4">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-gray-800">00</div>
            <div className="text-sm text-gray-600">Days</div>
          </div>
          <div>:</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-gray-800">00</div>
            <div className="text-sm text-gray-600">Hours</div>
          </div>
          <div>:</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-gray-800">00</div>
            <div className="text-sm text-gray-600">Mins</div>
          </div>
          <div>:</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-gray-800">00</div>
            <div className="text-sm text-gray-600">Secs</div>
          </div>
        </div>

        <hr />

        <div className="text-[18px] mt-7 hover:text-[#0083c1] transition duration-300 ease-in-out">
          {name}
        </div>

        <div className="text-gray-700 text-[12px] mt-2">{description}</div>

        <div className="flex justify-between mt-5">
          <div className="flex gap-2 ">
            <div className="text-red-500 font-medium text-[18px]">
              {formatCurrency(price)}
            </div>
            <div className="line-through text-[14px] text-gray-500">
              {formatCurrency(discount_price)}
            </div>
          </div>
          <div className="flex gap-1 text-[12px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
        </div>

        <div className="text-[12px] border p-3 px-5 w-fit rounded-md mt-5 text-gray-500 cursor-pointer hover:bg-[#0083c1] hover:text-white">
          ADD TO CART
        </div>
      </div>
    </div>
  );
}
