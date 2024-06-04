import IncludeFlashFactsCheckbox from "../checkbox/IncludeFlashFactsCheckbox";
import SelectDifficultyDropdown from "../dropdowns/SelectDifficultyDropdown";
import SelectDisciplineDropdown from "../dropdowns/SelectDisciplineDropdown";

const QuestionTab = ({
  quizbank,
  token,
  selectedDiscipline,
  setSelectedDiscipline,
  difficulty,
  setDifficulty,
  includeFlashFacts,
  setIncludeFlashFacts,
  question,
  setQuestion,
  options,
  setOptions,
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
        includeFlashFacts={includeFlashFacts}
        setIncludeFlashFacts={setIncludeFlashFacts}
      />
    </div>
  );
};

export default QuestionTab;
