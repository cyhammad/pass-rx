const Card1 = () => {
  return (
    <div className="flex h-[235px] w-full min-w-[230px] lg:max-w-[342px] flex-col justify-between rounded-[29px] border border-dashed px-6 py-8">
      <div className="flex w-full justify-end text-xs">
        <span className="text-text-green">4.25%</span>
        <span className="pl-1">All Time Gain</span>
      </div>
      <div className="flex flex-col gap-y-2.5">
        <span className="text-xs text-gray">Revenue Generated</span>
        <div className="flex items-start gap-x-0.5">
          <span className="text-4xl">55,600</span>
          <span className="leading-[28px]">.50</span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
