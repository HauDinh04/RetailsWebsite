'use client';
import LeftNav from "@/components/layouts/LeftNav";
import SlideShow from "@/components/layouts/SlideShow";
import {CountDownProduct} from "@/components/layouts/CountDownProduct";
import FeatureProduct from "@/components/layouts/FeatureProduct";



export default function Home() {


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
       
        </>
    );
}
