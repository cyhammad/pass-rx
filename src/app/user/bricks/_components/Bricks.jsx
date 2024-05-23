"use client";
import { useState } from "react";
import { searchIcon } from "@/svgs/topbarSvgs";
import Card from "./cards/Card";
import DeleteModal from "@/components/adminComponents/modals/DeleteModal";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { setBrick } from "@/lib/features/brick/brickSlice";
import { useRouter } from "next/navigation";

export default function Bricks() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("All");
  const isDeleteModalOpen = useSelector((state) => state.deleteModal.value);
  const cardData = Array.from({ length: 12 }, (_, index) => index + 1);
  const check = useSelector((state) => state.brick.name);
  const handleCardClick = (brick) => {
    dispatch(setBrick(brick));
    router.push(`/user/bricks/${brick}`);
  };
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="flex w-full flex-col">
      <AnimatePresence>
        {isDeleteModalOpen && (
          <DeleteModal name1={"Quizbank"} name2={"Brick Collection"} />
        )}
      </AnimatePresence>
      <div className="mt-14 flex items-center gap-2 self-center">
        <h1 className="text-[32px] font-semibold">Bricks</h1>
      </div>
      <p className="mt-2 max-w-[571px] self-center text-center font-normal">
        Our comprehensive library of digital learning modules, designed to help
        you build your foundation of medical knowledge.
      </p>
      <div className=" mt-8 flex w-[95%]  bg-white  items-center justify-center gap-x-2 self-center rounded-lg border border-border-color px-4 py-1 shadow-[0px_2px_12px_0px_#C9C9C938] sm:w-[372px]">
        <button>{searchIcon}</button>
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search"
          className="w-full  outline-none sm:w-[372px]"
        />
      </div>
      <div className="mt-8 flex w-[227px] cursor-pointer justify-between self-center">
        <div>
          <p
            className={`px-2 text-lg font-semibold ${selectedTab === "All" ? "border-b-4 border-primary text-primary " : "text-text-gray"}`}
            onClick={() => handleTabClick("All")}
          >
            All
          </p>
        </div>
        <div>
          <p
            className={`px-2 text-lg font-semibold ${selectedTab === "Discipline" ? "border-b-4 border-primary text-primary" : "text-text-gray"}`}
            onClick={() => handleTabClick("Discipline")}
          >
            Discipline
          </p>
        </div>
        <div>
          <p
            className={`px-2 text-lg font-semibold ${selectedTab === "Free" ? "border-b-4 border-primary text-primary" : "text-text-gray"}`}
            onClick={() => handleTabClick("Free")}
          >
            Free
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 justify-items-center gap-x-[18px] gap-y-6 px-3   sm:gap-y-6 sm:px-14 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {cardData.map((number) => (
          <div key={number} >
            <Card handleCardClick={handleCardClick} number={number} />
          </div>
        ))}
      </div>
    </div>
  );
}

const addSquare = (
  <svg
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3125 27.7913H18.6875C24.8333 27.7913 27.2917 25.333 27.2917 19.1872V11.8122C27.2917 5.66634 24.8333 3.20801 18.6875 3.20801H11.3125C5.16668 3.20801 2.70834 5.66634 2.70834 11.8122V19.1872C2.70834 25.333 5.16668 27.7913 11.3125 27.7913Z"
      fill="white"
      stroke="#2396F3"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.0833 15.5H19.9167"
      stroke="#2396F3"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 20.4163V10.583"
      stroke="#2396F3"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
