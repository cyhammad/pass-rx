import React, { useState } from "react";
import { Line } from "./AddQuiz1";
import CheckBox from "@/components/userComponents/input-elements/CheckBox";

export default function Step1({setStep}) {
  
  return (
    <div className=" mt-3 flex h-full select-none w-full flex-col  justify-between px-6">
      <div className="flex self-center">
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full bg-primary text-sm font-medium text-white ">
            01
          </div>
          <p className=" mt-2  text-center text-primary ">Test Settings</p>
        </div>
        <Line bg={"text-gray-2"} />
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full border-2  border-text-gray  text-sm font-medium  ">
            02
          </div>
          <p className=" mt-2 text-center text-user-gray">Choose Questions</p>
        </div>
        <Line bg={"text-gray-2"} />

        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full border-2  border-text-gray  text-sm font-medium  ">
            03
          </div>
          <p className="mt-2 text-center text-user-gray">Finalize Test</p>
        </div>
      </div>
      <div className="mt-8 flex  flex-col justify-between self-center">
        <div className="flex flex-col items-center">
          <h5 className="text-center text-lg font-semibold">
            Question Difficulty
          </h5>
          <div className="mt-2  flex gap-5">
            <div className="flex items-center gap-1  font-medium text-text-gray-2">
              <CheckBox />
              <p className="sm:text-base text-sm">Easy</p>
            </div>{" "}
            <div className="flex items-center gap-1 font-medium text-text-gray-2">
              <CheckBox />
              <p className="sm:text-base text-sm">Medium</p>
            </div>
            <div className="flex items-center gap-1 font-medium text-text-gray-2">
              <CheckBox/>
              <p className="sm:text-base text-sm">Hard</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <h5 className="text-center text-lg font-semibold">Question Status</h5>
          <div className="mt-2 flex items-center gap-[2vw] ">
            <div className="flex items-center  gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                class="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="radio"
              />
              <p className="sm:text-base text-xs">All</p>
            </div>
            <div className="flex items-center gap-2   font-medium text-text-gray-2">
              <input
                type="radio"
                class="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="radio"
              />
              <p className="sm:text-base text-xs">Used Only</p>
            </div>
            <div className="flex items-center gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                class="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="radio"
              />
              <p className="sm:text-base text-xs">Unused Only</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <h5 className="text-center text-lg font-semibold">Answer Status</h5>
          <div className="mt-2 flex items-center gap-[2vw] ">
            <div className="flex items-center  gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                class="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="radio"
              />
              <p className="sm:text-base text-xs">All</p>
            </div>
            <div className="flex items-center gap-2   font-medium text-text-gray-2">
              <input
                type="radio"
                class="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="radio"
              />
              <p className="sm:text-base text-xs">Incorrect Only</p>
            </div>
            <div className="flex items-center gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                class="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="radio"
              />
              <p className="sm:text-base text-xs">Correct Only</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <h5 className="text-center text-lg font-semibold">Mark Status</h5>
          <div className="mt-2 flex items-center gap-[2vw] ">
            <div className="flex items-center   gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                class="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="radio"
              />
              <p className="sm:text-base text-xs">All</p>
            </div>
            <div className="flex items-center  gap-2   font-medium text-text-gray-2">
              <input
                type="radio"
                class="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="radio"
              />
              <p className="sm:text-base text-xs">Marked Only</p>
            </div>
            <div className="flex items-center gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                class="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="radio"
              />
              <p className="sm:text-base text-xs">Unmarked Only</p>
            </div>
          </div>
        </div>
        <button onClick={() => setStep("step2")} class=" mt-8 mb-7 flex  items-center justify-center  rounded-[10px] bg-primary px-4 py-5 text-sm font-semibold text-white ">
          Next Step {arrow}
        </button>
      </div>
    </div>
  );
}
const arrow = (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 15.6536L12.5 10.6536L7.5 5.65356"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );