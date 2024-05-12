import { motion } from "framer-motion";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function AddDeck({ toggle }) {
  const closeModal = () => {
    toggle();
  };
  const [step, setStep] = useState("step1");

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
        // onClick={() => closeModal()}
      ></div>

      <div className="z-50  flex  w-[655px] flex-col items-center rounded-lg   bg-white  shadow-md ">
        <div className="flex w-full items-center  justify-between  border-b  border-b-black/10 py-3 ">
          <p className="pl-5 text-sm font-medium md:text-lg ">New Test</p>
          <button
            onClick={() => closeModal()}
            className="flex cursor-pointer items-center gap-1  pr-4   text-xs  sm:text-sm"
          >
            {cross}
          </button>
        </div>
          {step == "step1" ? (
            <Step1 setStep={setStep} />
          ) : step == "step2" ? (
            <Step2 setStep={setStep} />
          ) : (
            <Step3 setStep={setStep} />
          )}
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
      d="M14.9062 24.5955L24.7444 14.7573"
      stroke="#DBDBDB"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.7444 24.5952L14.9062 14.7571"
      stroke="#DBDBDB"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
