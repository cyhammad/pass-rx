const QuestionField = ({ question, setQuestion, disabled = false }) => {
  return (
    <div className="relative">
      <span className="absolute -top-2 left-3 bg-almostBlack px-1 text-xs text-text-gray">
        Question
      </span>
      <textarea
        className="w-full min-w-[250px] rounded-md border-blackBorder bg-transparent px-3 py-4 text-sm ring-transparent focus:ring-transparent disabled:text-text-gray"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here"
        columns="1"
        rows="2"
        disabled={disabled}
      ></textarea>
    </div>
  );
};

export default QuestionField;
