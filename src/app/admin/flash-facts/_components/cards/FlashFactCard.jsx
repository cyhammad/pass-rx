"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import DeleteFlashFactModal from "../modals/DeleteFlashFactModal";
import FlashFactCardDropdown from "../dropdowns/FlashFactCardDropdown";
import EditFlashFactModal from "../modals/EditFlashFactModal";

export default function FlashFactCard({
  flashFact,
  revalidateData,
  token,
  disciplines,
}) {
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
          <DeleteFlashFactModal
            closeModal={() => setIsDeleteModalOpen(false)}
            flashFact={flashFact}
            token={token}
            revalidateData={revalidateData}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEditModalOpen && (
          <EditFlashFactModal
            closeModal={() => setIsEditModalOpen(false)}
            disciplines={disciplines}
            prevFlashFact={flashFact}
            token={token}
            revalidateData={revalidateData}
          />
        )}
      </AnimatePresence>
      <div className="flex h-full min-h-[138px] w-full justify-between rounded-2xl bg-white p-5 drop-shadow-sm">
        <div className="flex w-10/12 flex-col justify-between">
          <div className="flex flex-col gap-y-2">
            <p className="text-[13px]">{flashFact.question}</p>
            <p className=" text-xs text-text-success">{flashFact.answer}</p>
          </div>
          <p className="mt-2 text-[10px] text-text-gray-2">
            {flashFact.discipline.name}
          </p>
        </div>
        <FlashFactCardDropdown
          flashFactId={flashFact._id}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      </div>
    </>
  );
}
