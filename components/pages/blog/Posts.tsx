import { FaComments } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

type PostType = {
  slug: string;
  thumbnail_url: string;
  title: string;
  description: string;
  comment_count: number;
  datetime: string;
};

export default function Post({
  slug,
  thumbnail_url,
  title,
  description,
  comment_count,
  datetime,
}: PostType) {
  const date = new Date(datetime);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });

  return (
    <div className="flex flex-col md:flex-row gap-2 mb-5 group">
      <div className=" transition duration-500 ease-in-out w-full md:w-[46%] h-fit relative">
        <div className="p-2 border group-hover:border-transparent transition duration-700 ease-in-out">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src={thumbnail_url}
            alt=""
            className="w-full "
          />
          <div className="bg-white absolute top-4 left-4 p-3 py-2 rounded-sm flex flex-col items-center z-10 text-[#0083c1]">
            <div className="text-[22px] font-bold mb-[-3px]">{day}</div>
            <div className="text-[12px]">{month}</div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-full h-full group-hover:bg-[#d6d6d694] transition duration-700 ease-in-out "></div>
      </div>
      <div className="p-2 w-full md:w-[54%]">
        <Link
          href={`/blog/${slug}`}
          className="text-[22px] py-2 hover:text-[#0083c1]  transition duration-300 ease-in-out"
        >
          {title}
        </Link>
        <div className="text-[12px] leading-[18px]">{description}</div>
        <div className="mt-[16px] mb-[22px] flex justify-between text-[12px]">
          <div className="flex items-center gap-1 text-[14px]">
            <FaComments /> {comment_count}
          </div>
          <div className="flex items-center gap-1  text-[#0083c1] cursor-pointer hover:text-red-500">
            View more <FaAngleDoubleRight />
          </div>
        </div>
        <div className="h-[1px] bg-zinc-200"></div>
        <div className="mt-[20px] flex justify-between items-center">
          <div>Share This:</div>
          <div className="flex gap-2">
            <div className="h-[27px] w-[27px] bg-sky-400 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="h-[27px] w-[27px] bg-[#456bbe] hover:bg-blue-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
              <FaTwitter />
            </div>
            <div className="h-[27px] w-[27px] bg-red-500 hover:bg-red-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
              <FaGooglePlusG />
            </div>
            <div className="h-[27px] w-[27px] bg-sky-600 hover:bg-sky-200 text-white flex justify-center items-center rounded-sm text-[13px] cursor-pointer">
              <FaSkype />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
