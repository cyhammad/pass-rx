"use client";

import QuestionDropdown from "./dropdowns/QuestionDropdown";

const Question = ({ question, token, quizbank }) => {
  const handleDetailedExplanation = () => {
    console.log("View detailed explanation");
  };
  return (
    <div className="flex w-full flex-col gap-y-3 p-3 text-sm">
      <div className="flex items-center justify-between gap-x-3">
        <span className="leading-[22px]">{question.question}</span>
        <QuestionDropdown
          question={question}
          token={token}
          quizbank={quizbank}
        />
      </div>
      <div className="flex flex-col gap-y-2 text-sm">
        <span className="text-text-gray/50">Possible Options</span>
        {question.answers.map((answer, index) => (
          <div
            key={index}
            className={`flex cursor-pointer items-center gap-x-8 rounded-lg ${
              question.correctAnswerIndex === index
                ? "text-green"
                : "text-white"
            }`}
          >
            <span>{answer.answer}</span>
            {question.correctAnswerIndex === index && greenTick}
          </div>
        ))}
        <button
          className="mt-4 w-fit cursor-pointer text-start text-xs text-primary hover:underline"
          onClick={() => handleDetailedExplanation()}
        >
          View detailed explanation
        </button>
      </div>
    </div>
  );
};

const greenTick = (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5.22072L4.96755 9.18827L12.9167 1.25317"
      stroke="#00DF80"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Question;
