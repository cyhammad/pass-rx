"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cross } from "@/svgs/commonSvgs";
import { useRouter } from "next/navigation";

export default function ChapterDropdown({ chapter, sectionId, brickId }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isRotated, setIsRotated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRotated(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsRotated(!isRotated);
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-3 w-full">
      <div className="relative w-full" ref={dropdownRef}>
        <div className="flex h-10 w-full items-center justify-center rounded-xl bg-gray-bg text-center shadow">
          <div className="flex w-full items-center justify-between gap-3 rounded-[100px] py-[5px] pl-3 pr-1.5 text-sm text-dark">
            <div className="flex items-center justify-between gap-1 text-xs">
              {chapter?.title}
              <button
                onClick={() =>
                  router.push(
                    `/admin/bricks/${brickId}/add-topic?sectionId=${sectionId}&chapterId=${chapter._id}`,
                  )
                }
                className="p-1"
              >
                {add}
              </button>
            </div>
            <div className="flex items-center gap-1">
              {lock}
              <button
                onClick={() => toggleMenu()}
                className={`transform cursor-pointer p-1 transition-transform ${isRotated ? "rotate-180" : ""}`}
              >
                {chevron}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=" right-0 top-7 flex w-full flex-col justify-between rounded-xl  pb-2.5"
          >
            <div className="flex w-full flex-col gap-y-1.5 py-2">
              {chapter?.topics.map((topic) => (
                <button
                  className="flex  w-full items-center justify-between px-3 py-1.5"
                  key={topic._id}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="text-xs">{topic.title}</span>
                    <div className="flex items-center gap-3">
                      {cross}
                      {pencil}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const pencil = (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_481_6415)">
      <path
        d="M7.41065 2.51562L0.808079 9.11867C0.774861 9.15198 0.750876 9.19405 0.739455 9.23926L0.00762279 12.1767C-0.0142684 12.2651 0.0117155 12.3591 0.0762469 12.4237C0.125074 12.4725 0.191604 12.4995 0.259657 12.4995C0.280501 12.4995 0.301821 12.497 0.32257 12.4917L3.25999 11.7598C3.30577 11.7484 3.34736 11.7245 3.38058 11.6913L9.98372 5.0887L7.41065 2.51562Z"
        fill="#121212"
      />
      <path
        d="M11.6193 1.61493L10.8843 0.879955C10.3931 0.388736 9.53694 0.389211 9.04629 0.879955L8.146 1.78025L10.719 4.35323L11.6193 3.45293C11.8646 3.20765 11.9998 2.88119 11.9998 2.53398C11.9998 2.18676 11.8646 1.8603 11.6193 1.61493Z"
        fill="#121212"
      />
    </g>
    <defs>
      <clipPath id="clip0_481_6415">
        <rect
          width="12"
          height="12"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
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

const chevron = (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.754393 1.27295L1.24506 0.787109L5.6535 5.23802L9.99357 0.969427L10.478 1.46182L5.64694 6.21315L0.754393 1.27295Z"
      fill="black"
      fillOpacity="0.6"
      stroke="#121212"
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
const add = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.43766 13.2913H9.06266C12.0835 13.2913 13.2918 12.083 13.2918 9.06217V5.43717C13.2918 2.41634 12.0835 1.20801 9.06266 1.20801H5.43766C2.41683 1.20801 1.2085 2.41634 1.2085 5.43717V9.06217C1.2085 12.083 2.41683 13.2913 5.43766 13.2913Z"
      fill="white"
      stroke="#2396F3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.8335 7.25H9.66683"
      stroke="#2396F3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.25 9.66634V4.83301"
      stroke="#2396F3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
