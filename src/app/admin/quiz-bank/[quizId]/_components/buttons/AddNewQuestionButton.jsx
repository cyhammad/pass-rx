"use client";

import { useState } from "react";
import AddQuestionModal from "../modals/AddQuestionModal";

const AddNewQuestionButton = ({
  quizbank,
  token,
  selectedDiscipline,
  revalidateData,
}) => {
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  return (
    <>
      {showAddQuestionModal && (
        <AddQuestionModal
          quizbank={quizbank}
          token={token}
          setShowModal={setShowAddQuestionModal}
          prevSelectedDiscipline={selectedDiscipline}
          revalidateData={revalidateData}
        />
      )}
      <button
        className="button flex min-h-[48px] min-w-[185px] items-center justify-center gap-x-3 rounded-md bg-primary px-5 text-sm text-white"
        onClick={() => setShowAddQuestionModal(true)}
      >
        {plusIcon} Add New Question
      </button>
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

export default AddNewQuestionButton;
