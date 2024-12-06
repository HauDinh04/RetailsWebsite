'use client';
import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";

export default function BannerBlog() {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Link href={'/'}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="hidden mt-4 lg:block relative w-full h-[313px] group"
        >
            <motion.div
                initial={{clipPath: 'inset(0 50% 0 50%)'}}
                animate={{clipPath: hovered ? 'inset(0 0 0 0)' : 'inset(0 50% 0 50%)'}}
                transition={{duration: 0.3, ease: 'easeInOut'}}
                className="absolute bg-[rgba(0,0,0,0.3)] w-full h-full inset-0 z-[2]"
            />
            <Image fill src="/images/65a10b505e3001c955109b7f1906a314.jpg" alt="Product"
                   className="object-cover w-full h-full"/>
        </Link>
    )
}