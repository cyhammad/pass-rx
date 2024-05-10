import React from "react";

export default function AddCard({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="top-[50%] left-[50%] right-1/2 absolute z-50 flex h-[95px] w-[126px] flex-col items-center justify-center rounded-2xl bg-dark text-white "
    >
      <span>{add}</span>
      <p className="mt-4 text-sm font-medium">New Chapter</p>
    </button>
  );
}
const add = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      fill="white"
    />
    <path
      d="M8 12H16"
      stroke="#111213"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 16V8"
      stroke="#111213"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
