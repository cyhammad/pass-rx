import { ticbox } from "@/svgs/userDasboard";

import Card1Graph from "../graphs/Card1Graph";
export default function Card1() {
  return (
    <div className=" flex max-h-[238px] w-full flex-col justify-between rounded-xl bg-white  py-5 drop-shadow-sm">
      <div className="flex w-full flex-col justify-between px-5">
        {ticbox}
        <h1 className="ml-0.5 mt-2 text-2xl  font-semibold">125</h1>
        <p className="ml-0.5 mt-2  text-sm  text-user-gray">
          Total Quizzes Made
        </p>
      </div>
      <Card1Graph />
    </div>
  );
}
