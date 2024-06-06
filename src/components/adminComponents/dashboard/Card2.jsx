const Card2 = () => {
  return (
    <div className="h-[235px] w-full min-w-[300px] px-1 pb-10 sm:pb-0 lg:max-w-[342px]">
      <div className="flex h-full w-full  items-center rounded-[29px] bg-dark px-6 py-8 text-white">
        <div className="flex h-full min-h-[136px] w-full flex-col justify-between md:h-fit">
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
    </div>
  );
};

export default Card2;
