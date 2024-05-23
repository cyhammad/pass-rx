import React from "react";
import { motion } from "framer-motion";

export default function EditDisciplineCard({
  toggleFlash,
  buttonTitle,
  title,
}) {
  const closeModal = () => {
    toggleFlash();
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-5"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => closeModal()}
      ></div>
      <div className="z-50  flex h-[231.35px] w-[505px] flex-col items-center justify-between rounded-lg bg-white shadow-md ">
        <div className="flex w-full items-center justify-between border-b border-black/10 px-6 pt-2 md:gap-56 md:py-3">
          <p className="text-lg font-semibold ">{title}</p>
          <span onClick={() => closeModal()} className="cursor-pointer">
            {cross}
          </span>
        </div>
        <div className="mx-10 mt-[-1.7rem]  h-12 w-[90%] rounded-lg border border-border-color px-4  md:flex ">
          <input
            type="search"
            autoComplete="off"
            name="search"
            id="search"
            placeholder="Discipline Name"
            className=" w-full text-sm outline-none"
          />
        </div>
        <div className="mb-3 flex w-full justify-between px-5 ">
          <button
            className="hover:bg-gray-400 mr-2 w-1/2 rounded-lg border  border-black/10 py-2 font-medium focus:outline-none md:py-4"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
          <button
            className="w-1/2 rounded-lg  bg-primary  py-2   font-medium text-white focus:outline-none  md:py-4"
            // onClick={confirmDelete}
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
const cross = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0806 24.5947L24.9187 14.7566"
      stroke="#121212"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.9187 24.595L15.0806 14.7568"
      stroke="#121212"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
