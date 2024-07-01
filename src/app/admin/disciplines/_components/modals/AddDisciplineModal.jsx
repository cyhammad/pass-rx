import { addDiscipline } from "@/app/lib/actions/disciplineActions";
import { revalidateData } from "@/app/utils/revalidate-data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AddDisciplineModal({ toggleModal, token }) {
  const [disciplineName, setDisciplineName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const closeModal = () => {
    toggleModal();
  };
  const handleCreateDiscipline = async () => {
    if (disciplineName === "") {
      setError("Discipline Name is required");
      return;
    }
    const res = await addDiscipline(token, disciplineName);
    const resObj = JSON.parse(res);
    if (resObj.message === "Discipline created successfully") {
      revalidateData("/admin/disciplines?tab=Disciplines");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        closeModal();
      }, 2000);
    } else {
      setError(resObj.message);
    }
  };

  //  error disappears after 5 seconds
  if (error !== "") {
    setTimeout(() => {
      setError("");
    }, 5000);
  }

  //   on pressing enter key invoke addDiscipline function
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateDiscipline();
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
        onClick={() => closeModal()}
      ></div>
      <div className="z-50 flex w-[505px] flex-col items-center justify-between rounded-lg bg-white shadow-md">
        <div className="flex w-full items-center justify-between border-b border-black/10 px-6 pt-2 md:gap-56 md:py-3">
          <p className="text-lg font-semibold ">Add New Discipline</p>
          <span onClick={() => closeModal()} className="cursor-pointer">
            {cross}
          </span>
        </div>
        <div className="flex w-full flex-col gap-y-10 p-5">
          <div className="flex w-full flex-col gap-y-2">
            <div className="h-12 rounded-lg border border-border-color px-2 md:flex">
              <input
                type="text"
                name="disciplineName"
                id="disciplineName"
                placeholder="Discipline Name"
                className="w-full border-none text-sm outline-none focus:border-none focus:outline-none focus:ring-transparent"
                value={disciplineName}
                onChange={(e) => setDisciplineName(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
              />
            </div>
            {error && <p className="px-2 text-xs text-red-500">*{error}</p>}
            {success && (
              <p className="px-2 text-xs text-green">
                Discipline created successfully
              </p>
            )}
          </div>
          <div className="mb-3 flex w-full justify-between">
            <button
              className="hover:bg-gray-400 mr-2 w-1/2 rounded-lg border  border-black/10 py-2 font-medium focus:outline-none md:py-4"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <button
              className="w-1/2 rounded-lg bg-primary py-2 font-medium text-white focus:outline-none md:py-4"
              onClick={() => handleCreateDiscipline()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
const cross = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0806 24.5947L24.9187 14.7566"
      stroke="#121212"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.9187 24.595L15.0806 14.7568"
      stroke="#121212"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
