const QuestionField = ({ question, setQuestion }) => {
  return (
    <div className="relative flex min-w-[250px] items-center rounded-lg border border-blackBorder px-1 py-2 text-start">
      <span className="absolute -top-2 left-3 bg-almostBlack px-1 text-xs text-text-gray">
        Question
      </span>
      <textarea
        className="w-full border-none bg-transparent text-sm outline-none ring-transparent focus:outline-none focus:ring-transparent"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here"
        columns="1"
        rows="2"
      ></textarea>
    </div>
  );
};

export default QuestionField;
