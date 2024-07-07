import CustomTextarea from "@/components/adminComponents/inputs/CustomTextarea";
import IncludeFlashFactsCheckbox from "./IncludeFlashFactsCheckbox";
import PossibleOptions from "./PossibleOptions";
import SelectDifficultyDropdown from "./SelectDifficultyDropdown";
import SelectDisciplineDropdown from "./SelectDisciplineDropdown";

const QuestionTab = ({
  quizbank,
  token,
  selectedDiscipline,
  setSelectedDiscipline,
  difficulty,
  setDifficulty,
  includeToFlashFacts,
  setIncludeToFlashFacts,
  question,
  setQuestion,
  answers,
  setAnswers,
  correctAnswerIndex,
  setCorrectAnswerIndex,
  disableDisciplineSelect = false,
  disableQuestionSelect = false,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <SelectDisciplineDropdown
          disciplines={quizbank.disciplines}
          selectedDiscipline={selectedDiscipline}
          setSelectedDiscipline={setSelectedDiscipline}
          disabled={disableDisciplineSelect}
        />
        <SelectDifficultyDropdown
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </div>
      {includeToFlashFacts && setIncludeToFlashFacts && (
        <IncludeFlashFactsCheckbox
          includeToFlashFacts={includeToFlashFacts}
          setIncludeToFlashFacts={setIncludeToFlashFacts}
        />
      )}
      <CustomTextarea
        title="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here"
        height={"100px"}
        textAreaClassName={"border-blackBorder text-text-gray"}
        titleClassName={"bg-almostBlack"}
      />  
      <PossibleOptions
        answers={answers}
        setAnswers={setAnswers}
        correctAnswerIndex={correctAnswerIndex}
        setCorrectAnswerIndex={setCorrectAnswerIndex}
      />
    </div>
  );
};

export default QuestionTab;
