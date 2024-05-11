import { searchIcon } from "@/svgs/topbarSvgs";
import GoBackBar from "../_components/GoBackBar";

const QuizBankAddPage = () => {
  return (
    <div className="flex w-full flex-col py-5">
      <GoBackBar />
      <div className="flex flex-col gap-6 py-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-2">
          <span className="text-[18px]">Add New Quizbank</span>
          <span className="text-sm text-text-gray">
            Title, Description, Disciplines
          </span>
        </div>
        <div className="flex w-full max-w-[793px] flex-col gap-y-8 rounded-xl bg-white px-6 py-7 shadow">
          <div className="relative flex min-h-[54px] w-full items-center rounded-md border border-black/10 px-4 py-3">
            <input
              className="w-full border-none text-sm outline-none focus:outline-none"
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            />
            <label
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
              htmlFor="title"
            >
              Quizbank Title
            </label>
          </div>
          <div className="relative flex w-full items-center rounded-md border border-black/10 px-4 py-3">
            <textarea
              className="min-h-[138px] w-full border-none text-sm outline-none focus:outline-none"
              type="text"
              name="desc"
              id="desc"
              placeholder="desc"
            ></textarea>
            <label
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
              htmlFor="desc"
            >
              Description
            </label>
          </div>
          <span className="text-center text-sm font-medium text-dark">
            Add Disciplines
          </span>
          <div className="flex w-full max-w-[375px] items-center gap-x-3 self-center rounded-md border border-black/10 p-4">
            <button>{searchIcon}</button>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="w-full border-none text-sm outline-none focus:outline-none md:min-w-[280px]"
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
            <button className="rounded-md border border-black/20 px-2 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
              Discipline Name
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center lg:mt-20 lg:justify-end">
        <button className="h-[60px] min-w-[305px] rounded-md bg-primary text-white">
          + Create
        </button>
      </div>
    </div>
  );
};

export default QuizBankAddPage;
