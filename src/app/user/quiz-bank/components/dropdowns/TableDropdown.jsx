"use client";

import { useEffect, useRef, useState } from "react";
import { profileIcon } from "@/svgs/topbarSvgs";

import { motion } from "framer-motion";
export default function TableDropdown() {
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

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        className="flex h-10 w-10  items-center justify-center rounded-full  text-center"
        onClick={() => toggleMenu()}
      >
        <span>{threeDots}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 top-12  z-[50] flex w-[173px] flex-col justify-between rounded-xl bg-dark pb-2.5 pt-2 text-white"
        >
          <div className="flex flex-col gap-y-1.5 py-2">
            <button className="flex items-center justify-between px-4 py-1.5">
              <div className="flex items-center gap-x-2">
                <span className="flex gap-2 text-xs items-center">
                  {play} Resume Test
                </span>
              </div>
              <div className="p-1"></div>
            </button>
            <button className="flex items-center justify-between py-1.5 pl-4">
              <div className="flex items-center gap-x-2">
                <span className="flex items-center gap-2 text-xs">
                  {cross} Delete Test
                </span>
              </div>
              <div className="p-1"></div>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
const threeDots = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99998 5.83333C10.9166 5.83333 11.6666 5.08333 11.6666 4.16667C11.6666 3.25 10.9166 2.5 9.99998 2.5C9.08331 2.5 8.33331 3.25 8.33331 4.16667C8.33331 5.08333 9.08331 5.83333 9.99998 5.83333ZM11.6666 10C11.6666 10.9167 10.9166 11.6667 9.99998 11.6667C9.08331 11.6667 8.33331 10.9167 8.33331 10C8.33331 9.08333 9.08331 8.33333 9.99998 8.33333C10.9166 8.33333 11.6666 9.08333 11.6666 10ZM8.33331 15.8333C8.33331 14.9167 9.08331 14.1667 9.99998 14.1667C10.9166 14.1667 11.6666 14.9167 11.6666 15.8333C11.6666 16.75 10.9166 17.5 9.99998 17.5C9.08331 17.5 8.33331 16.75 8.33331 15.8333Z"
      fill="black"
    />
    <mask
      id="mask0_426_914"
      //   style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="8"
      y="2"
      width="4"
      height="16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99998 5.83333C10.9166 5.83333 11.6666 5.08333 11.6666 4.16667C11.6666 3.25 10.9166 2.5 9.99998 2.5C9.08331 2.5 8.33331 3.25 8.33331 4.16667C8.33331 5.08333 9.08331 5.83333 9.99998 5.83333ZM11.6666 10C11.6666 10.9167 10.9166 11.6667 9.99998 11.6667C9.08331 11.6667 8.33331 10.9167 8.33331 10C8.33331 9.08333 9.08331 8.33333 9.99998 8.33333C10.9166 8.33333 11.6666 9.08333 11.6666 10ZM8.33331 15.8333C8.33331 14.9167 9.08331 14.1667 9.99998 14.1667C10.9166 14.1667 11.6666 14.9167 11.6666 15.8333C11.6666 16.75 10.9166 17.5 9.99998 17.5C9.08331 17.5 8.33331 16.75 8.33331 15.8333Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_426_914)">
      <rect width="20" height="20" fill="#6E6B7B" />
    </g>
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
const play =(<svg width="10" height="12" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.81415e-05 8.00273V1.13025C-0.00137228 0.931323 0.049518 0.735591 0.147486 0.563106C0.245453 0.39062 0.386978 0.247582 0.557562 0.148642C0.728147 0.0497014 0.921661 -0.00158458 1.11828 3.73083e-05C1.3149 0.0016592 1.50756 0.0561306 1.67653 0.157872L7.55874 3.59411L13.4446 7.03035C13.6134 7.12879 13.7536 7.27049 13.8512 7.44119C13.9487 7.61189 14 7.80557 14 8.00273C14 8.19989 13.9487 8.39357 13.8512 8.56428C13.7536 8.73498 13.6134 8.87668 13.4446 8.97512L7.55874 12.4114L1.67653 15.8513C1.50765 15.9491 1.31637 16.0003 1.12177 16C0.927182 15.9997 0.736079 15.9477 0.567532 15.8493C0.398984 15.7509 0.258884 15.6095 0.161208 15.4392C0.0635321 15.269 0.0116949 15.0757 0.0108678 14.8789L2.81415e-05 8.00273Z" fill="white"/>
</svg>
)