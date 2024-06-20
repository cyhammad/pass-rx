"use client";

import { useState } from "react";
import DeleteDisciplineModal from "../modals/DeleteDisciplineModal";
import DisciplineCardDropdown from "../dropdowns/DisciplineCardDropdown";
import { AnimatePresence } from "framer-motion";
import EditDisciplineModal from "../modals/EditDisciplineModal";

export default function DisciplineCard({ discipline, token }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const renderDate = (date) => {
    if (!date) return "N/A";
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  return (
    <>
      <AnimatePresence>
        {isDeleteModalOpen && (
          <DeleteDisciplineModal
            setIsOpen={setIsDeleteModalOpen}
            discipline={discipline}
            token={token}
            
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEditModalOpen && (
          <EditDisciplineModal
            setIsOpen={setIsEditModalOpen}
            discipline={discipline}
            token={token}
            
          />
        )}
      </AnimatePresence>
      <div className="flex h-[138px] w-full justify-between rounded-2xl  bg-white p-5 drop-shadow-sm">
        <div className="w-10/12">
          <p className="text-lg">{discipline.name}</p>
          <p className="mt-2 flex items-center gap-[5px] text-[13px]">
            12 Questions
          </p>
          <p className="mt-7 text-[10px] text-text-gray-2">
            Last updated on {renderDate(discipline.updatedAt)}
          </p>
        </div>
        <DisciplineCardDropdown
          setIsEditModalOpen={setIsEditModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      </div>
    </>
  );
}
