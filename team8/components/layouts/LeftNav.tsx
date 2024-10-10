import { leftNavLinks } from "@/app/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const LeftNav = () => {
  return (
 
      <div className="grid grid-cols-1 items-start  border  max-w-[250px] rounded-lg mt-3  ">
        <div className=" items-center gap-2 px-4 py-3 bg-bg-main text-white uppercase text-heading4-bold flex ">
          <Menu />
          all categoties
        </div>
        {leftNavLinks.map((link) => (
          <div
            className="group relative px-[11px] py-[15px] border items-center text-left "
            key={link.label}
          >
            <Link
              href={link.url}
              key={link.label}
              className="text-sub-heading hover:text-bg-main transition-all 0.5s"
            >
              {link.label}
            </Link>
            {link.subLinks && (
              <div className=" hidden group-hover:block absolute left-full top-0 w-[875px] bg-white border ">
                <div className="grid grid-cols-3 ">
                  {link.subLinks.map((subLink) => (
                    <ul key={subLink.Label}>
                      <Link
                        href={subLink.url}
                        className="block px-4 py-2 hover:bg-gray-200 text-heading3-bold "
                      >
                        {subLink.Label}
                      </Link>
                      {subLink.subsubLinks && (
                        <div className="">
                          {subLink.subsubLinks.map((subSubLinks) => (
                            <Link
                              href={subSubLinks.url}
                              key={subSubLinks.label}
                              className="grid grid-cols-1 px-4 py-1"
                            >
                              {subSubLinks.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </ul>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
   
  );
};

export default LeftNav;
