"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import QuestionTab from "../tabs/question-tab/QuestionTab";
import ExplanationTab from "../tabs/ExplanationTab";
import { editQuestion } from "@/app/lib/actions/questionActions";

const EditQuestionModal = ({
  setShowModal,
  quizbank,
  token,
  prevQuestion,
  revalidateData,
}) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Question");
  const [selectedDiscipline, setSelectedDiscipline] = useState(
    prevQuestion.discipline,
  );
  const [difficulty, setDifficulty] = useState(prevQuestion.difficulty);
  const [question, setQuestion] = useState(prevQuestion.question);
  const [answers, setAnswers] = useState(prevQuestion.answers);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(
    prevQuestion.correctAnswerIndex,
  );
  const handleEditQuestion = async () => {
    console.log("prevQuestion", prevQuestion);
    const res = await editQuestion(
      token,
      prevQuestion._id,
      question,
      answers,
      correctAnswerIndex,
      difficulty.toLowerCase(),
      answers[correctAnswerIndex].explanation,
      selectedDiscipline._id,
    );
    console.log("res", res);
    if (res.message === "Updated successfully") {
      setSuccess(true);
      revalidateData();
      // close modal after 2 seconds
      setInterval(() => {
        setShowModal(false);
      }, 2000);
    } else {
      console.log("error", res);
      setError(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-5 text-white"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="z-50 flex h-full max-h-[90vh] w-full max-w-[700px] flex-col gap-8 overflow-auto rounded-lg bg-almostBlack p-8 shadow-md">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <span className="text-xl">Edit Question</span>
          <div className="flex items-center justify-between gap-8 sm:justify-start">
            <button
              className="flex items-center gap-4"
              onClick={() => setShowModal(false)}
            >
              {cancelIcon}
              <span className="text-sm">Cancel</span>
            </button>
            <button
              onClick={() => handleEditQuestion()}
              className="rounded-md border border-primary px-10 py-1.5 text-sm text-primary sm:px-16"
            >
              Edit
            </button>
          </div>
        </div>
        {error && (
          <div className="flex h-full items-center justify-center text-center text-red-300">
            Error Occured! Please try again
          </div>
        )}
        {success ? (
          <div className="flex h-full items-center justify-center text-center">
            Updated Successfully
          </div>
        ) : (
          <>
            <div className="relative flex w-fit flex-col pb-4">
              <div className="flex items-center gap-4">
                <button
                  className={`text-sm ${selectedTab === "Question" ? "text-white" : "text-text-gray"}`}
                  onClick={() => setSelectedTab("Question")}
                >
                  Question
                </button>
                <button
                  className={`text-sm ${selectedTab === "Explanation" ? "text-white" : "text-text-gray"}`}
                  onClick={() => setSelectedTab("Explanation")}
                >
                  Explanation
                </button>
              </div>
              <motion.div
                initial={{ left: "30px" }}
                animate={{
                  left:
                    selectedTab === "Question" ? "30px" : "calc(50% + 35px)",
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 h-1 w-1 rounded-full bg-primary"
              ></motion.div>
            </div>
            {selectedTab === "Question" ? (
              <QuestionTab
                quizbank={quizbank}
                token={token}
                selectedDiscipline={selectedDiscipline}
                setSelectedDiscipline={setSelectedDiscipline}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                question={question}
                setQuestion={setQuestion}
                answers={answers}
                setAnswers={setAnswers}
                correctAnswerIndex={correctAnswerIndex}
                setCorrectAnswerIndex={setCorrectAnswerIndex}
                disableDisciplineSelect
              />
            ) : (
              <ExplanationTab
                question={question}
                answers={answers}
                setAnswers={setAnswers}
              />
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

const cancelIcon = (
  <svg
    width="8"
    height="8"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.9962 5.93906L8.76572 9.70884C8.89139 9.83023 9.05971 9.89739 9.23442 9.89588C9.40914 9.89436 9.57627 9.82428 9.69981 9.70072C9.82336 9.57717 9.89344 9.41003 9.89495 9.2353C9.89647 9.06057 9.82931 8.89224 9.70793 8.76656L5.93842 4.99678L9.70793 1.227C9.82931 1.10132 9.89647 0.932984 9.89495 0.758258C9.89344 0.583532 9.82336 0.416393 9.69981 0.292838C9.57627 0.169284 9.40914 0.0991998 9.23442 0.0976814C9.05971 0.0961631 8.89139 0.163332 8.76572 0.28472L4.9962 4.0545L1.22669 0.28472C1.10045 0.166332 0.93311 0.101706 0.760072 0.104516C0.587034 0.107326 0.421877 0.177352 0.299548 0.299777C0.177218 0.422201 0.107314 0.58742 0.104626 0.760472C0.101939 0.933524 0.166679 1.10083 0.285148 1.227L4.05399 4.99678L0.284482 8.76656C0.220839 8.82803 0.170076 8.90156 0.135153 8.98287C0.100231 9.06417 0.0818487 9.15161 0.0810798 9.2401C0.080311 9.32858 0.0971705 9.41633 0.130675 9.49823C0.164179 9.58012 0.213657 9.65453 0.276222 9.7171C0.338787 9.77967 0.413186 9.82915 0.495077 9.86265C0.576969 9.89616 0.664712 9.91302 0.753189 9.91225C0.841666 9.91149 0.929104 9.8931 1.0104 9.85818C1.0917 9.82325 1.16522 9.77248 1.22669 9.70884L4.9962 5.93906Z"
      fill="white"
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

export default EditQuestionModal;
