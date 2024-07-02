const CustomTextarea = ({ title, value, setValue }) => {
  return (
    <div className="relative">
      <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray/70">
        {title}
      </span>
      <textarea
        className="w-full min-w-[250px] bg-transparent text-sm  ring-transparent rounded-md py-4 focus:ring-transparent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`Type your ${title.toLowerCase()} here`}
        columns="1"
        rows="2"
      ></textarea>
    </div>
  );
};

export default CustomTextarea;
