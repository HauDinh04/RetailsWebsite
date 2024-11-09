'use client'
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {FaAngleUp} from "react-icons/fa6";

function ButtonToTop() {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const listenerScroll = () => setIsShow(window.scrollY > 50);
        window.addEventListener('scroll', listenerScroll);
        return () => window.removeEventListener('scroll', listenerScroll);
    }, []);

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isShow && (
                <motion.div
                    onClick={ScrollToTop}
                    initial={{opacity: 0, y: 50, scale: 0.5}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, y: 50, scale: 0.5}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="fixed flex flex-col items-center gap-0 justify-center right-[10px] bottom-[10px] xl:right-[50px] xl:bottom-[50px]
                    py-[5px] rounded-[3px] hover:bg-[#0083c1] text-center
                    w-[45px] bg-[#777] cursor-pointer text-[#fff] "
                >
                    <FaAngleUp className="text-[20px] xl:text-[32px]" strokeWidth={0}/>
                    <div className="text-[12px] leading-[18px]">top</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ButtonToTop;
