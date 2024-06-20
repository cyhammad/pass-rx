"use client";

import { useState } from "react";
import AddQuestionModal from "../modals/AddQuestionModal";

const AddNewQuestionIconButton = ({
  quizbank,
  token,
  selectedDiscipline,
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
          
        />
      )}
      <button
        className="text-primary"
        onClick={() => setShowAddQuestionModal(true)}
      >
        {addQuestionIcon}
      </button>
    </>
  );
};

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

export default AddNewQuestionIconButton;
