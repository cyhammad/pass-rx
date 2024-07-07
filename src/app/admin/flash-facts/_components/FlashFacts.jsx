"use client";

import ThreeDotLoader from "@/components/loaders/ThreeDotLoader";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import AddFlashFactModal from "./modals/AddFlashFactModal";
import FlashFactCard from "./cards/FlashFactCard";
import DisciplineFilter from "./dropdowns/DisciplineFilter";
import FlashFactSearchBar from "./inputs/FlashFactSearchBar";

export default function FlashFactsPage({
  flashFacts,
  disciplines,
  token,
}) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const filteredFacts = flashFacts
    .filter((fact) => {
      if (selectedDiscipline) {
        return fact.discipline._id === selectedDiscipline._id;
      }
      return true;
    })
    .filter((fact) => {
      if (searchValue) {
        return fact.question.toLowerCase().includes(searchValue.toLowerCase());
      }
      return true;
    });
  return (
    <div className="flex h-full w-full flex-col">
      <AnimatePresence>
        {isAddModalOpen && (
          <AddFlashFactModal
            closeModal={() => setIsAddModalOpen(false)}
            disciplines={disciplines}
            token={token}
          />
        )}
      </AnimatePresence>
      <div className="flex w-full flex-col justify-between sm:flex-row sm:items-center">
        <h1 className=" text-[1.46rem] font-medium leading-10  sm:text-[1.125rem] lg:text-[1.46rem] ">
          Flash Facts
        </h1>
        <span className="mt-3 flex flex-col justify-between gap-2 sm:mt-0 sm:flex-row sm:items-center lg:gap-6">
          <div className="flex items-center gap-3">
            <DisciplineFilter
              selectedDiscipline={selectedDiscipline}
              setSelectedDiscipline={setSelectedDiscipline}
              disciplines={disciplines}
            />
            <FlashFactSearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <button
            className="flex w-fit h-[50px] items-center gap-2 rounded-md bg-almostBlack px-5 py-2 text-start text-sm self-end"
            onClick={() => setIsAddModalOpen(true)}
          >
            {addsvg}
            <span className="text-white">New Flash Card</span>
          </button>
        </span>
      </div>
      <div className="mt-10 grid w-full grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
        {filteredFacts.map((fact) => (
          <div key={fact._id}>
            <FlashFactCard
              flashFact={fact}
              token={token}
              disciplines={disciplines}
            />
          </div>
        ))}
      </div>
      {/* <div className="my-5 flex justify-center">
        <ThreeDotLoader />
      </div> */}
    </div>
  );
}
const addsvg = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
      fill="white"
    />
    <path
      d="M8.5 12H16.5"
      stroke="#111213"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 16V8"
      stroke="#111213"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
