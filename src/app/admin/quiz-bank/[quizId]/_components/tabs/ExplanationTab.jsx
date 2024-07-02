const ExplanationTab = ({ question, answers, setAnswers }) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm">{question}</span>
      {answers.map((answer, index) => (
        <div className="relative">
          <span className="absolute -top-2 left-3 bg-almostBlack px-1 text-xs text-text-gray">
            Explanation of option {index + 1}
          </span>
          <textarea
            className="w-full min-w-[250px] rounded-md border-blackBorder bg-transparent px-3 py-4 text-sm ring-transparent focus:ring-transparent disabled:text-text-gray"
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
