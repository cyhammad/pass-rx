"use client";
import { useState } from "react";
import TestHeading from "./TestHeading";
export default function TestCount() {
  const [isOpen, setIsOpen] = useState(false);

  function Box({ bg, text, count }) {
    return (
      <div
        className={`${bg} ${text}  flex h-[42px] w-[42px] cursor-pointer select-none items-center justify-center rounded-[10.5px] hover:border hover:border-primary`}
      >
        {count}
      </div>
    );
  }
  return (
    <>
      <div className="relative flex flex-col">
        <div
          className={`flex  w-full flex-row  flex-wrap ${isOpen ? "justify-center" : "absolute h-0 justify-between"}  gap-3 gap-y-4  `}
        >
          <Box bg={"bg-primary"} text={"text-white"} count={"1"} />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"2"}
          />
          <Box bg={"bg-darkGreen"} text={"text-white"} count={"3"} />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"4"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"5"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"5"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"7"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"8"}
          />
          <Box bg={"bg-yellow"} text={"text-white"} count={"9"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"10"} />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"11"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"12"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"13"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"14"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"15"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"16"}
          />
          <Box bg={"bg-primary"} text={"text-white"} count={"17"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"18"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"19"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"20"} />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"21"}
          />
          <Box
            bg={"border border-text-gray-2"}
            text={"text-black"}
            count={"22"}
          />
          <Box bg={"bg-darkGreen"} text={"text-white"} count={"23"} />
          <Box bg={"bg-darkGreen"} text={"text-white"} count={"24"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"25"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"26"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"27"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"28"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"29"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"30"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"31"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"32"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"33"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"34"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"35"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"36"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"37"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"38"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"39"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"40"} />
          <Box bg={"bg-darkGreen"} text={"text-white"} count={"41"} />
          <Box bg={"bg-darkGreen"} text={"text-white"} count={"42"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"43"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"44"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"45"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"46"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"47"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"48"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"49"} />
          <Box bg={"bg-yellow"} text={"text-white"} count={"50"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"51"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"52"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"53"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"54"} />
          <Box bg={"bg-darkGreen"} text={"text-white"} count={"55"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"56"} />
          <Box bg={"bg-yellow"} text={"text-white"} count={"57"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"58"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"59"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"60"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"61"} />
          <Box bg={"bg-yellow"} text={"text-white"} count={"62"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"63"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"64"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"65"} />
          <Box bg={"bg-yellow"} text={"text-white"} count={"66"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"67"} />
          <Box bg={"bg-primary"} text={"text-white"} count={"68"} />
        </div>
        {isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" flex cursor-pointer pb-2  select-none flex-col items-center self-center"
          >
            <span className="mb-1 mt-3 rotate-180">{arrowdown}</span>
            <p className=" text-sm text-text-gray">View Less</p>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={` absolute  z-10 h-[52px]  w-full cursor-pointer  select-none bg-light-gray ${isOpen ? "hidden " : "flex flex-col"} top-14 items-center self-center`}
        >
          <p className="mb-1  text-sm text-text-gray">View All Questions</p>
          <span className="">{arrowdown}</span>
        </button>
      </div>
      <TestHeading isTrue={isOpen} />
    </>
  );
}
const arrowdown = (
  <svg
    width="15"
    height="10"
    viewBox="0 0 19 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.7"
      d="M1.5 2L8.79289 9.29289C9.18342 9.68342 9.81658 9.68342 10.2071 9.29289L17.5 2"
      stroke="#9F9F9F"
      stroke-width="2.5"
      stroke-linecap="round"
    />
  </svg>
);
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
