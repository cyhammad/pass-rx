"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CategoryCardDropdown = ({
  setIsDeleteModalOpen,
  setIsEditModalOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };
  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex justify-center rounded-full text-center"
        onClick={() => toggleMenu()}
      >
        <span className="leading-6 text-white">{option}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 top-7 flex w-40 flex-col justify-between rounded-xl bg-dark text-white"
        >
          <div className="flex flex-col gap-y-1.5 py-2">
            <button
              className="flex items-center justify-between px-4 py-1.5"
              onClick={() => handleEditClick()}
            >
              <div className="flex items-center gap-x-2">
                {pencil}
                <span className="text-xs">Edit</span>
              </div>
            </button>
            <button
              className="flex items-center justify-between px-4 py-1.5"
              onClick={() => handleDeleteClick()} // Step 4: Call handleDeleteClick on delete button click
            >
              <div className="flex items-center gap-x-2">
                {cross}
                <span className="text-xs">Delete category</span>
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryCardDropdown;

const option = (
  <svg
    width="15"
    height="11"
    viewBox="0 0 15 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.41935 10.5382L0.990912 10.5823C0.433779 10.5857 0.0602783 10.2379 0.0571604 9.71288C0.0540424 9.18788 0.423386 8.83568 0.980519 8.83238L8.40896 8.78826C8.96609 8.78495 9.33959 9.13274 9.34271 9.65773C9.34583 10.1827 8.97649 10.5349 8.41935 10.5382Z"
      fill="#121212"
    />
    <path
      d="M13.9647 6.13014L0.96493 6.20735C0.407797 6.21065 0.0342964 5.86287 0.0311785 5.33788C0.0280605 4.81288 0.397404 4.46068 0.954537 4.45738L13.9543 4.38017C14.5114 4.37686 14.8849 4.72465 14.8881 5.24964C14.8912 5.77463 14.5218 6.12683 13.9647 6.13014Z"
      fill="#121212"
    />
    <path
      d="M13.9387 1.75502L6.51029 1.79914C5.95316 1.80245 5.57966 1.45466 5.57654 0.929672C5.57342 0.404681 5.94277 0.0524816 6.4999 0.0491728L13.9283 0.005055C14.4855 0.00174617 14.859 0.349534 14.8621 0.874525C14.8652 1.39952 14.4959 1.75172 13.9387 1.75502Z"
      fill="#121212"
    />
  </svg>
);

const pencil = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_740_5704)">
      <path
        d="M7.41065 2.01562L0.808079 8.61867C0.774861 8.65198 0.750876 8.69405 0.739455 8.73926L0.00762279 11.6767C-0.0142684 11.7651 0.0117155 11.8591 0.0762469 11.9237C0.125074 11.9725 0.191604 11.9995 0.259657 11.9995C0.280501 11.9995 0.301821 11.997 0.32257 11.9917L3.25999 11.2598C3.30577 11.2484 3.34736 11.2245 3.38058 11.1913L9.98372 4.5887L7.41065 2.01562Z"
        fill="white"
      />
      <path
        d="M11.6195 1.11493L10.8845 0.379955C10.3933 -0.111264 9.53713 -0.110789 9.04648 0.379955L8.14618 1.28025L10.7192 3.85323L11.6195 2.95293C11.8648 2.70765 12 2.38119 12 2.03398C12 1.68676 11.8648 1.3603 11.6195 1.11493Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_740_5704">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const cross = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.99614 5.93906L8.76566 9.70884C8.89133 9.83023 9.05965 9.89739 9.23436 9.89588C9.40908 9.89436 9.57621 9.82428 9.69975 9.70072C9.8233 9.57717 9.89337 9.41003 9.89489 9.2353C9.89641 9.06057 9.82925 8.89224 9.70787 8.76656L5.93836 4.99678L9.70787 1.227C9.82925 1.10132 9.89641 0.932984 9.89489 0.758258C9.89337 0.583532 9.8233 0.416393 9.69975 0.292838C9.57621 0.169284 9.40908 0.0991998 9.23436 0.0976814C9.05965 0.0961631 8.89133 0.163332 8.76566 0.28472L4.99614 4.0545L1.22663 0.28472C1.10039 0.166332 0.933049 0.101706 0.760011 0.104516C0.586973 0.107326 0.421816 0.177352 0.299487 0.299777C0.177157 0.422201 0.107253 0.58742 0.104565 0.760472C0.101878 0.933524 0.166618 1.10083 0.285087 1.227L4.05393 4.99678L0.284421 8.76656C0.220778 8.82803 0.170015 8.90156 0.135092 8.98287C0.10017 9.06417 0.0817877 9.15161 0.0810188 9.2401C0.08025 9.32858 0.0971095 9.41633 0.130614 9.49823C0.164118 9.58012 0.213596 9.65453 0.276161 9.7171C0.338726 9.77967 0.413125 9.82915 0.495016 9.86265C0.576908 9.89616 0.664651 9.91302 0.753128 9.91225C0.841605 9.91149 0.929043 9.8931 1.01034 9.85818C1.09164 9.82325 1.16516 9.77248 1.22663 9.70884L4.99614 5.93906Z"
      fill="white"
    />
  </svg>
);
