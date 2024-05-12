import React, { useState } from "react";

export default function CheckBox({ name }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };
  return (
    <div
      className={` h-[16.89px] w-[16.89px] rounded  ${
        isChecked ? "bg-primary" : "border border-checkbox bg-white"
      } flex cursor-pointer items-center justify-center`}
      onClick={toggleCheckbox}
    >
      {isChecked && (
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.2793 3.49842L4.65679 6.87591L10.8489 0.683838"
            stroke="white"
            stroke-width="1.12583"
          />
        </svg>
      )}
    </div>
  );
}
