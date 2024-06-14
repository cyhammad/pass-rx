"use client";
import React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import QuizTable from "./QuizTable";
import PerformanceGraph from "./PerformanceGraph";
import AddQuiz1 from "./modals/AddTest";

export default function QuizBank({ disciplines, token, revalidateData }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="select-none bg-light-gray pr-3 pt-6 sm:px-6 md:px-8">
      <AnimatePresence>
        {isOpen && (
          <AddQuiz1 toggle={toggle} disciplines={disciplines} token={token} />
        )}
      </AnimatePresence>
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
    </div>
  );
}
