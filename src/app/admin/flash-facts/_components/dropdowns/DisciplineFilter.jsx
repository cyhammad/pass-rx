"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DisciplineFilter = ({
  disciplines,
  selectedDiscipline,
  setSelectedDiscipline,
}) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectDiscipline = (discipline) => {
    setSelectedDiscipline(discipline);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex md:gap-1 lg:gap-3">
      <p className="text-[10px] font-semibold text-text-gray-2 sm:text-xs">
        Discipline
      </p>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-x-1"
        >
          <span className="ml-1 text-[10px] font-medium  sm:ml-2 sm:text-xs">
            {selectedDiscipline?.name || "Show all"}
          </span>
          {chevronDown}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`absolute z-50 mt-1 max-h-[300px] min-w-[180px] overflow-auto rounded-lg border border-border-color bg-white sm:right-0`}
            >
              <button
                key={0}
                className="flex w-full items-center px-3 py-2 text-start hover:bg-gray/10"
                onClick={() => handleSelectDiscipline(null)}
              >
                <span className="text-sm">Show all</span>
              </button>
              {disciplines.map((discipline) => (
                <button
                  key={discipline.id}
                  className="flex w-full items-center px-3 py-2 text-start hover:bg-gray/10"
                  onClick={() => handleSelectDiscipline(discipline)}
                >
                  <span className="text-sm">{discipline.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

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

export default DisciplineFilter;
