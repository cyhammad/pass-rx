import React from "react";

export default function QuizBankLayout({ children }) {
  return (
    <div className="flex w-full bg-light-gray pr-3 py-4 sm:px-6 md:px-7">
      {children}
    </div>
  );
}
