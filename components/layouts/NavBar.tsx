"use client";
import { useState } from "react";
import { NavLinks } from "@/app/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi"; 
import { IoClose } from "react-icons/io5";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex bg-bg-main py-[10px]">
      <div className="container flex items-center justify-between">
        {/* Menu icon for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            <FiMenu /> 
          </button>
        </div>

       
        <div className="hidden md:flex items-center text-left">
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className={`flex items-center text-left px-5 py-[5px] uppercase text-white text-[14px] font-bold leading-[18px] ${
                pathName === link.url ? "text-blue-1" : "text-grey-1"
              } hover:text-bg-main hover:bg-white rounded-lg`}
            >
              {link.label}
            </Link>
          ))}
          
        </div>
      </div>
      {isMenuOpen && (
        <div className="xl:hidden bg-white text-black w-2/5 h-full absolute top-12 left-0 py-2 z-10 ">
          <button
              onClick={() => setIsMenuOpen(false)} 
              className="text-white text-xl absolute right-0"
            >
              <IoClose className="bg-black" /> 
            </button>
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className={`block px-6 py-2 uppercase text-[14px] font-bold leading-[18px] ${
                pathName === link.url ? "text-blue-1" : "text-grey-1"
              } hover:text-bg-main hover:bg-white`}
              onClick={toggleMenu} 
            >
              {link.label}
            </Link>
          ))}
          
        </div>
      )}
    </div>
  );
};

export default NavBar;
