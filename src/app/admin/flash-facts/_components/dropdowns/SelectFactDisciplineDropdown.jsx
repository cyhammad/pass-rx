"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SelectFactDisciplineDropdown = ({
  disciplines,
  selectedDiscipline,
  setSelectedDiscipline,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectDiscipline = (discipline) => {
    setSelectedDiscipline(discipline);
    setIsOpen(false);
  };

  // handle click outside
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
    <div className="relative w-fit" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-[54px] w-full items-center rounded-lg border border-border-color px-3 text-start sm:w-fit sm:min-w-[250px]"
      >
        <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray/70">
          Discipline
        </span>
        <span className="w-full text-sm">{selectedDiscipline.name}</span>
        {chevronDownIcon}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 mt-1 max-h-[300px] w-full overflow-auto rounded-lg border border-border-color bg-white`}
          >
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
  );
};

const chevronDownIcon = (
  <svg
    width="12"
    height="6"
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.00041 5.91789C5.8057 5.91827 5.61701 5.85046 5.46708 5.72623L0.467078 1.55956C0.112695 1.26501 0.0641929 0.738941 0.358745 0.384559C0.653297 0.0301759 1.17936 -0.0183266 1.53374 0.276225L6.00041 4.00956L10.4671 0.409559C10.6392 0.26975 10.86 0.204334 11.0806 0.227796C11.3011 0.251257 11.5032 0.361659 11.6421 0.534559C11.7964 0.707775 11.8715 0.937456 11.8493 1.16836C11.8272 1.39926 11.7098 1.61048 11.5254 1.75123L6.52541 5.77623C6.37118 5.88082 6.18633 5.9307 6.00041 5.91789Z"
      fill="#637381"
    />
  </svg>
);

export default SelectFactDisciplineDropdown;
