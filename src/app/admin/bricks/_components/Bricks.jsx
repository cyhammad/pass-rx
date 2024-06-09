"use client";

import { useState } from "react";
import { searchIcon } from "@/svgs/topbarSvgs";
import DeleteModal from "@/components/adminComponents/modals/DeleteModal";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import BrickCard from "./cards/BrickCard";

export default function Bricks({ data, token, revalidateData }) {
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const filteredData = data.filter((brick) => {
    if (selectedTab === "All") {
      return brick.title.toLowerCase().includes(searchValue.toLowerCase());
    } else if (selectedTab === "Discipline") {
      return brick.title.toLowerCase().includes(searchValue.toLowerCase());
      // return brick.discipline.toLowerCase().includes(searchValue.toLowerCase());
    } else if (selectedTab === "Free") {
      return brick.title.toLowerCase().includes(searchValue.toLowerCase());
      // return (
      //   brick.isFree &&
      //   brick.title.toLowerCase().includes(searchValue.toLowerCase())
      // );
    }
  });

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="mt-14 flex items-center gap-2 self-center">
        <h1 className="text-[32px] font-semibold">Bricks</h1>
        <Link href={"/admin/bricks/add"}> {addSquare}</Link>
      </div>
      <p className="mt-2 max-w-[571px] self-center text-center font-normal">
        Our comprehensive library of digital learning modules, designed to help
        you build your foundation of medical knowledge.
      </p>
      <div className=" mt-8 flex w-[95%] items-center  justify-center gap-x-2 self-center rounded-lg border border-border-color bg-white px-4 py-1 shadow-[0px_2px_12px_0px_#C9C9C938] sm:w-[372px]">
        <button>{searchIcon}</button>
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search"
          className="w-full ring-transparent focus:ring-transparent sm:w-[372px]"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
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
      <div className="mt-8 grid grid-cols-1 justify-items-center gap-x-[18px] gap-y-6 px-3 pb-24 pt-10 sm:gap-y-6 sm:px-14 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredData.map((brick) => (
          <div key={brick._id}>
            <BrickCard
              brick={brick}
              revalidateData={revalidateData}
              token={token}
            />
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
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0833 15.5H19.9167"
      stroke="#2396F3"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 20.4163V10.583"
      stroke="#2396F3"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
