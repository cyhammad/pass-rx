import { Line } from "@/app/user/quiz-bank/components/modals/AddQuiz1";
import CheckBox from "@/components/userComponents/input-elements/CheckBox";
import CheckBox2 from "@/components/userComponents/input-elements/CheckBox2";

export default function Step2({ setStep, setData, data, disciplines }) {
  const handleDisciplineToggle = (id) => {
    setData(prevFormData => ({
      ...prevFormData,
      disciplines: prevFormData.disciplines.includes(id)
        ? prevFormData.disciplines.filter(disciplineId => disciplineId !== id)
        : [...prevFormData.disciplines, id]
    }));
  };
  console.log(data.disciplines)
  return (
    <div className=" mt-3 flex h-full w-full select-none flex-col  justify-between px-6">
      <div className="flex justify-between self-center">
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full bg-primary text-sm font-medium text-white ">
            01
          </div>
          <p className=" mt-2  text-center text-primary ">Deck Settings</p>
        </div>
        <Line bg={"bg-primary"} />
        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full bg-primary text-sm  font-medium text-white ">
            02
          </div>
          <p className=" mt-2 text-center  text-primary">Choose Cards</p>
        </div>
        <Line bg={"bg-text-gray-2"} />

        <div className="flex flex-col">
          <div className="flex h-9 w-9 items-center justify-center self-center rounded-full border-2  border-text-gray  text-sm font-medium  ">
            03
          </div>
          <p className="mt-2 text-center text-user-gray">Finalize Deck</p>
        </div>
      </div>
      <div className=" max-w[489px] mt-3 flex flex-col justify-between border-b border-checkbox pb-10 sm:mt-0 sm:self-center">
        <div className="mt-3 max-h-[45svh] overflow-auto pr-3 sm:px-6">
          {disciplines.map((discipline, index) => {
            const isSelected = data.disciplines.includes(discipline._id);
            if (index % 2 === 0 && index + 1 < disciplines.length) {
              return (
                <div key={index} className="flex justify-between sm:gap-[10vw]">
                  <div
                    className={`flex items-center gap-[10px] border-b border-checkbox/40 py-3.5 sm:px-5 ${isSelected ? 'bg-gray-200' : ''}`}
                    onClick={() => handleDisciplineToggle(discipline._id)}
                  >
                    <CheckBox2 checked={isSelected} />
                    <p className="text-xs font-semibold sm:text-sm">{discipline.name}</p>
                  </div>
                  <div
                    className={`flex items-center gap-[10px] border-b border-checkbox/40 py-3.5 sm:px-5 ${isSelected ? 'bg-gray-200' : ''}`}
                    onClick={() => handleDisciplineToggle(disciplines[index + 1]._id)}
                  >
                    <CheckBox2 checked={isSelected} />
                    <p className="text-xs font-semibold sm:text-sm">{disciplines[index + 1].name}</p>
                  </div>
                </div>
              );
            } else if (index === disciplines.length - 1) {
              return (
                <div key={index} className="flex justify-between sm:gap-[8vw]">
                  <div
                    className={`flex items-center gap-[10px] border-b border-checkbox/40 py-3.5 sm:px-5 ${isSelected ? 'bg-gray-200' : ''}`}
                    onClick={() => handleDisciplineToggle(discipline._id)}
                  >
                    <CheckBox2 checked={isSelected} />
                    <p className="text-xs font-semibold sm:text-sm">{discipline.name}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <button
        onClick={() => setStep("step3")}
        className="  mb-7  mt-8 flex w-[250px] items-center justify-center  self-center rounded-[10px]  bg-primary px-4 py-5 text-sm font-semibold text-white sm:w-[335px] "
      >
        Next Step {arrow}{" "}
      </button>
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
