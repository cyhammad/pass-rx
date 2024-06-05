const PossibleOptions = ({
  answers,
  setAnswers,
  correctAnswerIndex,
  setCorrectAnswerIndex,
}) => {
  const handleDelete = (index) => {
    if (correctAnswerIndex === index) {
      setCorrectAnswerIndex(null);
    }
    setAnswers((prev) => prev.slice(0, prev.length - 1));
  };
  return (
    <div className="flex flex-col gap-5">
      <span className="text-text-gray/50">Possible Options</span>
      {answers.map((answer, index) => (
        <div className="flex items-center gap-3" key={index}>
          <div className="relative flex w-full items-center rounded-lg border border-blackBorder px-1 py-2 text-start">
            <span className="absolute -top-2 left-3 bg-almostBlack px-1 text-xs text-text-gray">
              Option {index + 1}
            </span>
            <input
              type="text"
              className="w-3/4 border-none bg-transparent text-sm outline-none ring-transparent focus:outline-none focus:ring-transparent"
              placeholder="Option here"
              value={answer.answer}
              onChange={(e) =>
                setAnswers((prev) =>
                  prev.map((prevAnswer, prevIndex) =>
                    prevIndex === index
                      ? { ...prevAnswer, answer: e.target.value }
                      : prevAnswer,
                  ),
                )
              }
            />
            <button
              className={`flex w-1/4 items-center justify-end gap-2 pr-3 text-sm ${index === correctAnswerIndex ? "text-green" : "text-text-gray/20"}`}
              onClick={() => setCorrectAnswerIndex(index)}
            >
              Mark as True {tick}
            </button>
          </div>
          <button className="py-1 pl-1" onClick={() => handleDelete(index)}>
            {cross}
          </button>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <button
          className="flex items-center gap-3 rounded-lg border border-dashed border-white/20 px-4 py-3 text-sm"
          onClick={() =>
            setAnswers((prev) => [
              ...prev,
              {
                _id: prev.length + 1,
                option: "",
                isCorrect: false,
                explanation: "",
              },
            ])
          }
        >
          Add Another Option {plusIcon}
        </button>
      </div>
    </div>
  );
};

const tick = (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.0835 4.99978L5.05104 8.96732L13.0002 1.03223"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const cross = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.9962 5.93906L8.76572 9.70884C8.89139 9.83023 9.05971 9.89739 9.23442 9.89588C9.40914 9.89436 9.57627 9.82428 9.69981 9.70072C9.82336 9.57717 9.89344 9.41003 9.89495 9.2353C9.89647 9.06057 9.82931 8.89224 9.70793 8.76656L5.93842 4.99678L9.70793 1.227C9.82931 1.10132 9.89647 0.932984 9.89495 0.758258C9.89344 0.583532 9.82336 0.416393 9.69981 0.292838C9.57627 0.169284 9.40914 0.0991998 9.23442 0.0976814C9.05971 0.0961631 8.89139 0.163332 8.76572 0.28472L4.9962 4.0545L1.22669 0.28472C1.10045 0.166332 0.93311 0.101706 0.760072 0.104516C0.587034 0.107326 0.421877 0.177352 0.299548 0.299777C0.177218 0.422201 0.107314 0.58742 0.104626 0.760472C0.101939 0.933524 0.166679 1.10083 0.285148 1.227L4.05399 4.99678L0.284482 8.76656C0.220839 8.82803 0.170076 8.90156 0.135153 8.98287C0.100231 9.06417 0.0818487 9.15161 0.0810798 9.2401C0.080311 9.32858 0.0971705 9.41633 0.130675 9.49823C0.164179 9.58012 0.213657 9.65453 0.276222 9.7171C0.338787 9.77967 0.413186 9.82915 0.495077 9.86265C0.576969 9.89616 0.664712 9.91302 0.753189 9.91225C0.841666 9.91149 0.929104 9.8931 1.0104 9.85818C1.0917 9.82325 1.16522 9.77248 1.22669 9.70884L4.9962 5.93906Z"
      fill="white"
    />
  </svg>
);

const plusIcon = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 20.5H13C18 20.5 20 18.5 20 13.5V7.5C20 2.5 18 0.5 13 0.5H7C2 0.5 0 2.5 0 7.5V13.5C0 18.5 2 20.5 7 20.5Z"
      fill="white"
    />
    <path
      d="M6 10.5H14"
      stroke="#121212"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.5V6.5"
      stroke="#121212"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PossibleOptions;
