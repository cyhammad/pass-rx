import React from "react";
import { Line } from "@/app/user/quiz-bank/components/modals/AddQuiz1";
import CheckBox from "@/components/userComponents/input-elements/CheckBox";

export default function Step2({ setStep }) {
  const data = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className=" mt-3 flex h-full select-none w-full flex-col  justify-between px-6">
      <div className="flex self-center justify-between">
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full bg-primary text-sm font-medium text-white ">
            01
          </div>
          <p className=" mt-2  text-center text-primary ">Deck Settings</p>
        </div>
        <Line bg={"bg-primary"} />
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full bg-primary text-sm  font-medium text-white ">
            02
          </div>
          <p className=" mt-2 text-center  text-primary">Choose Cards</p>
        </div>
        <Line bg={"bg-text-gray-2"} />

        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full border-2  border-text-gray  text-sm font-medium  ">
            03
          </div>
          <p className="mt-2 text-center text-user-gray">Finalize Deck</p>
        </div>
      </div>
      <div className=" flex sm:mt-0 mt-3 flex-col justify-between sm:self-center border-b border-checkbox pb-10 max-w[489px]">
        <div className="overflow-auto  user-screen  h-[45svh] sm:px-6 mt-3 pr-3">
          {data.map((number) => (
            <div key={number} className="flex justify-between sm:gap-[8vw] ">
              <div className="flex items-center gap-[10px]  border-b border-checkbox/40 sm:px-5   py-3.5">
                <CheckBox />
                <p className="sm:text-sm text-xs font-semibold">Discipline Name</p>
              </div>
              <div className="flex items-center gap-[10px] border-b border-checkbox sm:px-5  py-3.5">
                <CheckBox />
                <p className="sm:text-sm text-xs font-semibold">Discipline Name</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <button
          onClick={() => setStep("step3")}
          class="  flex  items-center justify-center mb-7 mt-8 sm:w-[335px]  w-[250px] self-center  rounded-[10px] bg-primary px-4 py-5 text-sm font-semibold text-white "
        >
          Next Step {arrow}{" "}
        </button>
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
