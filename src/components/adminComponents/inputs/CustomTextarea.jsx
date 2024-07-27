const CustomTextarea = ({
  title,
  placeholder,
  value,
  onChange,
  onKeyUp,
  id,
  textAreaClassName,
  containerClassName,
  titleClassName,
  cols = 2,
  rows = 1,
  height,
  disabled = false,
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      <span
        className={`absolute -top-2 left-3 px-1 text-xs text-text-gray ${titleClassName}`}
      >
        {title}
      </span>
      <textarea
        className={`w-full min-w-[250px] h-[${height}] rounded-md bg-transparent py-4 text-sm ring-transparent focus:ring-transparent ${textAreaClassName}`}
        value={value}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
        cols={cols}
        rows={rows}
        disabled={disabled}
      ></textarea>
    </div>
  );
};

export default CustomTextarea;
