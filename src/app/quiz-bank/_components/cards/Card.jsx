import CardDropDown from "@/components/dropdowns/CardDropDown";
import React from "react";

export default function Card({ lastUpdated, text1, number, questions }) {
  return (
    <div className="flex  h-[138px] w-full justify-between rounded-2xl  bg-white p-5 drop-shadow-sm lg:max-w-[312px]">
      <div className="w-10/12">
        <p className="text-lg">{text1}</p>
        <p className="mt-2 flex items-center gap-[5px] text-[13px]">
          {number}
          <span className="text-[9px] text-text-gray">{questions}</span>
        </p>
        <p className="mt-7 text-[10px] text-text-gray-2">{lastUpdated}</p>
      </div>
      <CardDropDown name={"Quizbank"} />
    </div>
  );
}
