import React from "react";

export default function Button({ title, textColor, bgColor, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center h-fit gap-2 rounded-md  sm:py-[17.2px] px-3 py-[9.2px] w-[136px] sm:px-8 border border-gray-border bg-${bgColor} text-${textColor}`}
    >
      {icon}
      <span className=" font-medium ">{title}</span>
    </button>
  );
}
