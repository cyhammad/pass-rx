const SelectDisciplineButton = ({
  discipline,
  isSelected,
  handleSelectDiscipline,
}) => {
  return (
    <button
      key={discipline._id}
      onClick={() => handleSelectDiscipline(discipline)}
      className={`rounded-md border border-black/20 px-2 py-2 text-sm ${
        isSelected
          ? "border-primary/35 bg-primary/5 text-primary"
          : "hover:border-primary/50 hover:text-primary"
      }`}
    >
      {discipline.name}
    </button>
  );
};

export default SelectDisciplineButton;
