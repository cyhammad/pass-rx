"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DeleteCategoryModal from "../modals/DeleteCategoryModal";
import EditCategoryModal from "../modals/EditCategoryModal";
import CategoryCardDropdown from "../dropdowns/CategoryCardDropdown";

export default function CategoryCard({ category, token }) {
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
          <DeleteCategoryModal
            setIsOpen={setIsDeleteModalOpen}
            category={category}
            token={token}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEditModalOpen && (
          <EditCategoryModal
            setIsOpen={setIsEditModalOpen}
            category={category}
            token={token}
          />
        )}
      </AnimatePresence>
      <div className="flex h-[138px] w-full justify-between rounded-2xl  bg-white p-5 drop-shadow-sm">
        <div className="w-10/12">
          <p className="text-lg">{category.name}</p>
          <p className="mt-2 flex items-center gap-[5px] text-[13px]">
            {category.totalDisciplines ? category.totalDisciplines : 0}{" "}
            disciplines
          </p>
          <p className="mt-7 text-[10px] text-text-gray-2">
            Last updated on {renderDate(category.updatedAt)}
          </p>
        </div>
        <CategoryCardDropdown
          setIsEditModalOpen={setIsEditModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      </div>
    </>
  );
}
