"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { chevronRight, profileIcon, settingsIcon } from "@/svgs/topbarSvgs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoutButton from "../buttons/LogoutButton";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
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
    <div className="relative z-[49]" ref={dropdownRef}>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-darkGray text-center"
        onClick={() => toggleMenu()}
      >
        <span className="leading-6 text-white">JS</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 top-12 flex w-64 flex-col justify-between rounded-xl bg-dark pb-2.5 text-white"
        >
          <div className="flex flex-col gap-y-1.5 border-b border-border-dark py-2">
            <div className="flex items-center gap-x-2 px-3.5 py-1.5">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-darkGray">
                <span className="text-sm">JS</span>
              </div>
              <span className="text-sm font-medium">Jason Staton</span>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/profile-settings");
              }}
              className="flex items-center justify-between px-5 py-1.5"
            >
              <div className="flex items-center gap-x-2">
                {profileIcon}
                <span className="text-sm">Profile</span>
              </div>
              <div className="p-1">{chevronRight}</div>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                // router.push("/settings");
              }}
              className="flex items-center justify-between px-5 py-1.5"
            >
              <div className="flex items-center gap-x-2">
                {settingsIcon}
                <span className="text-sm">Settings</span>
              </div>
              <div className="p-1">{chevronRight}</div>
            </button>
          </div>
          {/* <LogoutButton /> */}
        </motion.div>
      )}
    </div>
  );
};

export default ProfileDropdown;
