import Aside from "@/components/layouts/Aside";
import GiftvoucherForm from "./giftvoucher-form";
import Breadcrumb from "@/components/layouts/Breadcrumb";

export default function GiftVoucher() {
  return (
    <div>
      <Breadcrumb
        breadcrumbItems={[
          {
            label: "Gift Voucher",
            link: "/orders/history",
          },
        ]}
      />
      <div className="flex flex-wrap -mx-4 mb-[23px]">
        <div className="md:w-3/4 w-full px-[15px]">
          <h2 className="text-[30px] mt-5 mb-[10px] font-light	">
            Purchase a Gift Card
          </h2>
          <p className="mb-[10px] text-info text-black-2">
            This gift card will be emailed to the recipient after your order has
            been paid for.
          </p>
          <GiftvoucherForm />
        </div>
        <div className="w-1/4 md:block hidden px-[15px]">
          <Aside />
        </div>
      </div>
    </div>
  );
}
