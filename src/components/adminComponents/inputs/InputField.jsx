import React from "react";

const InputField = ({
  title,
  type = "text",
  name = "input",
  id = "input",
  placeholder = "Enter text",
  value = "",
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        className="h-[54px] w-full rounded-md p-0 px-4 py-3 text-sm focus:ring-transparent active:border-light-gray"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label
        className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
        htmlFor="title"
      >
        {title}
      </label>
    </div>
  );
};

export default InputField;
