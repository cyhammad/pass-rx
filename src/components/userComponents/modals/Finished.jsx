import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "@/lib/features/deleteModal/deleteModalSlice";
import { motion, AnimatePresence } from "framer-motion";

const Finished = ({ text1, text2, toggleFinish }) => {
  const closeModal = () => {
    toggleFinish();
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

      <div className="z-50  w-[430 .1px] flex py-11 flex-col items-center justify-between rounded-[53.42px] bg-white shadow-md min-h-[530px] px-6">
        <span>{svg}</span>
        <div className="text-center mt-5">
          <h3 className="text-2xl font-semibold">{text1}</h3>
          <p className="text-xl max-w-72 mt-2 text-text-gray ">{text2}</p>
        </div>
        <button
          className="w-full  rounded-[13.3px]  bg-primary py-6 text-lg font-medium  text-white focus:outline-none "
          onClick={() => closeModal()}
        >
          Cancel
        </button>
        {/* <div className="flex w-full items-center justify-between border-b border-black/10 px-6 py-2 md:gap-56 md:py-3">
          <p className="text-lg font-semibold ">Delete </p>
          <span onClick={() => closeModal()} className="cursor-pointer">
          </span>
        </div>
        <div className="mt-[-2rem] flex w-2/3 flex-col  items-center">
          <span className="">{}</span>
          <p className="text-center text-sm sm:text-lg ">
            Are you sure you want to delete this .{" "}
          </p>
        </div>
        <div className="mb-3 flex w-full justify-between px-5 ">
          <button
            className="hover:bg-gray-400 mr-2 w-1/2 rounded-lg border  border-black/10 py-2 font-medium focus:outline-none md:py-4"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
          
        </div> */}
      </div>
    </motion.div>
  );
};

export default Finished;
const svg = (
  <svg
    width="214"
    height="207"
    viewBox="0 0 214 207"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="109.911" cy="103.837" r="80.559" fill="#2396F3" />
    <circle cx="204.713" cy="31.8479" r="8.5701" fill="#2396F3" />
    <circle cx="23.6768" cy="11.8509" r="11.4268" fill="#2396F3" />
    <circle cx="12.2486" cy="152.401" r="5.7134" fill="#2396F3" />
    <circle cx="189.935" cy="183.824" r="2.8567" fill="#2396F3" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M97.7479 75.7451H122.103C131.625 75.7451 138.002 82.4308 138.002 92.3749V115.328C138.002 125.241 131.625 131.927 122.103 131.927H97.7479C88.225 131.927 81.8203 125.241 81.8203 115.328V92.3749C81.8203 82.4308 88.225 75.7451 97.7479 75.7451ZM108.311 112.235L121.654 98.8919C122.609 97.9368 122.609 96.3918 121.654 95.4086C120.699 94.4536 119.126 94.4536 118.171 95.4086L106.569 107.01L101.653 102.094C100.698 101.139 99.125 101.139 98.1699 102.094C97.2149 103.049 97.2149 104.594 98.1699 105.578L104.856 112.235C105.333 112.713 105.951 112.937 106.569 112.937C107.215 112.937 107.833 112.713 108.311 112.235Z"
      fill="white"
    />
    <circle cx="122.519" cy="5.56593" r="2.8567" fill="#2396F3" />
    <circle cx="72.2416" cy="202.107" r="3.99938" fill="#2396F3" />
    <circle cx="140.229" cy="195.822" r="1.14268" fill="#2396F3" />
    <circle cx="195.648" cy="126.69" r="2.8567" fill="#2396F3" />
    <circle cx="1.96495" cy="86.1253" r="1.14268" fill="#2396F3" />
  </svg>
);
