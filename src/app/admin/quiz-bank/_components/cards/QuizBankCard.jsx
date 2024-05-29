import { AnimatePresence } from "framer-motion";
import QuizCardDropdown from "../dropdowns/QuizCardDropdown";
import DeleteQuizBankModal from "../modals/DeleteQuizBankModal";
import { useState } from "react";

export default function QuizBankCard({ quiz, revalidateData, token }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const renderDate = (date) => {
    if (!date) return "N/A";
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  return (
    <>
      <AnimatePresence>
        {isDeleteModalOpen && (
          <DeleteQuizBankModal
            setIsOpen={setIsDeleteModalOpen}
            quiz={quiz}
            token={token}
            revalidateData={revalidateData}
          />
        )}
      </AnimatePresence>
      <div className="flex h-[138px] w-full justify-between rounded-2xl bg-white p-5 drop-shadow-sm">
        <div className="w-10/12">
          <p className="text-lg">{quiz.title}</p>
          <p className="mt-2 flex items-center gap-[5px] text-[13px]">
            {quiz.disciplines.length} Discipline
            <span className="text-[9px] text-text-gray">
              ({quiz.questions} Questions)
            </span>
          </p>
          <p className="mt-7 text-[10px] text-text-gray-2">
            Last Updated at {renderDate(quiz.updatedAt)}
          </p>
        </div>
        <QuizCardDropdown
          quizId={quiz._id}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      </div>
    </>
  );
}
