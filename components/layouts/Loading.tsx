'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {useAppSelector} from "@/redux/hooks";

function Loading() {
    const isLoading = useAppSelector(state => state.loading.isLoading);

    if (isLoading) {
        return (
            <div
                className="fixed inset-0 flex z-30 items-center justify-center min-h-screen bg-[rgba(0,0,0,0.6)] text-white">
                <div className="text-center">
                    <motion.div
                        className="w-[6rem] h-[6rem] mx-auto border-[.5rem] border-t-[.5rem] border-white rounded-full animate-spin"
                        style={{borderTopColor: 'transparent'}}
                    />

                    <div className="mt-10">
                        <p className="lg:text-[2.4rem] text-[2.4rem] font-bold leading-[125%] tracking-normal">Loading...</p>
                        <p className="lg:text-[1.2rem] text-[2.4rem] font-medium leading-[125%] tracking-normal mt-5">Please
                            waiting few minutes</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
