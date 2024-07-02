"use client";

import { motion } from "framer-motion";
import SelectFactDisciplineDropdown from "../dropdowns/SelectFactDisciplineDropdown";
import { useState } from "react";
import CustomTextarea from "../inputs/CustomTextarea";
import {
  addFlashFact,
  editFlashFact,
} from "@/app/lib/actions/flashFactActions";
import { revalidateData } from "@/app/utils/revalidate-data";

const EditFlashFactModal = ({
  closeModal,
  disciplines,
  prevFlashFact,
  token,
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(
    prevFlashFact.discipline,
  );
  const [question, setQuestion] = useState(prevFlashFact.question);
  const [answer, setAnswer] = useState(prevFlashFact.answer);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleAdd = async () => {
    // add flash fact logic here
    const res = await editFlashFact(
      token,
      question,
      answer,
      selectedDiscipline._id,
      prevFlashFact._id,
    );
    if (res.message === "Updated successfully") {
      setSuccess(true);
      revalidateData("/admin/flash-facts");
      // close modal after 2 seconds
      setTimeout(() => {
        closeModal();
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-5"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={closeModal}
      ></div>

      <div className="z-50 flex h-[70vh] w-full max-w-[700px] flex-col items-center rounded-lg bg-white p-8 shadow-md">
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-medium md:text-xl">
            Edit Flash Card
          </span>
          <div className="flex gap-x-4">
            <button
              onClick={closeModal}
              className="flex cursor-pointer items-center gap-1 p-2 text-xs sm:text-sm"
            >
              {cross} Discard
            </button>
            <button
              className="rounded-lg border border-primary px-16 text-xs font-medium text-primary  sm:text-sm"
              onClick={() => handleAdd()}
            >
              Add
            </button>
          </div>
        </div>
        {error && (
          <div className="flex h-full items-center justify-center text-center">
            Error Occurred! Try Again
          </div>
        )}
        {success ? (
          <div className="flex h-full items-center justify-center text-center">
            Edited Successfully
          </div>
        ) : (
          <>
            <div className="flex w-full flex-col gap-6 py-10">
              <SelectFactDisciplineDropdown
                disciplines={disciplines}
                selectedDiscipline={selectedDiscipline}
                setSelectedDiscipline={setSelectedDiscipline}
              />
              <CustomTextarea
                title="Question"
                value={question}
                setValue={setQuestion}
              />
              <CustomTextarea
                title="Answer"
                value={answer}
                setValue={setAnswer}
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

const cross = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.9962 8.93906L11.7657 12.7088C11.8914 12.8302 12.0597 12.8974 12.2344 12.8959C12.4091 12.8944 12.5763 12.8243 12.6998 12.7007C12.8234 12.5772 12.8934 12.41 12.895 12.2353C12.8965 12.0606 12.8293 11.8922 12.7079 11.7666L8.93842 7.99678L12.7079 4.227C12.8293 4.10132 12.8965 3.93298 12.895 3.75826C12.8934 3.58353 12.8234 3.41639 12.6998 3.29284C12.5763 3.16928 12.4091 3.0992 12.2344 3.09768C12.0597 3.09616 11.8914 3.16333 11.7657 3.28472L7.9962 7.0545L4.22669 3.28472C4.10045 3.16633 3.93311 3.10171 3.76007 3.10452C3.58703 3.10733 3.42188 3.17735 3.29955 3.29978C3.17722 3.4222 3.10731 3.58742 3.10463 3.76047C3.10194 3.93352 3.16668 4.10083 3.28515 4.227L7.05399 7.99678L3.28448 11.7666C3.22084 11.828 3.17008 11.9016 3.13515 11.9829C3.10023 12.0642 3.08185 12.1516 3.08108 12.2401C3.08031 12.3286 3.09717 12.4163 3.13067 12.4982C3.16418 12.5801 3.21366 12.6545 3.27622 12.7171C3.33879 12.7797 3.41319 12.8291 3.49508 12.8627C3.57697 12.8962 3.66471 12.913 3.75319 12.9123C3.84167 12.9115 3.9291 12.8931 4.0104 12.8582C4.0917 12.8233 4.16522 12.7725 4.22669 12.7088L7.9962 8.93906Z"
      fill="#121212"
    />
  </svg>
);

export default EditFlashFactModal;
