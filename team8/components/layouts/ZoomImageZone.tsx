'use client';
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import {MdOutlineArrowLeft, MdOutlineArrowRight} from "react-icons/md";

function ZoomImageZone({isShow, setIsShow, imageArray, className = ''}: {
    isShow: boolean, setIsShow: React.Dispatch<React.SetStateAction<boolean>>,
    imageArray: {
        src: string,
        name?: string
    }[], className?: string
}) {
    const maxLength = imageArray.length;
    const [index, setIndex] = useState(0);
    const handleRight = () => {
        if (index < maxLength - 1) {
            setIndex((prev) => prev + 1);
        } else {
            setIndex(0);
        }
    }
    const handleLeft = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        } else {
            setIndex(maxLength - 1);
        }
    };
    const [size, setSize] = useState({width: 0, height: 0});

    useEffect(() => {
        const img = new window.Image();
        img.src = imageArray[index].src;
        img.onload = () => {
            setSize({width: img.width, height: img.height});
        };
    }, [index]);

    if (isShow) {
        return (
            <div className={'fixed z-20 inset-0 w-full h-screen bg-[rgba(0,0,0,0.65)]' + ` ${className}`}>
                <div className="w-full h-screen flex justify-between items-center">
                    <div onClick={handleLeft} className="w-[90px] h-[110px] flex justify-center items-center">
                        <MdOutlineArrowLeft className={'text-[250px] text-[rgba(255,255,255,0.7)] hover:text-white'}/>
                    </div>
                    <div className="relative w-auto h-auto">
                        <Image src={imageArray[index].src} alt={imageArray[index].name || ''}
                               className={'cursor-pointer object-contain'} sizes="100vw" width={size.width}
                               height={size.height}/>
                        <div className="absolute top-[1%] text-[25px] text-[rgba(0,0,0,0.7)] right-[3%] cursor-zoom-out"
                             onClick={() => setIsShow(false)}>x
                        </div>
                        <div
                            className="absolute right-[1%] md:bottom-[-4%] sm:bottom-[-5%] bottom-[-9%] text-[#ccc]">{index + 1} of {maxLength}</div>
                    </div>
                    <div onClick={handleRight} className="w-[90px] h-[110px] flex justify-center items-center">
                        <MdOutlineArrowRight className={'text-[250px] text-[rgba(255,255,255,0.7)] hover:text-white'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ZoomImageZone;
