import CardDropDown from "@/components/adminComponents/dropdowns/CardDropDown";
import React from "react";

export default function Card({ discipline, text1, text2 }) {
  return (
    <div className="flex  min-h-[183px] w-full justify-between rounded-2xl  bg-white p-5 drop-shadow-sm md:max-w-[406px]">
      <div className="w-10/12 flex flex-col justify-between">
        <p className="text-[13px]">{text1}</p>
        <p className=" text-xs text-text-success">{text2}</p>
        <p className="mt-2 text-[10px] text-text-gray-2">{discipline}</p>
      </div>
      <CardDropDown name={"Flash Card"} />
    </div>
  );
}
