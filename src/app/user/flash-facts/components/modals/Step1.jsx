import CheckBox from "@/components/userComponents/input-elements/CheckBox";
import { Line } from "@/app/user/quiz-bank/components/modals/AddQuiz1";

export default function Step1({ setStep, data, setData ,handleChange}) {
  const handleOptionSelect = (option) => {
    setData((prevData) => ({
      ...prevData,
      rating: prevData.rating.includes(option)
        ? prevData.rating.filter((item) => item !== option) // Remove the option if already selected
        : [...prevData.rating, option], // Add the option if not selected
    }));
  };
  return (
    <div className=" mt-3 flex h-full w-full select-none flex-col  justify-between px-6">
      <div className="flex self-center">
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full bg-primary text-sm font-medium text-white ">
            01
          </div>
          <p className=" mt-2  text-center text-primary ">Deck Settings</p>
        </div>
        <Line bg={"bg-text-gray-2"} />
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full border-2  border-text-gray  text-sm font-medium  ">
            02
          </div>
          <p className=" mt-2 text-center text-user-gray">Choose Cards</p>
        </div>
        <Line bg={"bg-text-gray-2"} />

        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full border-2  border-text-gray  text-sm font-medium  ">
            03
          </div>
          <p className="mt-2 text-center text-user-gray">Finalize Deck</p>
        </div>
      </div>
      <div className="mt-8 flex  flex-col justify-between self-center">
        <div className="flex flex-col items-center">
          <h5 className="text-center text-lg font-semibold">Card Status</h5>
          <div className="mt-2 flex items-center gap-[2vw]">
            <div className="flex items-center gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                value="All"
                checked={data.status === "All"}
                onChange={handleChange}
                className="cursor-pointer checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="status"
              />
              <p className="text-xs sm:text-base">All</p>
            </div>
            <div className="flex items-center gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                value="Rated"
                checked={data.status === "Rated"}
                onChange={handleChange}
                className="cursor-pointer checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="status"
              />
              <p className="text-xs sm:text-base">Rated</p>
            </div>
            <div className="flex items-center  gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                value="Unrated"
                checked={data.status === "Unrated"}
                onChange={handleChange}
                className="cursor-pointer checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="status"
              />
              <p className="text-xs sm:text-base">Unrated</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
        <h5 className="text-center text-lg font-semibold">Card Rating</h5>
      <div className="mt-2 flex gap-6">
        <CheckBox
          text="Don’t Know"
          selected={data.rating.includes("Don’t Know")}
          onSelect={() => handleOptionSelect("Don’t Know")}
        />
        <CheckBox
          text="OK"
          selected={data.rating.includes("OK")}
          onSelect={() => handleOptionSelect("OK")}
        />
        <CheckBox
          text="Nailed It"
          selected={data.rating.includes("Nailed It")}
          onSelect={() => handleOptionSelect("Nailed It")}
        />
      </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <h5 className="text-center text-lg font-semibold">Mark Status</h5>
          <div className="mt-2 flex items-center gap-[2vw] ">
            <div className="flex items-center  gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                className="cursor-pointer checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="markStatus"
                value="All"
                checked={data.markStatus === "All"}
                onChange={handleChange}
              />
              <p className="text-xs sm:text-base">All</p>
            </div>
            <div className="flex items-center gap-2   font-medium text-text-gray-2">
              <input
                type="radio"
                className="cursor-pointer checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="markStatus"
                value="Marked Only"
                checked={data.markStatus === "Marked Only"}
                onChange={handleChange}
              />
              <p className="text-xs sm:text-base">Marked Only</p>
            </div>
            <div className="flex items-center gap-2 font-medium text-text-gray-2">
              <input
                type="radio"
                className="cursor-pointer checked:bg-primary checked:hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-emerald-400 checked:focus:bg-primary checked:active:bg-primary"
                name="markStatus"
                value="Unmarked Only"
                checked={data.markStatus === "Unmarked Only"}
                onChange={handleChange}
              />
              <p className="text-xs sm:text-base">Unmarked Only</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setStep("step2")}
          className=" mb-7 mt-8 flex  items-center justify-center  rounded-[10px] bg-primary px-4 py-5 text-sm font-semibold text-white "
        >
          Next Step {arrow}
        </button>
      </div>
    </div>
  );
}
const arrow = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 15.6536L12.5 10.6536L7.5 5.65356"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
