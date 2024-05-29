import { star } from "@/svgs/userDasboard";


export default function SubscriptionCard() {
  return (
    <div
      className={`h-[238px] w-full rounded-xl bg-[url('/userSub.svg')] bg-cover bg-no-repeat  xl:w-[146%]  xl:px-8`}
    >
      <div className="flex h-full flex-col justify-between px-4 py-[22.3px] xl:px-0">
        {star}
        <p className="px-1.5 text-sm font-medium text-white">
          4 Days Remaining
        </p>
        <button className=" rounded-[10px]  bg-white px-4  py-4  text-sm font-semibold ">
          View Subscription Plans
        </button>
      </div>
    </div>
  );
}
