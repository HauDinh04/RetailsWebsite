import Link from "next/link";
import React from "react";
    
import Breadcrumb from "@/components/layouts/Breadcrumb";
import RegisterForms from "./registerForm";

export default function Register() {
    return (
        <div className="mx-[-15px]">
            <div className="px-[15px]">
                <Breadcrumb
                    breadcrumbItems={[
                        {
                            label: "Account",
                            link: "/register",
                        },
                        {
                            label: "Register",
                            link: "#",
                        },
                    ]}
                />
                <div className="mb-[23px]">
                    <h2 className="text-[#222222] text-[30px] font-light mt-[20px] mb-[10px]">
                        Register Account
                    </h2>
                    <p className="mb-[10px] text-black-2 text-info">
                        If you already have an account with us, please login at
                        the
                        <Link href={""} className="hover:text-bg-main">
                            login page
                        </Link>
                    </p>
                    <RegisterForms />
                </div>
            </div>
        </div>
    );
}
