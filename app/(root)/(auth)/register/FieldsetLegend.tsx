import React from "react";

export default function FieldsetLegend({ title }: { title: string }) {
    return (
        <legend className="w-full text-[18px] py-[7px] mb-[20px] text-[#333] border-b border-[#e5e5e5] block ">
            {title}
        </legend>
    );
}
