import CustomTextarea from "@/components/adminComponents/inputs/CustomTextarea";

const ExplanationTab = ({ question, answers, setAnswers }) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm">{question}</span>
      {answers.map((answer, index) => (
        <CustomTextarea
          title={`Explanation of option ${index + 1}`}
          key={index}
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
          height={"100px"}
          titleClassName={"bg-almostBlack"}
          textAreaClassName={"border-blackBorder text-text-gray"}
        />
      ))}
    </div>
  );
};

export default ExplanationTab;
