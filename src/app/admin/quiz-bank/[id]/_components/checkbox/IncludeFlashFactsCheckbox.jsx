"use client";

const IncludeFlashFactsCheckbox = ({
  includeFlashFacts,
  setIncludeFlashFacts,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setIncludeFlashFacts(!includeFlashFacts)}
        className={`flex h-4 w-4 items-center justify-center rounded pl-[1px]  ${includeFlashFacts ? "bg-primary" : "border border-blackBorder"}`}
      >
        {includeFlashFacts && tick}
      </button>
      <span className="text-sm">Add to flash facts too</span>
    </div>
  );
};

const tick = (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.5 3L3.5 6L9 0.5" stroke="white" />
  </svg>
);

export default IncludeFlashFactsCheckbox;
