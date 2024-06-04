"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import Question from "./Question";
import DisciplineColumn from "./DisciplineColumn";
import AddQuestionModal from "./modals/AddQuestionModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SpecificQuizBank = ({ quizbank, token }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(
    quizbank.disciplines[0],
  );
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  const [showDisciplines, setShowDisciplines] = useState(true);
  console.log("QuizBank", quizbank);
  const [disciplineSearch, setDisciplineSearch] = useState("");
  const renderDate = (date) => {
    if (!date) return "N/A";
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  const filteredDisciplines = quizbank.disciplines.filter((discipline) =>
    discipline.name.toLowerCase().includes(disciplineSearch.toLowerCase()),
  );
  return (
    <>
      {showAddQuestionModal && (
        <AddQuestionModal
          quizbank={quizbank}
          token={token}
          setShowModal={setShowAddQuestionModal}
        />
      )}
      <div className="flex w-full flex-col justify-between gap-3 pb-4 pt-8 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-semibold">{quizbank.title}</h1>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="text-sm text-text-secondary">
            last updated: {renderDate(quizbank.updatedAt)}
          </span>
          <button
            className="button flex min-h-[48px] min-w-[185px] items-center justify-center gap-x-3 rounded-md bg-primary px-5 text-sm text-white"
            onClick={() => setShowAddQuestionModal(true)}
          >
            {plusIcon} Add New Question
          </button>
          <button className="button flex min-h-[48px] min-w-[185px] items-center justify-center gap-x-3 rounded-md bg-green px-5 text-sm text-white">
            {plusIcon} Upload CSV File
          </button>
        </div>
      </div>
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
        <div className="relative flex h-full flex-col sm:flex-row">
          <DisciplineColumn
            disciplines={filteredDisciplines}
            selectedDiscipline={selectedDiscipline}
            setSelectedDiscipline={setSelectedDiscipline}
            showDisciplines={showDisciplines}
          />
          <div className="flex h-full w-full flex-col bg-almostBlack p-4">
            <div className="mb-7 flex w-full justify-between">
              <div className="flex items-center gap-x-2">
                <span className="text-lg">All Questions</span>
                <span className="text-primary">{addQuestionIcon}</span>
              </div>
              <button className="">{searchIcon}</button>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Question />
              <Question />
              <Question />
              <Question />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const plusIcon = (
  <svg
    width="12"
    height="11"
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.2002 5.5H10.8002"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 10.3V0.699951"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

const addQuestionIcon = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="1.2207"
      width="19"
      height="19"
      rx="9.5"
      stroke="currentColor"
    />
    <path
      d="M14.516 11.5867H10.88V15.3127H8.972V11.5867H5.336V9.8587H8.972V6.1327H10.88V9.8587H14.516V11.5867Z"
      fill="currentColor"
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

export default SpecificQuizBank;
