const CustomTextarea = ({ title, value, setValue }) => {
  return (
    <div className="relative flex min-w-[250px] items-center rounded-lg border border-border-color px-1 py-2 text-start">
      <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray/70">
        {title}
      </span>
      <textarea
        className="w-full border-none bg-transparent text-sm outline-none ring-transparent focus:outline-none focus:ring-transparent"
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
