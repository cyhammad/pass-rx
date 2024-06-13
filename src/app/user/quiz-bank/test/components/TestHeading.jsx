"use client";
import { hamburger } from "@/svgs/commonSvgs";
import { useState } from "react";

export default function TestHeading({ isTrue }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative z-10 flex pb-6 ${isTrue ? "mt-2" : "mt-28"} flex-wrap  items-center justify-between bg-light-gray `}
    >
      <div className="flex items-center justify-center gap-x-2">
        <p className=" sm:text-3xl text-xl font-semibold">Question 5</p>
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(!isOpen)}
          className="sm:ml-2 ml-1 sm:size-6 size-4 rounded-full bg-darkGreen"
        ></button>
        {isOpen && (
          <div className=" absolute -top-4 left-36 flex  border-light-border  bg-white px-3 py-1.5 text-xs shadow-sm transition duration-300 ">
            <p>Flag as Later</p>
          </div>
        )}
        <button className="sm:mr-2 mr-1 sm:size-6  size-4 rounded-full bg-yellow"></button>
        <button className="broder flex size-8 sm:size-[42px] cursor-pointer items-center  justify-center  gap-1 self-end rounded-full border border-text-gray-2 text-sm">
          {arrowLeft}
        </button>
        <button className="broder flex size-8 sm:size-[42px] rotate-180 cursor-pointer  items-center  justify-center gap-1 self-end rounded-full border border-text-gray-2 text-sm">
          {arrowLeft}
        </button>
      </div>
      <div className="hidden rounded-[63px] bg-black px-6 py-2 lg:absolute lg:left-1/2  lg:block  lg:-translate-x-1/2 ">
        <p className="text-center text-lg font-bold text-white">01:12:19</p>
        <p className="text-center text-sm text-text-gray-dark">
          Time Remaining
        </p>
      </div>
      <span className="flex sm:size-[44px] size-9 items-center justify-center rounded-full bg-white shadow-lg">
        {hamburger}
      </span>
    </div>
  );
}
const arrowLeft = (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.49023 1.41626L1.90658 5.99992L6.49023 10.5836"
      stroke="#121212"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
