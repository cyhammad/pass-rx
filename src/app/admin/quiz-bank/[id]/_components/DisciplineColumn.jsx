"use client";

import { useState } from "react";
import DisciplineButton from "./DisciplineButton";
import { AnimatePresence, motion } from "framer-motion";
import AddDisciplineModal from "./modals/AddDisciplineModal";

const DisciplineColumn = ({
  disciplines,
  selectedDiscipline,
  setSelectedDiscipline,
  showDisciplines,
}) => {
  const [disciplineSearch, setDisciplineSearch] = useState("");
  const filteredDisciplines = disciplines.filter((discipline) =>
    discipline.name.toLowerCase().includes(disciplineSearch.toLowerCase()),
  );
  const [showAddDisciplineModal, setShowAddDisciplineModal] = useState(false);
  return (
    <>
      {showAddDisciplineModal && (
        <AddDisciplineModal
          showModal={showAddDisciplineModal}
          setShowModal={setShowAddDisciplineModal}
        />
      )}
      <AnimatePresence>
        {showDisciplines && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-20 flex w-full flex-col justify-between gap-y-10 bg-mattBlack pb-7 pl-4 sm:static sm:h-full sm:max-w-[285px]"
          >
            <div className="flex w-full flex-col">
              <div className="mb-4 mr-4 mt-2 flex h-[50px] items-center gap-x-1 overflow-hidden rounded-lg border border-blackBorder p-4 sm:hidden sm:min-w-[302px]">
                {searchIcon}
                <input
                  type="search"
                  name="disciplineSearch"
                  id="disciplineSearch"
                  placeholder="Search Disciplines"
                  value={disciplineSearch}
                  onChange={(e) => setDisciplineSearch(e.target.value)}
                  className="w-full border-none bg-transparent text-xs text-white outline-none ring-transparent focus:border-none focus:outline-none focus:ring-transparent"
                />
              </div>
              {filteredDisciplines.map((discipline) => (
                <DisciplineButton
                  key={discipline.id}
                  selected={selectedDiscipline._id === discipline._id}
                  onClick={() => setSelectedDiscipline(discipline)}
                  discipline={discipline}
                />
              ))}
              <button
                onClick={() => setShowAddDisciplineModal(true)}
                className="mt-10 w-fit rounded-md border border-primary px-5 py-2 text-sm text-primary sm:hidden"
              >
                + New Discipline
              </button>
            </div>
            <button
              onClick={() => setShowAddDisciplineModal(true)}
              className="hidden w-fit rounded-md border border-primary px-5 py-2 text-sm text-primary sm:block"
            >
              + New Discipline
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const searchIcon = (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6589 17.6932C15.0794 17.6932 18.6629 14.1097 18.6629 9.68914C18.6629 5.26861 15.0794 1.68506 10.6589 1.68506C6.23833 1.68506 2.65479 5.26861 2.65479 9.68914C2.65479 14.1097 6.23833 17.6932 10.6589 17.6932Z"
      stroke="white"
      strokeWidth="1.51656"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5054 18.5359L17.8203 16.8508"
      stroke="white"
      strokeWidth="1.51656"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DisciplineColumn;
