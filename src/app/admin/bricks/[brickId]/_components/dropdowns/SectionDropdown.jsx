import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { option } from "@/svgs/commonSvgs";
import { deleteSection } from "@/app/lib/actions/brickSectionActions";
import { revalidateData } from "@/app/utils/revalidate-data";
import DeleteSectionModal from "../modals/DeleteSectionModal";

export default function SectionDropdown({ token, brickId, sectionId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteClick = async () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      {isDeleteModalOpen && (
        <DeleteSectionModal
          setIsOpen={setIsDeleteModalOpen}
          token={token}
          brickId={brickId}
          sectionId={sectionId}
        />
      )}
      <div className="relative z-20" ref={dropdownRef}>
        <button
          className="z-50 flex justify-center rounded-full text-center"
          onClick={() => toggleMenu()}
        >
          {option}
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-5 flex w-36 flex-col justify-between rounded-xl bg-dark text-white"
          >
            <div className="z-50 flex flex-col gap-y-1.5 py-2">
              <button className="flex items-center justify-between px-3 py-1">
                <div className="flex items-center gap-x-3">
                  {lock1}
                  <span className="text-xs">Lock</span>
                </div>
              </button>
              <button
                className="flex items-center justify-between px-3 py-1"
                onClick={() => handleDeleteClick()} // Step 4: Call handleDeleteClick on delete button click
              >
                <div className="flex items-center gap-x-2">
                  {cross}
                  <span className="text-xs">Delete</span>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

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
      fill="white"
    />
  </svg>
);
const lock = (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.96303 1C4.85522 1 3.14501 2.8243 3.14501 5.07445V7.25643H2.58619C1.71626 7.25643 1 8.01796 1 8.94761V15.3088C1 16.2385 1.71626 17 2.58619 17H11.4173C12.2872 17 13 16.2385 13 15.3088V8.94761C13 8.01796 12.2872 7.25643 11.4173 7.25643H10.7836V5.07445C10.7836 2.8243 9.07085 1 6.96303 1ZM6.96303 1.94118C8.59939 1.94118 9.90328 3.33055 9.90328 5.07445V7.25643H4.02536V5.07445C4.02536 3.33055 5.32666 1.94118 6.96303 1.94118ZM2.58619 8.19761H3.58346H10.3417H11.4173C11.8157 8.19761 12.1196 8.5242 12.1196 8.94761V15.3088C12.1196 15.7322 11.8157 16.0588 11.4173 16.0588H2.58619C2.18771 16.0588 1.88035 15.7322 1.88035 15.3088V8.94761C1.88035 8.5242 2.18771 8.19761 2.58619 8.19761ZM7.00172 9.86489C6.15965 9.86489 5.46454 10.6047 5.46454 11.5046C5.46454 12.2408 5.92961 12.8671 6.55982 13.0708V13.9228C6.56005 13.9846 6.57166 14.0457 6.59399 14.1027C6.61631 14.1597 6.64893 14.2115 6.68996 14.255C6.731 14.2985 6.77965 14.333 6.83314 14.3564C6.88663 14.3799 6.94391 14.3918 7.00172 14.3915C7.11787 14.3911 7.22913 14.3415 7.31126 14.2537C7.39338 14.1659 7.43972 14.047 7.44018 13.9228V13.0717C8.07092 12.8689 8.53547 12.2418 8.53546 11.5046C8.53546 10.6047 7.84379 9.86489 7.00172 9.86489ZM7.00172 10.8061C7.36906 10.8061 7.65511 11.1144 7.65511 11.5046C7.65511 11.8948 7.36906 12.1994 7.00172 12.1994C6.63438 12.1994 6.34489 11.8948 6.34489 11.5046C6.34489 11.1144 6.63438 10.8061 7.00172 10.8061Z"
      fill="Black"
      stroke="Black"
      strokeWidth="0.1"
    />
  </svg>
);
const lock1 = (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.96303 1C4.85522 1 3.14501 2.8243 3.14501 5.07445V7.25643H2.58619C1.71626 7.25643 1 8.01796 1 8.94761V15.3088C1 16.2385 1.71626 17 2.58619 17H11.4173C12.2872 17 13 16.2385 13 15.3088V8.94761C13 8.01796 12.2872 7.25643 11.4173 7.25643H10.7836V5.07445C10.7836 2.8243 9.07085 1 6.96303 1ZM6.96303 1.94118C8.59939 1.94118 9.90328 3.33055 9.90328 5.07445V7.25643H4.02536V5.07445C4.02536 3.33055 5.32666 1.94118 6.96303 1.94118ZM2.58619 8.19761H3.58346H10.3417H11.4173C11.8157 8.19761 12.1196 8.5242 12.1196 8.94761V15.3088C12.1196 15.7322 11.8157 16.0588 11.4173 16.0588H2.58619C2.18771 16.0588 1.88035 15.7322 1.88035 15.3088V8.94761C1.88035 8.5242 2.18771 8.19761 2.58619 8.19761ZM7.00172 9.86489C6.15965 9.86489 5.46454 10.6047 5.46454 11.5046C5.46454 12.2408 5.92961 12.8671 6.55982 13.0708V13.9228C6.56005 13.9846 6.57166 14.0457 6.59399 14.1027C6.61631 14.1597 6.64893 14.2115 6.68996 14.255C6.731 14.2985 6.77965 14.333 6.83314 14.3564C6.88663 14.3799 6.94391 14.3918 7.00172 14.3915C7.11787 14.3911 7.22913 14.3415 7.31126 14.2537C7.39338 14.1659 7.43972 14.047 7.44018 13.9228V13.0717C8.07092 12.8689 8.53547 12.2418 8.53546 11.5046C8.53546 10.6047 7.84379 9.86489 7.00172 9.86489ZM7.00172 10.8061C7.36906 10.8061 7.65511 11.1144 7.65511 11.5046C7.65511 11.8948 7.36906 12.1994 7.00172 12.1994C6.63438 12.1994 6.34489 11.8948 6.34489 11.5046C6.34489 11.1144 6.63438 10.8061 7.00172 10.8061Z"
      fill="white"
      stroke="white"
      strokeWidth="0.1"
    />
  </svg>
);
const chevron = (
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
      d="M3.86177 5.52827C4.12212 5.26792 4.54423 5.26792 4.80458 5.52827L7.99984 8.72353L11.1951 5.52827C11.4554 5.26792 11.8776 5.26792 12.1379 5.52827C12.3983 5.78862 12.3983 6.21073 12.1379 6.47108L8.47124 10.1377C8.21089 10.3981 7.78878 10.3981 7.52843 10.1377L3.86177 6.47108C3.60142 6.21073 3.60142 5.78862 3.86177 5.52827Z"
      fill="#222222"
    />
  </svg>
);
const addSquare = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.18766 14.0413H9.81266C12.8335 14.0413 14.0418 12.833 14.0418 9.81217V6.18717C14.0418 3.16634 12.8335 1.95801 9.81266 1.95801H6.18766C3.16683 1.95801 1.9585 3.16634 1.9585 6.18717V9.81217C1.9585 12.833 3.16683 14.0413 6.18766 14.0413Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5835 8H10.4168"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10.4163V5.58301"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
