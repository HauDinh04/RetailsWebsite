'use client';
import LeftNav from "@/components/layouts/LeftNav";
import SlideShow from "@/components/layouts/SlideShow";
import {CountDownProduct} from "@/components/layouts/CountDownProduct";
import FeatureProduct from "@/components/layouts/FeatureProduct";
import {useState} from "react";
import Notice from "@/components/layouts/Notice";

export default function Home() {
    const [isShow, setIsShow] = useState(true);

    return (
        <>
            <div className="flex justify-between">
                <LeftNav/>
                <SlideShow/>
            </div>
            <div className="flex ">
                <CountDownProduct thumbnail_url={'/images/product-1.jpg'} description={''} discount_price={321}
                                  price={12} name={'test home'}/>
                <CountDownProduct thumbnail_url={'/images/product-1.jpg'} description={''} discount_price={321}
                                  price={12} name={'test home'}/>
            </div>
            <FeatureProduct/>
            <Notice isShow={isShow} setIsShow={setIsShow} />
        </>
    );
}
