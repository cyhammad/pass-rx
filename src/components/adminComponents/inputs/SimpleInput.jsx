const SimpleInput = ({type, name, id, placeholder, className, value, onChange, onKeyUp}) => {
  return (
    <input
      type="text"
      name="disciplineName"
      id="disciplineName"
      placeholder="Discipline Name"
      className="h-12 w-full rounded-md text-sm focus:ring-transparent"
      value={disciplineName}
      onChange={onChange}
      onKeyUp={(e) => onKeyUp(e)}
    />
  );
};

export default SimpleInput;
