export default function AddSectionCard({ onClick }) {
  return (
    <div className="flex w-full items-center justify-center py-10">
      <button
        onClick={onClick}
        className="flex h-[95px] w-[126px] flex-col items-center justify-center rounded-2xl bg-dark text-white"
      >
        <span>{add}</span>
        <p className="mt-4 text-sm font-medium">New Section</p>
      </button>
    </div>
  );
}
const add = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      fill="white"
    />
    <path
      d="M8 12H16"
      stroke="#111213"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16V8"
      stroke="#111213"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
