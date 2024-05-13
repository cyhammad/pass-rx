import React from "react";

import { grayPencil } from "@/svgs/commonSvgs";
import { option } from "@/svgs/commonSvgs";
import SectionDropdown from "./dropdowns/SectionDropdown";
export default function Topics() {
  return (
    <div className="md:w-[624.23px] ">
      <div className="w-full">
        <div className="flex w-full flex-col  ">
          <div className="flex w-full justify-between px-4">
            <p className="flex items-center gap-x-[14px] text-lg font-bold">
              Biostatistics I{grayPencil}
            </p>
            {option}
          </div>
          <SectionDropdown />
          <SectionDropdown />
        </div>
        <div className="relative mt-8 flex w-full flex-col  ">
          <div className="flex w-full justify-between  px-4">
            <p className="flex items-center gap-x-[14px] text-lg font-bold">
              Biostatistics II
              {grayPencil}
            </p>
            {option}
          </div>
          <SectionDropdown />
          <SectionDropdown />
          <SectionDropdown />
        </div>
      </div>
    </div>
  );
}
