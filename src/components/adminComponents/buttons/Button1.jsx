

export default function Button1({ title, textColor, bgColor, icon,onClick }) {
  return (
    <button
    onClick={onClick}
      className={`flex items-center rounded-md px-2 py-3 lg:px-8 bg-${bgColor} text-${textColor}`}
    >
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 pr-1 lg:mr-2 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {icon}
        </svg>
      )}
      <span className="text-xs font-medium lg:text-sm">{title}</span>
    </button>
  );
}
