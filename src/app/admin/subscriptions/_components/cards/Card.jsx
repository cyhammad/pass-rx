"use client";
import { useState } from "react";

export default function Card( {title , text,value}) {

  return (
    <div className="   max-w-[330px] rounded-2xl  bg-white p-6 shadow-lg  md:p-9 h-[308px]">
      <span>{star}</span>
      <p className="mt-3 font-semibold">{title}</p>
      <p className="mt-4 text-xs text-dark-grayish-red">
        {text}
      </p>
      <input
        type="text"
        name="text"
        id="text"
        placeholder={value}
        className={`mt-7 h-[72px] focus:ring-light-gray focus:border-white   w-full bg-transparent text-5xl border border-white font-bold  placeholder:text-black md:mt-11 `}
        disabled={true}
      />
     
    </div>
  );
}
const star = (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8 0H9.2V5.94731L4.99462 1.74193L1.74193 4.99461L5.94732 9.2H0V13.8H5.94731L1.74193 18.0053L4.99462 21.2581L9.2 17.0527V23H13.8V17.0527L18.0054 21.2581L21.2581 18.0054L17.0527 13.8H23V9.2H17.0527L21.2581 4.99461L18.0054 1.74192L13.8 5.94731V0Z"
      fill="black"
    />
  </svg>
);
