import IncludeFlashFactsCheckbox from "./IncludeFlashFactsCheckbox";
import PossibleOptions from "./PossibleOptions";
import QuestionField from "./QuestionField";
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
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <SelectDisciplineDropdown
          disciplines={quizbank.disciplines}
          selectedDiscipline={selectedDiscipline}
          setSelectedDiscipline={setSelectedDiscipline}
        />
        <SelectDifficultyDropdown
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </div>
      <IncludeFlashFactsCheckbox
        includeToFlashFacts={includeToFlashFacts}
        setIncludeToFlashFacts={setIncludeToFlashFacts}
      />
      <QuestionField question={question} setQuestion={setQuestion} />
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
