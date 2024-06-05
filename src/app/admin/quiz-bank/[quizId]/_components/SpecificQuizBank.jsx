"use client";

import { useState } from "react";
import DisciplineColumn from "./DisciplineColumn";
import QuestionList from "./QuestionList";
import AddNewQuestionIconButton from "./buttons/AddNewQuestionIconButton";

const SpecificQuizBank = ({ quizbank, token }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(
    quizbank.disciplines[0],
  );
  console.log("QuizBank", quizbank);
  return (
    <></>
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

export default SpecificQuizBank;
