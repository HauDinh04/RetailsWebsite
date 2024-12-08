'use client';
import React from 'react';
import {motion} from 'framer-motion';

function Loading() {
    return (
        <div
            className="fixed inset-0 flex z-50 items-center justify-center min-h-screen bg-foreground text-white">
            <div className="text-center">
                <motion.div
                    className="w-[10rem] h-[10rem] mx-auto border-[1rem] border-t-[1rem] border-white rounded-full animate-spin"
                    style={{borderTopColor: 'transparent'}}
                />
                <div className="mt-10">
                    <p className="lg:ext-[2.4rem] font-bold leading-[125%] tracking-normal">Loading ...</p>
                </div>
            </div>
        </div>
    );
}

export default Loading;
