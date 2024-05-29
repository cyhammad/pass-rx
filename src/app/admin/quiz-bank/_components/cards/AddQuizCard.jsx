import Link from "next/link";


export default function AddQuizCard() {
  return (
    <Link
      href="/admin/quiz-bank/add"
      className="mt-[38px] flex h-[233px] w-[262px] flex-col items-center justify-center rounded-2xl bg-dark text-white sm:w-[272px]"
    >
      <span>{add}</span>
      <p className="mt-4 text-sm font-medium">New Quizbank</p>
    </Link>
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
