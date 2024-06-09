import { deleteBrick } from "@/app/lib/actions/brickActions";
import { motion } from "framer-motion";
import { useState } from "react";

const DeleteBrickModal = ({ setIsOpen, brick, token, revalidateData }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleDeleteBrick = async () => {
    const res = await deleteBrick(token, brick._id);
    console.log("res", res);
    if (res.message === "Deleted successfully") {
      revalidateData();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        closeModal();
      }, 2000);
    } else {
      setError(res.message);
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

      <div className="z-50 flex  h-[300px] max-w-lg flex-col items-center justify-between rounded-lg bg-white shadow-md md:h-[412.35px]">
        <div className="flex w-full items-center justify-between border-b border-black/10 px-6 py-2 md:gap-56 md:py-3">
          <p className="text-lg font-semibold ">Delete Brick</p>
          <span onClick={() => closeModal()} className="cursor-pointer">
            {cross}
          </span>
        </div>
        <div className="mt-[-2rem] flex w-2/3 flex-col  items-center">
          <span className="">{alert}</span>
          <p className="text-center text-sm sm:text-lg ">
            {error === "" && !success
              ? `Are you sure you want to delete "${brick.title}" brick.`
              : !success
                ? error
                : "Brick deleted successfully"}
          </p>
        </div>
        <div className="mb-3 flex w-full justify-between px-5 ">
          <button
            className="hover:bg-gray-400 mr-2 w-1/2 rounded-lg border  border-black/10 py-2 font-medium focus:outline-none md:py-4"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
          <button
            className="w-1/2 rounded-lg  bg-error-light  py-2   font-medium text-white focus:outline-none  md:py-4"
            onClick={() => handleDeleteBrick()}
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DeleteBrickModal;
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
const alert = (
  <svg
    viewBox="0 0 177 178"
    fill="none"
    className="h-[100px] w-[100px] md:h-[156px] md:w-[156px]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M166.38 120.565L109.814 26.7549C105.165 19.4831 97.1304 15.083 88.4999 15.083C79.8694 15.083 71.8345 19.4831 67.1861 26.7549L10.6199 120.565C6.55291 127.344 6.41234 135.779 10.2511 142.69C14.6907 150.472 22.9747 155.262 31.9336 155.227H145.066C153.964 155.322 162.234 150.653 166.749 142.985C170.702 135.998 170.561 127.418 166.38 120.565ZM88.4999 125.727C84.4268 125.727 81.1249 122.425 81.1249 118.352C81.1249 114.279 84.4268 110.977 88.4999 110.977C92.573 110.977 95.8749 114.279 95.8749 118.352C95.8749 122.425 92.573 125.727 88.4999 125.727ZM88.4999 103.602C92.573 103.602 95.8749 100.3 95.8749 96.2274V66.7274C95.8749 62.6543 92.573 59.3524 88.4999 59.3524C84.4268 59.3524 81.1249 62.6543 81.1249 66.7274V96.2274C81.1249 100.3 84.4268 103.602 88.4999 103.602Z"
      fill="#FF5630"
    />
  </svg>
);
