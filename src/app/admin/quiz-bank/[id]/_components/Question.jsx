const Question = ({ question }) => {
  return (
    <div className="flex flex-col gap-y-3 p-3 text-sm">
      <div className="flex gap-x-3 items-start">
        <span className="leading-[22px]">
          How can we differentiate so many different foods if we can only taste
          four flavors on our tongue: sweet, bitter, sour, and salty?
        </span>
        <button className="p-2">
            {threeDots}
        </button>
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="text-text-gray/50">Possible Options</span>
        
      </div>
    </div>
  );
};

const threeDots = (
  <svg
    width="4"
    height="16"
    viewBox="0 0 4 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.00016 9.88737C2.92064 9.88737 3.66683 9.14118 3.66683 8.2207C3.66683 7.30023 2.92064 6.55404 2.00016 6.55404C1.07969 6.55404 0.333496 7.30023 0.333496 8.2207C0.333496 9.14118 1.07969 9.88737 2.00016 9.88737Z"
      fill="white"
      fillOpacity="0.45"
    />
    <path
      d="M2.00016 4.05404C2.92064 4.05404 3.66683 3.30784 3.66683 2.38737C3.66683 1.4669 2.92064 0.720703 2.00016 0.720703C1.07969 0.720703 0.333496 1.4669 0.333496 2.38737C0.333496 3.30784 1.07969 4.05404 2.00016 4.05404Z"
      fill="white"
      fillOpacity="0.45"
    />
    <path
      d="M2.00016 15.7207C2.92064 15.7207 3.66683 14.9745 3.66683 14.054C3.66683 13.1336 2.92064 12.3874 2.00016 12.3874C1.07969 12.3874 0.333496 13.1336 0.333496 14.054C0.333496 14.9745 1.07969 15.7207 2.00016 15.7207Z"
      fill="white"
      fillOpacity="0.45"
    />
  </svg>
);

export default Question;
