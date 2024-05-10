import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openModal } from "@/lib/features/deleteModal/deleteModalSlice";
import { toggle } from "@/lib/features/editFlashCard/editFlashCradSlice";

const DisciplineDropdowns = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  const dropdownRef = useRef(null);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex w-full   justify-between"
        onClick={() => toggleMenu()}
      >
        <span className=" text-sm ">{selectedOption || "Select Option"}</span>
        {option}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 top-7 z-40 flex w-40 flex-col justify-between rounded-xl bg-dark pb-2.5 text-white"
        >
          <div className="flex flex-col gap-y-1.5 py-2">
            <button
              className="flex items-center justify-between px-4 py-1.5"
              onClick={() => handleOptionClick("Discipline1")}
            >
              <div className="flex items-center gap-x-2">
                <span className="text-xs">Discipline1</span>
              </div>
            </button>
            <button
              className="flex items-center justify-between px-4 py-1.5"
              onClick={() => handleOptionClick("Discipline2")} // Step 4: Call handleDeleteClick on delete button click
            >
              <div className="flex items-center gap-x-2">
                <span className="text-xs">Discipline2</span>
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DisciplineDropdowns;

const option = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0003 12.9174C9.80558 12.9178 9.61688 12.85 9.46696 12.7257L4.46696 8.55907C4.11257 8.26452 4.06407 7.73845 4.35862 7.38407C4.65317 7.02969 5.17924 6.98119 5.53362 7.27574L10.0003 11.0091L14.467 7.40907C14.6391 7.26926 14.8599 7.20385 15.0804 7.22731C15.301 7.25077 15.5031 7.36117 15.642 7.53407C15.7962 7.70729 15.8713 7.93697 15.8492 8.16787C15.8271 8.39877 15.7097 8.61 15.5253 8.75074L10.5253 12.7757C10.3711 12.8803 10.1862 12.9302 10.0003 12.9174Z"
      fill="#637381"
    />
  </svg>
);
