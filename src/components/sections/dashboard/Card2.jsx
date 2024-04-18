const Card2 = () => {
  return (
    <div className="flex h-[235px] w-full lg:max-w-[342px] min-w-[300px] items-center rounded-[29px] bg-dark px-6 py-8 text-white">
      <div className="flex min-h-[136px] h-full md:h-fit w-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex w-1/2 flex-col gap-y-[3px]">
            <span className="text-sm">15K</span>
            <span className="text-xs text-gray">Total Users</span>
          </div>
          <div className="flex w-1/2 flex-col gap-y-[3px]">
            <div className="flex items-center gap-x-0.5">
              <span className="text-sm">+515.50</span>
              <div className="flex gap-x-0.5 text-[6px] leading-[12.8px]">
                <span className="text-text-green">+3.25%</span>
                <span className="text-gray">this month</span>
              </div>
            </div>
            <span className="text-xs text-gray">Total Subscribers</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex w-1/2 flex-col gap-y-[3px]">
            <span className="text-sm">4</span>
            <span className="text-xs text-gray">Total Disciplines</span>
          </div>
          <div className="flex w-1/2 flex-col gap-y-[3px]">
            <span className="text-sm">Open Setups</span>
            <span className="text-xs text-gray">Total Quizbanks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
