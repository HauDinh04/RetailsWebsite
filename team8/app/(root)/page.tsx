"use client";
import LeftNav from "@/components/layouts/LeftNav";


// import { CountDownProduct } from "@/components/layouts/CountDownProduct";
// import FeatureProduct from "@/components/layouts/FeatureProduct";
// import { useState } from "react";
// import Notice from "@/components/layouts/Notice";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbPigMoney } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import FeatureProduct from "@/components/layouts/FeatureProduct";

export default function Home() {
  // /  const [isShow, setIsShow] = useState(true);

  return (
    <div className="items-center justify-center py-[10px] ">
      <div className="flex justify-between ">
        <LeftNav />

      </div>
      <div className="mt-4">
        <div className="py-[10px] grid grid-cols-1 md:grid-cols-3  ">
          <div className="flex border justify-center items-center sm:justify-start p-5">
            <IoRocketOutline className="text-[30px]" />
            <div className="ml-4">
              <h2 className="uppercase text-sub-heading-bold">
                free shipping & return{" "}
              </h2>
              <span className="text-info text-price-2">
                Free shipping on orders $49
              </span>
            </div>
          </div>
          <div className="flex justify-center border items-center sm:justify-start p-5">
            <TbPigMoney className="text-[30px]" />
            <div className="ml-4">
              <h2 className="uppercase text-sub-heading-bold">
                money guarantee
              </h2>
              <span className="text-info text-price-2">
                30 days money back guarantee
              </span>
            </div>
          </div>
          <div className="flex border justify-center items-center sm:justify-start p-5">
            <TfiHeadphoneAlt className="text-[30px]" />
            <div className="ml-4">
              <h2 className="uppercase text-sub-heading-bold">
                online support
              </h2>
              <span className="text-info text-price-2">
                We support online 24/24 on day
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
      
      </div>
      <FeatureProduct />
    </div>

    // <>
    //     <div className="flex justify-between">
    //         <LeftNav/>
    //         <SlideShow/>
    //     </div>
    //     <div className="flex ">
    //         <CountDownProduct thumbnail_url={'/images/product-1.jpg'} description={''} discount_price={321}
    //                           price={12} name={'test home'}/>
    //         <CountDownProduct thumbnail_url={'/images/product-1.jpg'} description={''} discount_price={321}
    //                           price={12} name={'test home'}/>
    //     </div>
    //     <FeatureProduct/>
    //     <Notice isShow={isShow} setIsShow={setIsShow}  />
    // </>
  );
}
