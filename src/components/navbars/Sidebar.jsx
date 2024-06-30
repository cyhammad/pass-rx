"use client";
import { useRouter } from "next/navigation";
import {
  arrowRightIcon,
  bricksIcon,
  circleIcon,
  disciplineIcon,
  disciplinesIcon,
  flashFactsIcon,
  homeIcon,
  quizBankIcon2,
  subscriptionIcon,
  usersIcon,
} from "@/svgs/sidebarSvgs";
import Link from "next/link";
import { use, useState } from "react";

const Sidebar = ({ role }) => {
  const hoverText = role == "user" ? "text-black" : "text-primary";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 flex h-[calc(100vh-83px)] w-5 items-end py-32 sm:hidden">
        <button
          className={`absolute -left-3 flex h-10 w-10 items-center justify-center rounded-r-full border border-dashed border-white/70 ${role == "user" ? "bg-primary" : "bg-dark/50"}  text-white`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {arrowRightIcon}
        </button>
      </div>
      <aside
        className={`z-50  ${role == "user" ? "bg-primary" : "bg-dark"}  flex h-[calc(100vh-72px)] flex-col bg-dark px-4 py-6 text-white sm:h-[calc(100vh-83px)] ${isOpen ? "absolute block w-screen sm:static sm:w-64" : "hidden w-0 sm:flex sm:w-24"} transition-all duration-300`}
      >
        <div
          className={`flex flex-col ${isOpen ? "transition-all duration-300" : "transition-all duration-300"} border-b border-white/10 py-2`}
        >
          <Link
            href={role == "user" ? "/user" : "/admin"}
            className={`flex gap-x-2 p-4 text-white  hover:${hoverText}`}
          >
            <div className="flex w-7 justify-center">{homeIcon}</div>{" "}
            <span className={isOpen ? "block" : "hidden"}>Dashboard</span>
          </Link>
          <Link
            href={role == "user" ? "/user/disciplines" : "/admin/disciplines"}
            className={`flex gap-x-2 p-4 text-white  hover:${hoverText}`}
          >
            <div className="flex w-7 justify-center">{disciplinesIcon}</div>{" "}
            <span className={isOpen ? "block" : "hidden"}>Disciplines</span>
          </Link>
          <Link
            href={role == "user" ? "/user/quiz-bank" : "/admin/quiz-bank"}
            className={`flex gap-x-2 p-4 text-white hover:${hoverText}`}
          >
            <div className="flex w-7 justify-center">{quizBankIcon2}</div>{" "}
            <span className={isOpen ? "block" : "hidden"}>Quiz&nbsp;Bank</span>
          </Link>
          <Link
            href={role == "user" ? "/user/flash-facts" : "/admin/flash-facts"}
            className={`flex gap-x-2 p-4 text-white hover:${hoverText}`}
          >
            <div className="flex w-7 justify-center">{flashFactsIcon}</div>{" "}
            <span className={isOpen ? "block" : "hidden"}>
              Flash&nbsp;Facts
            </span>
          </Link>
          <Link
            href={role == "user" ? "/user/users" : "/admin/users"}
            className={`flex gap-x-2 p-4 text-white hover:${hoverText}`}
          >
            <div className="flex w-7 justify-center">{usersIcon}</div>{" "}
            <span className={isOpen ? "block" : "hidden"}>Users</span>
          </Link>
          <Link
            href={role == "user" ? "/user/bricks" : "/admin/bricks"}
            className={`flex gap-x-2 p-4 text-white hover:${hoverText}`}
          >
            <div className="flex w-7 justify-center">{bricksIcon}</div>{" "}
            <span className={isOpen ? "block" : "hidden"}>Bricks</span>
          </Link>
        </div>
        <div
          className={`flex h-full flex-col ${isOpen ? "transition-all duration-300" : "transition-all duration-300"} justify-between border-b border-white/10 py-2`}
        >
          <Link
            href={
              role == "user" ? "/user/subscriptions" : "/admin/subscriptions"
            }
            className={`flex gap-x-2 p-4 text-white hover:${hoverText}`}
          >
            <div className="flex w-7 justify-center">{subscriptionIcon}</div>{" "}
            <span className={isOpen ? "block" : "hidden"}>Subscriptions</span>
          </Link>
          <button
            className={`flex w-full justify-center p-4 text-white hover:${hoverText} ${isOpen ? "rotate-180 transform transition-all duration-300" : "rotate-0 transform transition-all duration-300"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {arrowRightIcon}
          </button>
        </div>
        {role != "user" && (
          <div className={`flex justify-center py-6`}>
            <button className="text-white hover:text-primary">
              {circleIcon}
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
