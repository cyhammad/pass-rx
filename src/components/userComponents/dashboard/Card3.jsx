import { clipboard } from "@/svgs/userDasboard";
import React from "react";
import Card3Graph from "../graphs/Card3Graph";

export default function Card3() {
  return (
    <div className=" flex max-h-[238px] w-full  flex-col justify-between rounded-xl bg-white  py-5 drop-shadow-sm">
      <div className="flex w-full flex-col justify-between px-5">
        {clipboard}
        <h1 className="ml-0.5 mt-2 text-2xl  font-semibold">15</h1>
        <p className="ml-0.5 mt-2  text-sm  text-user-gray">Notes Created</p>
      </div>
      <Card3Graph />
    </div>
  );
}
