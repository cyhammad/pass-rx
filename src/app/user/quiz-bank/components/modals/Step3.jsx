import React, { useState } from "react";
import { Line } from "./AddTest";

export default function Step3({ handleAdd, handleChange, setData, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const updateNumber = (operation) => {
    setNumber((prevNumber) => {
      let newNumber;
      if (operation === "increment") {
        // Check if incrementing will exceed 100
        newNumber = prevNumber < 100 ? prevNumber + 1 : prevNumber;
      } else if (operation === "decrement") {
        newNumber = Math.max(prevNumber - 1, 0);
      }
      setData((prevData) => ({
        ...prevData,
        noOfQuestions: newNumber,
      }));
      return newNumber;
    });
  };
  return (
    <div className=" mt-3 flex h-full w-full select-none  flex-col justify-between px-6">
      <div className="flex justify-between self-center">
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full bg-primary text-sm font-medium text-white ">
            01
          </div>
          <p className=" mt-2  text-center text-primary ">Test Settings</p>
        </div>
        <Line bg={"bg-primary"} />
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full bg-primary text-sm  font-medium text-white ">
            02
          </div>
          <p className=" mt-2 text-center  text-primary">Choose Questions</p>
        </div>
        <Line bg={"bg-primary"} />

        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full  bg-primary   text-sm font-medium text-white ">
            03
          </div>
          <p className="mt-2 text-center text-primary">Finalize Test</p>
        </div>
      </div>
      <div className="  relative mt-8 flex  flex-col justify-between self-center">
        <div className="flex flex-col ">
          <label className="text-sm text-text-gray-2">Test Name</label>
          <input
            placeholder="Test333"
            type="text"
            name="testName"
            onChange={handleChange}
            className=" inputborder mt-3 block  w-[290px] rounded-lg bg-white shadow-sm  focus:border-light-border focus:ring-light-border  sm:w-[354px] "
          ></input>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <h5 className="text-center text-lg font-semibold">Test Mode</h5>
            <span onClick={() => setIsOpen(true)}>{quest}</span>
          </div>
          {isOpen && (
            <div className=" absolute flex min-h-[100px] max-w-[244px] rounded-lg border-light-border bg-white py-4 pl-4 text-xs shadow-md ">
              <p>
                Reiciendis deleniti corrupti aspernatur molestias. Voluptatem
                placeat enim qui distinctio. Voluptas ut.
              </p>
              <span onClick={() => setIsOpen(false)}>{cross}</span>
            </div>
          )}
          <div className="mt-2 flex items-center gap-[1vw] ">
            <div className="flex items-center  gap-1 font-medium text-text-gray-2">
              <input
                type="radio"
                className="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="mode"
                value="study"
                checked={data.mode === "study"}
                onChange={handleChange}
              />
              <p>Study Mode</p>
            </div>
            <div className="flex items-center gap-1   font-medium text-text-gray-2">
              <input
                type="radio"
                className="checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="mode"
                value="exam"
                checked={data.mode === "exam"}
                onChange={handleChange}
              />
              <p>Exam Mode</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <h5 className="text-center text-lg font-semibold">
            Number of Questions
          </h5>
          <div className="mt-4 flex gap-3">
            <span
              onClick={() => updateNumber("decrement")}
              className="cursor-pointer"
            >
              {minus}
            </span>
            <p className="select-none text-[19.7px] font-semibold">{number}</p>
            <span
              onClick={() => updateNumber("increment")}
              className="cursor-pointer"
            >
              {plus}
            </span>
          </div>
        </div>
        <div className="mt-8 self-center">
          <p className="select-none font-semibold">
            Total available questions:&nbsp;1132
          </p>
          <p className="mt-3 select-none text-center text-sm text-primary">
            Max 100 questions per test
          </p>
        </div>
      </div>
      <button
        onClick={handleAdd}
        className="  mb-7 mt-8 flex w-[250px] select-none items-center justify-center  self-center rounded-[10px]  bg-primary px-4 py-4 text-lg font-semibold text-white sm:w-[335px] "
      >
        Start
      </button>
    </div>
  );
}
const quest = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.01316 7.20478C7.01316 7.55056 6.7334 7.83032 6.39077 7.83032C6.04499 7.83032 5.76523 7.55056 5.76523 7.20478C5.76523 6.45036 6.07014 5.76824 6.56365 5.27473C7.05717 4.78121 7.73929 4.4763 8.49371 4.4763C9.24813 4.4763 9.93026 4.78121 10.4238 5.27473C10.9173 5.76824 11.2222 6.45036 11.2222 7.20478C11.2222 7.95921 10.9173 8.64133 10.4238 9.13484C10.0717 9.48691 9.6222 9.74467 9.11925 9.86097V10.1313C9.11925 10.4771 8.83949 10.7568 8.49371 10.7568C8.14794 10.7568 7.86817 10.4771 7.86817 10.1313V9.30773C7.86817 8.9651 8.14794 8.68534 8.49371 8.68534C8.90236 8.68534 9.27328 8.51873 9.54047 8.25154C9.80766 7.98435 9.97426 7.61343 9.97426 7.20478C9.97426 6.79614 9.80766 6.42522 9.54047 6.15803C9.27328 5.89084 8.90236 5.72423 8.49371 5.72423C8.08507 5.72423 7.71415 5.89084 7.44696 6.15803C7.17976 6.42522 7.01316 6.79614 7.01316 7.20478ZM8.43085 12.8221C8.08507 12.8221 7.80531 12.5455 7.80531 12.1997C7.80531 11.8539 8.08507 11.5741 8.43085 11.5741H8.56916C8.91493 11.5741 9.1947 11.8539 9.1947 12.1997C9.1947 12.5455 8.91493 12.8221 8.56916 12.8221H8.43085ZM8.5 15.3997C10.364 15.3997 12.0521 14.6453 13.2717 13.4225C14.4945 12.2028 15.2489 10.5148 15.2489 8.65076C15.2489 6.78671 14.4945 5.09869 13.2717 3.8759C12.0521 2.65626 10.364 1.89869 8.5 1.89869C6.63595 1.89869 4.94794 2.65626 3.72515 3.8759C2.5055 5.09869 1.74794 6.78671 1.74794 8.65076C1.74794 10.5148 2.5055 12.2028 3.72515 13.4225C4.94794 14.6453 6.63595 15.3997 8.5 15.3997ZM14.155 14.3058C12.709 15.7549 10.7067 16.6508 8.5 16.6508C6.29018 16.6508 4.29096 15.7549 2.84185 14.3058C1.39587 12.8598 0.5 10.8574 0.5 8.65076C0.5 6.44093 1.39587 4.44172 2.84185 2.9926C4.29096 1.54663 6.29018 0.650757 8.5 0.650757C10.7067 0.650757 12.709 1.54663 14.155 2.9926C15.6041 4.44172 16.5 6.44093 16.5 8.65076C16.5 10.8574 15.6041 12.8598 14.155 14.3058Z"
      fill="#2396F3"
    />
  </svg>
);
const cross = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.2086L20.7914 10L16 14.7914L11.2086 10L10 11.2086L14.7914 16L10 20.7914L11.2086 22L16 17.2086L20.7914 22L22 20.7914L17.2086 16L22 11.2086Z"
      fill="#121212"
    />
  </svg>
);
const minus = (
  <svg
    width="34"
    height="35"
    viewBox="0 0 34 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.589304"
      y="1.24983"
      width="32.3498"
      height="32.3498"
      rx="16.1749"
      stroke="#DDDDDD"
      strokeWidth="1.19814"
    />
    <path
      d="M23.9538 18.5821H9.57617V16.2673H23.9538V18.5821Z"
      fill="#717171"
    />
  </svg>
);
const plus = (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.06196"
      y="1.24983"
      width="32.3498"
      height="32.3498"
      rx="16.1749"
      stroke="#DDDDDD"
      strokeWidth="1.19814"
    />
    <path
      d="M15.9177 24.6525V11.4219H18.5501V24.6525H15.9177ZM10.6235 19.3486V16.7161H23.8541V19.3486H10.6235Z"
      fill="#717171"
    />
  </svg>
);
