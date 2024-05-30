const SpecificQuizBank = ({ quizbank, token }) => {
  const renderDate = (date) => {
    if (!date) return "N/A";
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  return (
    <>
      <div className="flex w-full items-center justify-between pb-4 pt-8">
        <h1 className="text-2xl font-semibold">{quizbank.title}</h1>
        <div className="flex items-center gap-x-2">
          <span className="text-sm text-text-secondary">
            last updated: {renderDate(quizbank.updatedAt)}
          </span>
          <button className="button flex min-h-[48px] min-w-[185px] items-center justify-center gap-x-3 rounded-md bg-primary px-5 text-sm text-white">
            {plusIcon} Add New Question
          </button>
          <button className="button flex min-h-[48px] min-w-[185px] items-center justify-center gap-x-3 rounded-md bg-green px-5 text-sm text-white">
            {plusIcon} Upload CSV File
          </button>
        </div>
      </div>
      <div className="bg-mattBlack flex h-full min-h-[500px] w-full flex-col text-white rounded-2xl">
        <div className="flex items-center justify-between py-5">
          <span className="text-sm">Discipline</span>
        </div>
      </div>
    </>
  );
};

const plusIcon = (
  <svg
    width="12"
    height="11"
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.2002 5.5H10.8002"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 10.3V0.699951"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SpecificQuizBank;
