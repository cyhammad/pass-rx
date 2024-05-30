"use client";

import { useState } from "react";
import DisciplineButton from "./DisciplineButton";
import { Poppins } from "next/font/google";
import Question from "./Question";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SpecificQuizBank = ({ quizbank, token }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(
    quizbank.disciplines[0]._id,
  );
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
      <div className="flex w-full items-center justify-between pb-4 pt-8">
        <h1 className="text-2xl font-semibold">{quizbank.title}</h1>
        <div className="flex items-center gap-x-2">
          <span className="text-sm text-text-secondary">
            last updated: {renderDate(quizbank.updatedAt)}
          </span>
          <button className="button flex min-h-[48px] min-w-[185px] items-center justify-center gap-x-3 rounded-md bg-primary px-5 text-sm text-white">
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
          <span className="text-sm">Discipline</span>
          <div className="flex h-[50px] items-center gap-x-1 overflow-hidden rounded-lg border border-blackBorder p-4 sm:min-w-[302px]">
            {searchIcon}
            <input
              type="search"
              name="disciplineSearch"
              id="disciplineSearch"
              placeholder="Search Disciplines"
              value={disciplineSearch}
              onChange={(e) => setDisciplineSearch(e.target.value)}
              className="w-full border-none text-xs bg-transparent text-white outline-none ring-transparent focus:border-none focus:outline-none focus:ring-transparent"
            />
          </div>
        </div>
        <div className="flex h-full">
          <div className="flex h-full w-full max-w-[285px] flex-col justify-between gap-y-10 pb-7 pl-4">
            <div className="flex w-full flex-col">
              {filteredDisciplines.map((discipline) => (
                <DisciplineButton
                  key={discipline.id}
                  selected={selectedDiscipline === discipline._id}
                  onClick={() => setSelectedDiscipline(discipline._id)}
                  discipline={discipline}
                />
              ))}
            </div>
            <button className="w-fit rounded-md border border-primary px-5 py-2 text-sm text-primary">
              + New Discipline
            </button>
          </div>
          <div className="bg-almostBlack flex h-full w-full flex-col p-4">
            <div className="flex w-full justify-between mb-7">
              <div className="flex items-center gap-x-2">
                <span className="text-lg">All Questions</span>
                <span className="text-primary">{addQuestionIcon}</span>
              </div>
              <button className="">{searchIcon}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

export default SpecificQuizBank;
