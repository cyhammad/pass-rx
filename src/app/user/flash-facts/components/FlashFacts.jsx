"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FlashFactsTable from "./FlashFactsTable";
import FlashFactsPerformance from "./FlashFactsPerformance";
import AddDeck from "./modals/AddDeck";

export default function FlashFacts({ disciplines, token }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="select-none bg-light-gray px-3 pt-6 sm:px-6 md:px-8">
      <AnimatePresence>
        {isOpen && (
          <AddDeck toggle={toggle} disciplines={disciplines} token={token} />
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between ">
        <h3 className="text-2xl font-semibold">Flash Facts</h3>
        <button
          onClick={toggle}
          className="rounded-lg bg-primary  px-2 py-3 text-xs font-medium text-white sm:w-[282px]  sm:px-3 sm:text-base"
        >
          Create New Deck
        </button>
      </div>
      <FlashFactsPerformance />
      <FlashFactsTable />
    </div>
  );
}
