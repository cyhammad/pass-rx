import TestCount from "./components/TestCount";
import TestHeading from "./components/TestHeading";
import TestQuestion from "./components/TestQuestion";

export default function page() {
  return (
    <div className=" mt-9 flex flex-col justify-between  bg-light-gray px-3 md:px-">
      {/* {/* <AnimatePresence>
        {isOpen && (
          <Finished
            text1={"Deck Finished"}
            toggleFinish={toggleFinish}
            text2={"You’ve successfully finished the deck"}
          />
        )}
      </AnimatePresence> */}
      <TestCount/>
      <TestQuestion />
      <div className="mb-5 mt-9 flex gap-4 self-center">
        <div className="broder flex size-[70px]  cursor-pointer items-center  justify-center  gap-1 self-end rounded-full border border-text-gray-2 text-sm">
          <span>{back}</span>Back
        </div>
        <div className="broder flex  size-[70px] cursor-pointer items-center  justify-center  gap-1 self-end rounded-full border border-text-gray-2 text-sm">
          Next<span className="rotate-180">{back}</span>
        </div>
      </div>
    </div>
  );
}

const back = (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 1L2 6L7 11"
      stroke="#121212"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
