"use client";

import { useState } from "react";
import DisciplineButton from "./DisciplineButton";
import { AnimatePresence, motion } from "framer-motion";
import AddDisciplineModal from "./modals/AddDisciplineModal";
import { Poppins } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DisciplineColumn = ({
  disciplines,
  children,
  selectedDiscipline,
  quizId,
}) => {
  const router = useRouter();
  const [disciplineSearch, setDisciplineSearch] = useState("");
  const filteredDisciplines = disciplines.filter((discipline) =>
    discipline.name.toLowerCase().includes(disciplineSearch.toLowerCase()),
  );
  const [showAddDisciplineModal, setShowAddDisciplineModal] = useState(false);
  const [showDisciplines, setShowDisciplines] = useState(true);
  return (
    <div
      className={`${poppins.className} flex h-full min-h-[750px] w-full flex-col overflow-hidden rounded-2xl bg-mattBlack text-white`}
    >
      <div className="flex items-center justify-between p-5">
        <button
          className="flex items-center gap-x-3 text-sm"
          onClick={() => setShowDisciplines(!showDisciplines)}
        >
          Discipline
          {!showDisciplines && <span>({selectedDiscipline.name})</span>}
          <div
            className={
              showDisciplines ? "sm:-rotate-90" : "rotate-180 sm:rotate-90"
            }
          >
            {chevronDownIcon}
          </div>
        </button>
        <div className="hidden h-[50px] items-center gap-x-1 overflow-hidden rounded-lg border border-blackBorder p-4 sm:flex sm:min-w-[302px]">
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
      </div>
      {showAddDisciplineModal && (
        <AddDisciplineModal
          showModal={showAddDisciplineModal}
          setShowModal={setShowAddDisciplineModal}
        />
      )}
      <div className="flex h-full flex-col sm:flex-row">
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
                    key={discipline._id}
                    selected={selectedDiscipline._id === discipline._id}
                    onClick={() =>
                      router.push(
                        `/admin/quiz-bank/${quizId}/discipline/${discipline._id}`,
                      )
                    }
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
        {children}
      </div>
    </div>
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

const chevronDownIcon = (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.00041 6.41789C5.8057 6.41827 5.61701 6.35046 5.46708 6.22623L0.467078 2.05956C0.112695 1.76501 0.0641929 1.23894 0.358745 0.884559C0.653297 0.530176 1.17936 0.481673 1.53374 0.776225L6.00041 4.50956L10.4671 0.909559C10.6392 0.76975 10.86 0.704334 11.0806 0.727796C11.3011 0.751257 11.5032 0.861659 11.6421 1.03456C11.7964 1.20777 11.8715 1.43746 11.8493 1.66836C11.8272 1.89926 11.7098 2.11048 11.5254 2.25123L6.52541 6.27623C6.37118 6.38082 6.18633 6.4307 6.00041 6.41789Z"
      fill="#637381"
    />
  </svg>
);

export default DisciplineColumn;
