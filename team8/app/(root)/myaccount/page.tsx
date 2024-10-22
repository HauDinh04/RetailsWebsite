import Aside from "@/components/layouts/Aside";
import React from "react";
import MyAccountForm from "./myaccout-form";
import Breadcrumb from "@/components/layouts/Breadcrumb";

export default function MyAccount() {
  return (
    <div>
      <Breadcrumb
        breadcrumbItems={[
          {
            label: "Account",
            link: "/orders/history",
          },
          {
            label: "My Account",
            link: "/orders/history",
          },
        ]}
      />
      <div className="flex flex-wrap -mx-[15px] mb-[23px]">
        <div className="md:w-3/4 w-full px-[15px]">
          <h2 className="text-[30px] mt-5 mb-[10px] font-light text-[#22222]	">
            My Account
          </h2>
          <p className="mb-[20px] text-black-2 text-[21px]">
            Hello, <strong className="text-[21px]">Jhone Cary!</strong> - To
            update your account information.
          </p>
          <MyAccountForm />
        </div>
        <div className="w-1/4 md:block hidden px-[15px]">
          <Aside />
        </div>
      </div>
    </div>
  );
}
