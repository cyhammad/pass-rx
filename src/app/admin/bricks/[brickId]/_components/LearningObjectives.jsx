export default function LearningObjectives({
  editable,
  setEditable,
  learningObjectives,
  setLearningObjectives,
}) {
  const bullet = "\u2022";
  const bulletWithSpace = `${bullet} `;
  const parseLearningObjectives = () => {
    let parsedLearningObjectives = learningObjectives;
    if (learningObjectives?.includes("\n")) {
      parsedLearningObjectives = learningObjectives.replace(/\n/g, "<br>");
    }
    return parsedLearningObjectives;
  };
  const handleInput = (event) => {
    const { target } = event;
    const { selectionStart, value } = target;

    if (event.key === "Enter") {
      target.value = [...value]
        .map((c, i) => (i === selectionStart - 1 ? `\n${bulletWithSpace}` : c))
        .join("");
      target.selectionStart = selectionStart + bulletWithSpace.length;
      target.selectionEnd = selectionStart + bulletWithSpace.length;
    }

    if (value[0] !== bullet) {
      target.value = `${bulletWithSpace}${value}`;
    }
  };
  return (
    <div className="mt-9 w-full max-w-[26.5rem] lg:mt-0">
      <p className="text-lg font-semibold ">Learning Objectives</p>
      {editable ? (
        <textarea
          onKeyUp={handleInput}
          type="text"
          name="text"
          id="text"
          placeholder=""
          className="w-full bg-transparent px-0 py-3 text-xs text-gray focus:ring-transparent"
          value={learningObjectives}
          onChange={(e) => setLearningObjectives(e.target.value)}
          rows={4}
        ></textarea>
      ) : (
        <div
          className="px-0 py-3 text-xs"
          dangerouslySetInnerHTML={
            parseLearningObjectives()
              ? { __html: parseLearningObjectives() }
              : null
          }
        ></div>
      )}
    </div>
  );
}
