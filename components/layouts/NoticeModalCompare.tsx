'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {setHiddenCompareNotice} from "@/redux/features/notice/notice.slice";
import {MdClose} from "react-icons/md";
import {motion} from 'framer-motion';

function NoticeModalCompare() {
    const dispatch = useAppDispatch();

    const isShowCompareNotice = useAppSelector(state => state.notice.isShowCompareNotice);

    const handleCloseCompareNotice = () => {
        dispatch(setHiddenCompareNotice());
    }

    useEffect(() => {
        if (isShowCompareNotice) {
            setTimeout(() => {
                dispatch(setHiddenCompareNotice());
            }, 4000)
        }
    }, [isShowCompareNotice, dispatch]);

    if (isShowCompareNotice) {
        return (
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        className={`fixed shadow-xl top-0 right-0 bg-[rgba(241,241,241,0.97)] m-[10px] p-[10px] rounded-[3px] 
                        w-3/4 h-max xl:w-[250px] flex flex-col gap-[10px]`}>
                <div className="flex justify-between items-center">
                    <div className="text-[12px] text-[#333333] font-bold">Product added to compare</div>
                    <div onClick={handleCloseCompareNotice}
                         className="rounded-[3px] bg-[#999] cursor-pointer hover:bg-[#777] py-[4px] px-[6px]">
                        <MdClose className={'text-white text-[14px] leading-[18px]'}/>
                    </div>
                </div>
                <div className="flex gap-[15px]">
                    <div className="relative w-[50px] aspect-square">
                        <Image src={'/images/2b054882609bbaf6728aca0368212c14.jpg'} fill sizes={'100'} alt={'product'}
                               className={'object-cover'}/>
                    </div>
                    <div className="flex-1 text-[12px] leading-[20px]">
                        Success: You have added
                        <Link href={'/products/1'} className={'text-[#0083c1]'}>{` Apple Cinema 30"`}</Link> to
                        your <Link
                        className={'text-[#0083c1]'} href="/compare">product comparison</Link>!
                    </div>
                </div>
            </motion.div>
        );
    }

}

export default NoticeModalCompare;