"use client"
import  { useState } from "react";
import FlashFactsTable from "./components/FlashFactsTable";
import Performance from "./components/Performance";
import { AnimatePresence } from "framer-motion";
import AddDeck from "./components/modals/AddDeck";

export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-light-gray pr-3 pt-6 sm:px-6 md:px-8 select-none">
      <AnimatePresence>
        {isOpen && <AddDeck toggle={toggle} />}
      </AnimatePresence>

      <div className="flex items-center justify-between ">
        <h3 className="text-2xl font-semibold">Flash Facts</h3>
        <button onClick={toggle} className="rounded-lg bg-primary  px-2 py-3 text-xs font-medium text-white sm:w-[282px]  sm:px-3 sm:text-base">
          Create New Deck
        </button>
      </div>
      <Performance />
      <FlashFactsTable />
    </div>
  );
}
