'use client';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ProductModal } from './ProductModal';

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

const calculateTimeLeft = (saleEndTime: string) => {
  const difference = +new Date(saleEndTime) - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

type CountDownProductType = {
  thumbnail_url: string;
  images: string[];
  name: string;
  description: string;
  price: number;
  discount_price: number;
  star: number;
  sale_end_time: string;
  in_stock: boolean;
  sku: string;
};

export function CountDownProduct({
  thumbnail_url,
  images,
  name,
  description,
  price,
  discount_price,
  star,
  sale_end_time,
  in_stock,
  sku
}: CountDownProductType) {
  const [isClient, setIsClient] = useState(false);

  const discountPercentage = Math.ceil(((price - discount_price) / price) * 100);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(sale_end_time));

  useEffect(() => {
    setIsClient(true); // Xác định client-side đã sẵn sàng
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(sale_end_time));
    }, 1000);
    return () => clearInterval(timer);
  }, [sale_end_time]);

  const renderStars = (starCount: number) => {
    const stars = [];
    const roundedStars = Math.floor(starCount);

    for (let i = 0; i < 5; i++) {
      if (i < roundedStars) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isClient) {
    return null; // Nếu ở server sẽ không render, chỉ hiểm thị khi ở client
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row group'>
        <div className='w-full lg:w-6/12 relative '>
          <div className='relative'>
            <Image
              src={thumbnail_url}
              alt='Ảnh thumbnail'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
              className='w-full h-full p-[5px] border group-hover:border-white rounded-sm'
            />
            <div className='h-[45px] w-[45px] bg-[#ff5555] absolute rounded-full top-3 right-3 flex justify-center items-center text-white text-[12px] z-20'>
              -{discountPercentage}%
            </div>

            {/* Hover overlay */}
            <div className='absolute inset-0 bg-transparent group-hover:bg-zinc-800/25 transition duration-300 ease-in-out z-10'></div>

            {/* Hover Buttons */}
            <div className='z-20 flex flex-col gap-2 absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='bg-white hover:bg-[#0083c1] hover:text-white flex justify-center items-center rounded-sm w-[40px] h-[40px] transform opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 cursor-pointer'>
                <FaHeart />
              </div>
              <div className='bg-white hover:bg-[#0083c1] hover:text-white flex justify-center items-center rounded-sm w-[40px] h-[40px] transform opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 cursor-pointer'>
                <FaExchangeAlt />
              </div>
              <div
                className='bg-white hover:bg-[#0083c1] hover:text-white justify-center items-center rounded-sm w-[40px] h-[40px] transform opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 cursor-pointer hidden md:flex'
                onClick={() => setIsModalOpen(true)}>
                <FaSearch />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-6/12 p-1 px-0 lg:px-4'>
          <div className='mt-[11px] mb-[5px] text-[12px] uppercase text-[#ff5555]'>Hurry Up! Offer ends in:</div>

          <div className='flex justify-center space-x-2 p-4'>
            <div className='flex flex-col items-center'>
              <div className='text-4xl font-bold text-gray-800'>
                {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
              </div>
              <div className='text-sm text-gray-600'>Days</div>
            </div>
            <div>:</div>
            <div className='flex flex-col items-center'>
              <div className='text-4xl font-bold text-gray-800'>
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </div>
              <div className='text-sm text-gray-600'>Hours</div>
            </div>
            <div>:</div>
            <div className='flex flex-col items-center'>
              <div className='text-4xl font-bold text-gray-800'>
                {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
              </div>
              <div className='text-sm text-gray-600'>Mins</div>
            </div>
            <div>:</div>
            <div className='flex flex-col items-center'>
              <div className='text-4xl font-bold text-gray-800'>
                {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
              </div>
              <div className='text-sm text-gray-600'>Secs</div>
            </div>
          </div>

          <hr />

          <div className='text-[18px] mt-7 group-hover:text-[#0083c1] transition duration-300 ease-in-out'>{name}</div>

          <div className='text-gray-700 text-[12px] mt-2'>{description}</div>

          <div className='flex justify-between items-center mt-5'>
            <div className='flex gap-2 items-center'>
              <div className='text-red-500 font-medium text-[18px]'>{formatCurrency(discount_price)}</div>
              <div className='line-through text-[14px] text-gray-500'>{formatCurrency(price)}</div>
            </div>
            <div className='flex gap-1 text-[12px]'>{renderStars(star)}</div>
          </div>

          <div className='text-[12px] border p-3 px-5 w-fit rounded-md mt-5 text-gray-500 cursor-pointer group-hover:bg-[#0083c1] group-hover:text-white'>
            ADD TO CART
          </div>
        </div>
      </div>

      {/* Popup */}

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        thumbnail_url={thumbnail_url}
        images={images}
        name={name}
        description={description}
        price={price}
        discount_price={discount_price}
        star={star}
        in_stock={in_stock}
        sku={sku}
      />
    </>
  );
}
