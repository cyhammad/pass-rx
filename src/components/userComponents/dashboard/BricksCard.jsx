"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function BricksCard() {
  const [tasks, setTasks] = useState([
    {
      label: "Descriptive Statistics and Data Representation",
      completed: false,
    },
    {
      label: "Descriptive Statistics and Data Representation",
      completed: false,
    },
    {
      label: "Descriptive Statistics and Data Representation",
      completed: false,
    },
    {
      label: "Descriptive Statistics and Data Representation",
      completed: false,
    },
  ]);
  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  return (
    <div className="flex min-h-[485px]  w-full flex-col justify-between  rounded-xl bg-white px-6 pb-5 pt-[18px]  drop-shadow-sm">
      <div>
        <h3 className="text-xl font-medium leading-none">Bricks</h3>
        <div className="mt-7 flex  flex-col gap-2 sm:mt-8 sm:flex-row ">
          <Image
            src={"/bricks/userBrick.svg"} // Use forward slash for the path
            className="rounded-lg"
            width={121.6}
            height={99.42}
          />
          <div className="flex flex-col  justify-between ">
            <p className="text-xs  text-black/50 sm:text-sm">
              Get Started With Bricks
            </p>
            <p className=" text-sm font-semibold sm:max-w-[206px] sm:text-base">
              Cellular and Molecular Biology
            </p>
            <div className="flex gap-1 text-sm font-bold">
              28 <p className="font-normal">Bricks</p>
            </div>
          </div>
        </div>
        <ul className="mt-8 space-y-4 text-xs sm:mt-11 sm:space-y-6 sm:text-[13px] ">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
                className="mr-2 accent-primary  ring-[#E5E7EB] "
              />
              <span>{task.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <button class=" mt-2 flex  items-center justify-center rounded-[10px] border border-black/35 px-4 py-[0.82rem] font-semibold ">
        Explore Bricks {arrow}{" "}
      </button>
    </div>
  );
}
const arrow = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.4668 2.72003L10.8135 7.0667C11.3268 7.58003 11.3268 8.42003 10.8135 8.93336L6.4668 13.28"
      stroke="#121214"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
