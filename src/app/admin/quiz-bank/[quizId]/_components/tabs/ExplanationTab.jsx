const ExplanationTab = ({ question, answers, setAnswers }) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm">{question}</span>
      {answers.map((answer, index) => (
        <div className="relative flex min-w-[250px] items-center rounded-lg border border-blackBorder px-1 py-2 text-start">
          <span className="absolute -top-2 left-3 bg-almostBlack px-1 text-xs text-text-gray">
            Explanation of option {index + 1}
          </span>
          <textarea
            className="w-full border-none bg-transparent text-sm outline-none ring-transparent focus:outline-none focus:ring-transparent"
            value={answer.explanation}
            onChange={(e) =>
              setAnswers((prev) =>
                prev.map((prevAnswer, prevIndex) =>
                  prevIndex === index
                    ? { ...prevAnswer, explanation: e.target.value }
                    : prevAnswer,
                ),
              )
            }
            placeholder="Type your explanation here"
            columns="1"
            rows="2"
          ></textarea>
        </div>
      ))}
    </div>
  );
};

export default ExplanationTab;
