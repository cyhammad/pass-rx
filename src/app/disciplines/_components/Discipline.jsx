"use client";
import { useState } from "react";
import ThreeDotLoader from "@/components/loaders/ThreeDotLoader";
import Card from "./cards/Card";
import AddDisciplineCard from "./cards/AddDisciplineCard";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import DeleteModal from "@/components/modals/DeleteModal";
import { toggle } from "@/lib/features/editFlashCard/editFlashCradSlice";
import EditDisciplineCard from "./cards/EditDisciplineCard";

export default function Discipline() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFlash = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  const cardData = Array.from({ length: 12 }, (_, index) => index + 1);
  const isDeleteModalOpen = useSelector((state) => state.deleteModal.value);
  const isEditFlashCardOpen = useSelector((state) => state.editFlashCrad.value);

  const dispatch = useDispatch();
  const toggleEditFlash = () => {
    dispatch(toggle());
  };
  return (
    <div className="mt-8 flex w-full flex-col ">
      <AnimatePresence>
        {isDeleteModalOpen && (
          <DeleteModal name1={"Discipline"} name2={"discipline name"} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEditFlashCardOpen && (
          <EditDisciplineCard
            toggleFlash={toggleEditFlash}
            buttonTitle={"Update"}
            title={"Edit Discipline"}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <EditDisciplineCard
            toggleFlash={toggleFlash}
            buttonTitle={"Add"}
            title={"Add New Discipline"}
          />
        )}
      </AnimatePresence>

      <div className="flex w-full flex-col justify-start">
        <h1 className=" text-[1.125rem] font-semibold  sm:text-2xl ">
          Disciplines
        </h1>
        <AddDisciplineCard onClick={toggleFlash} />
        <div className="mt-9 flex items-center justify-between">
          <p className="text-text-gray">Total Quiz banks (125)</p>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            {search}
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1  gap-x-3 gap-y-3 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
          {cardData.map((number) => (
            <div key={number}>
              <Card
                text1={"Discipline Name"}
                questionNumber={"1,25,461 Questions "}
                lastUpdated={"Last Updated on 12 Jan, 2023"}
              />
            </div>
          ))}
        </div>
        <div className="my-5 flex justify-center">
          <ThreeDotLoader />
        </div>
      </div>
    </div>
  );
}

const search = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4354 19.0568C15.1966 19.0568 19.0564 15.1971 19.0564 10.4359C19.0564 5.67466 15.1966 1.81494 10.4354 1.81494C5.67423 1.81494 1.81451 5.67466 1.81451 10.4359C1.81451 15.1971 5.67423 19.0568 10.4354 19.0568Z"
      stroke="#9F9F9F"
      stroke-width="1.51656"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.9639 19.9643L18.1489 18.1494"
      stroke="#9F9F9F"
      stroke-width="1.51656"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
