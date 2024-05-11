"use client";
import { useState } from "react";

export default function Card() {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState("$110");

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    setEditable(false);
    // You can perform any save operation here, if needed
  };
  return (
    <div className="h-[325px]   max-w-[330px] rounded-2xl  bg-white p-6 shadow md:p-9 md:h-[395px]">
      <span>{star}</span>
      <p className="mt-3 font-semibold">Yearly Subscription</p>
      <p className="mt-4 text-xs text-dark-grayish-red">
        Display stars in Google organic search risult and showcase reviews on
        your website
      </p>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="$110"
        className={`mt-7 h-[72px] w-full bg-transparent text-5xl font-bold outline-none placeholder:text-black md:mt-11 ${editable ? "" : "pointer-events-none"}`}
        value={text}
        onChange={handleChange}
        disabled={!editable}
      />
      {editable ? (
        <button
          className="mt-4 w-full rounded-lg border border-primary bg-primary px-1 py-2 font-semibold text-white focus:outline-none md:py-4 md:text-[18px]"
          onClick={handleSave}
        >
          Save
        </button>
      ) : (
        <button
          className="mt-4 w-full rounded-lg border border-primary px-1 py-2 font-semibold text-primary focus:outline-none md:py-4 md:text-[18px]"
          onClick={handleEditClick}
        >
          Edit
        </button>
      )}
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.8 0H9.2V5.94731L4.99462 1.74193L1.74193 4.99461L5.94732 9.2H0V13.8H5.94731L1.74193 18.0053L4.99462 21.2581L9.2 17.0527V23H13.8V17.0527L18.0054 21.2581L21.2581 18.0054L17.0527 13.8H23V9.2H17.0527L21.2581 4.99461L18.0054 1.74192L13.8 5.94731V0Z"
      fill="black"
    />
  </svg>
);
