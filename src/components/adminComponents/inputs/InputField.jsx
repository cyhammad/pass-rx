import React from "react";

const InputField = ({
  title,
  type = "text",
  name = "input",
  id = "input",
  placeholder = "Enter text",
  value = "",
  onChange,
  inputClassName = "",
  titleClassName = "",
  ref,
  autoComplete = "off",
  closeIcon = false,
  handleClose = () => {},
  containerClassName = "",
  closeIconClassName = "",
  onKeyDown = () => {},
  onKeyUp = () => {},
}) => {
  return (
    <div className={`relative flex items-center ${containerClassName}`}>
      <input
        className={`h-[54px] w-full rounded-md bg-transparent p-0 px-4 py-3 text-sm focus:ring-transparent active:border-light-gray ${inputClassName}`}
        type={type}
        ref={ref}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />
      <label
        className={`absolute -top-2 left-3 px-1 text-xs text-text-gray ${titleClassName}`}
        htmlFor="title"
      >
        {title}
      </label>
      {closeIcon && (
        <button
          className={`absolute right-0 ${closeIconClassName}`}
          onClick={handleClose}
        >
          {closeSvg}
        </button>
      )}
    </div>
  );
};

const closeSvg = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9043 24.9189L24.7424 15.0808"
      stroke="#121212"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.7424 24.9192L14.9043 15.0811"
      stroke="#121212"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default InputField;
