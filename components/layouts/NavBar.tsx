"use client"
import { NavLinks } from "@/app/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const pathName=usePathname()
  return (
    <div className="flex bg-bg-main py-[10px]   ">
      <div className="hidden xl:flex items-center text-left container">
        {NavLinks.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={`flex items-center text-left px-[10px] py-[5px] uppercase text-white text-[14px] font-bold leading-[18px] ${pathName===link.url ? "text-blue-1":'text-grey-1'} hover:text-bg-main hover:bg-white rounded-lg`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
