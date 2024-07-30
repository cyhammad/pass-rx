"use client";
import React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import QuizTable from "./QuizTable";
import PerformanceGraph from "./PerformanceGraph";
import AddQuiz1 from "./modals/AddTest";
import Image from "next/image";

export default function QuizBank({ disciplines, token, tests }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-full min-h-[82vh] select-none bg-light-gray px-3 pt-6 sm:px-6 md:px-8">
      <AnimatePresence>
        {isOpen && (
          <AddQuiz1 toggle={toggle} disciplines={disciplines} token={token} />
        )}
      </AnimatePresence>
      {tests.data.length == 0 ? (
        <div className="flex h-full flex-col pb-20">
          <h3 className="text-2xl font-semibold">Quiz Bank</h3>
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
            <Image
              src="/user/noQuizBank.png"
              width={157}
              height={145}
              alt="No Quiz"
              className="mb-10"
            />
            <h1 className="text-[27px] font-semibold">
              It's time to create your first test.
            </h1>
            <p className="text-base text-text-gray font-light">
              Customize your first Qmax test now and be one step
              <br />
              closer to success.
            </p>
            <button
              onClick={toggle}
              className="rounded-lg flex items-center py-2 gap-3 text-[22px] font-semibold text-primary"
            >
              Create a test {addIcon}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Quiz Bank</h3>
            <button
              onClick={toggle}
              className="rounded-lg bg-primary  px-2 py-3 text-xs font-medium text-white sm:w-[282px]  sm:px-3 sm:text-base"
            >
              Create New Test
            </button>
          </div>
          <PerformanceGraph />
          <QuizTable />
        </>
      )}
    </div>
  );
}

const addIcon = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11.9464" cy="12.3992" r="11.6261" fill="#2396F3" />
    <path
      d="M11.3392 7.27979H12.5555V11.7772H17.0529V12.9652H12.5555V17.5192H11.3392V12.9652H6.8418V11.7772H11.3392V7.27979Z"
      fill="white"
    />
  </svg>
);
