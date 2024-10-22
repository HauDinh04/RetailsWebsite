import { FaReply } from "react-icons/fa";

export function ReplyComment({
  name,
  datetime,
  content,
}: {
  name: string;
  datetime: string;
  content: string;
}) {
  return (
    <div className="mt-5">
      <div className="flex gap-4 text-[12px]">
        <div className="p-[4px] border h-fit">
          <img
            src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/blog/avata1.jpg"
            alt=""
            className="w-[50px] h-[50px] max-w-none"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="text-[16px]">{name}</div>
              <div className="ms-[15px] text-gray-600">{datetime}</div>
            </div>
            <FaReply className="cursor-pointer text-[18px]" />
          </div>
          <div className="text-gray-600">{content}</div>
        </div>
      </div>
    </div>
  );
}
