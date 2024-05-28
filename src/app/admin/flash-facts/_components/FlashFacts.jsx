"use client";
import { searchIcon } from "@/svgs/topbarSvgs";
import Button1 from "@/components/adminComponents/buttons/Button1";
import Card from "./cards/Card";
import ThreeDotLoader from "@/components/loaders/ThreeDotLoader";
import { useSelector, useDispatch } from "react-redux";
import DeleteModal from "@/components/adminComponents/modals/DeleteModal";
import { AnimatePresence } from "framer-motion";
import FlashCard from "./cards/FlashCard";
import { useState } from "react";
import { toggle } from "@/lib/features/editFlashCard/editFlashCradSlice";

export default function FlashFacts() {
  const [isOpen, setIsOpen] = useState(false);
  const cardData = Array.from({ length: 12 }, (_, index) => index + 1);
  const isDeleteModalOpen = useSelector((state) => state.deleteModal.value);
  const isEditFlashCardOpen = useSelector((state) => state.editFlashCrad.value);
  const dispatch = useDispatch();
  const toggleFlash = () => {
    setIsOpen(!isOpen);
  };

  const toggleEditFlash = () => {
    dispatch(toggle());
  };

  return (
    <div className="flex w-full flex-col ">
      <AnimatePresence>
        {isDeleteModalOpen && (
          <DeleteModal name1={"Flash Card"} name2={"flash card"} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <FlashCard
            toggleFlash={toggleFlash}
            title={"Add Flash Card"}
            buttonTitle={"Add"}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEditFlashCardOpen && (
          <FlashCard
            toggleFlash={toggleEditFlash}
            title={"Edit Flash Card"}
            buttonTitle={"Update"}
          />
        )}
      </AnimatePresence>

      <div className="flex w-full flex-col justify-between sm:flex-row sm:items-center">
        <h1 className=" text-[1.46rem] font-medium leading-10  sm:text-[1.125rem] lg:text-[1.46rem] ">
          Flash Facts
        </h1>
        <span className="mt-3 flex items-center justify-between gap-2 sm:mt-0 lg:gap-6">
          <div className="flex md:gap-1 lg:gap-3">
            <p className="text-[10px] font-semibold text-text-gray-2 sm:text-xs">
              Discipline
            </p>
            <div className="flex items-center gap-x-1">
              <span className="ml-1 text-[10px] font-medium  sm:ml-2 sm:text-xs">
                Show all
              </span>
              {chevronDown}
            </div>
          </div>
          {/* Search bar */}
          <div className="hidden items-center  bg-white justify-center gap-x-2 rounded-lg border border-border-color px-4 py-1 shadow-[0px_2px_12px_0px_#C9C9C938] md:flex">
            <button>{searchIcon}</button>
            <input
              type="search"
              name="search"
              autoComplete="off"
              id="search"
              placeholder="Search"
              className=" outline-none md:w-[180px] lg:w-[280px]"
            />
          </div>
          <Button1
            icon={addsvg}
            title={"New Flash Card"}
            bgColor={"black"}
            onClick={toggleFlash} // Pass toggleFlash function here
            textColor={"white"}
          />
        </span>
      </div>
      <div className="mt-10 grid grid-cols-1 justify-items-center gap-x-7 gap-y-5  md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4">
        {cardData.map((number) => (
          <div key={number}>
            <Card
              text1={
                "How can we differentiate so many different foods if we can only taste four flavors on our tongue: sweet, bitter, sour, and salty?"
              }
              text2={
                "the nose plays an integral part in the experience of taste"
              }
              discipline={"Discipline Name"}
            />
          </div>
        ))}
      </div>
      <div className="my-5 flex justify-center">
        <ThreeDotLoader />
      </div>
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

const chevronDown = (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 1.65039L6 6.15039L1.5 1.65039"
      stroke="#A1A5B7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
