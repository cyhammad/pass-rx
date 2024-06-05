const Question = ({ question }) => {
  return (
    <div className="flex w-full flex-col gap-y-3 p-3 text-sm">
      <div className="flex items-center justify-between gap-x-3">
        <span className="leading-[22px]">{question.question}</span>
        <button className="p-2">{threeDots}</button>
      </div>
      <div className="flex flex-col gap-y-2 text-sm">
        <span className="text-text-gray/50">Possible Options</span>
        {question.answers.map((answer, index) => (
          <div
            key={index}
            className={`flex cursor-pointer items-center gap-x-8 rounded-lg ${
              question.correctAnswerIndex === index
                ? "text-green"
                : "text-white"
            }`}
          >
            <span>{answer.answer}</span>
            {question.correctAnswerIndex === index && greenTick}
          </div>
        ))}
        <span className="mt-4 cursor-pointer text-xs text-primary hover:underline">
          View detailed explanation
        </span>
      </div>
    </div>
  );
};

const threeDots = (
  <svg
    width="4"
    height="16"
    viewBox="0 0 4 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.00016 9.88737C2.92064 9.88737 3.66683 9.14118 3.66683 8.2207C3.66683 7.30023 2.92064 6.55404 2.00016 6.55404C1.07969 6.55404 0.333496 7.30023 0.333496 8.2207C0.333496 9.14118 1.07969 9.88737 2.00016 9.88737Z"
      fill="white"
      fillOpacity="0.45"
    />
    <path
      d="M2.00016 4.05404C2.92064 4.05404 3.66683 3.30784 3.66683 2.38737C3.66683 1.4669 2.92064 0.720703 2.00016 0.720703C1.07969 0.720703 0.333496 1.4669 0.333496 2.38737C0.333496 3.30784 1.07969 4.05404 2.00016 4.05404Z"
      fill="white"
      fillOpacity="0.45"
    />
    <path
      d="M2.00016 15.7207C2.92064 15.7207 3.66683 14.9745 3.66683 14.054C3.66683 13.1336 2.92064 12.3874 2.00016 12.3874C1.07969 12.3874 0.333496 13.1336 0.333496 14.054C0.333496 14.9745 1.07969 15.7207 2.00016 15.7207Z"
      fill="white"
      fillOpacity="0.45"
    />
  </svg>
);

const greenTick = (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5.22072L4.96755 9.18827L12.9167 1.25317"
      stroke="#00DF80"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Question;
