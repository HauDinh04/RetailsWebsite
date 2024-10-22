import Link from "next/link";
import React from "react";
import { MdNavigateNext } from "react-icons/md";

interface SubItem {
  title: string;
  link: string;
  subItems?: SubItem[];
}

const RenderSubItems: React.FC<{ items: SubItem[] }> = ({ items }) => (
  <ul>
    {items.map((subItem, index) => (
      <li key={index} className="pl-[12px] pb-[8px]">
        <div className="flex items-center">
          <MdNavigateNext className="mr-[10px] text-[#444]" />
          <Link
            href={subItem.link}
            className="text-[12px] hover:text-[#0083c1]"
          >
            {subItem.title}
          </Link>
        </div>
        {subItem.subItems && subItem.subItems.length > 0 && (
          <RenderSubItems items={subItem.subItems} />
        )}
      </li>
    ))}
  </ul>
);

const SiteMapList: React.FC<{ sitemapItems: SubItem[] }> = ({
  sitemapItems,
}) => {
  return (
    <ul className="pl-[12px]">
      {sitemapItems.map((item, index) => (
        <li key={index}>
          <div className="flex items-center">
            <MdNavigateNext className="mr-[10px] h-[20px] text-[#444]" />
            <Link
              href={item.link}
              className="font-bold text-[12px] leading-[18px] text-[#444] uppercase hover:text-[#0083c1]"
            >
              {item.title}
            </Link>
          </div>
          {item.subItems && item.subItems.length > 0 && (
            <RenderSubItems items={item.subItems} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default SiteMapList;
