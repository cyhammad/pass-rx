import { flash } from "@/svgs/userDasboard";
import React from "react";
import Card2Graph from "../graphs/Card2Graph";

export default function Card2() {
  return (
    <div className=" flex max-h-[238px] w-full flex-col justify-between rounded-xl bg-white  py-5 drop-shadow-sm">
      <div className="flex w-full flex-col justify-between px-5">
        {flash}
        <h1 className="ml-0.5 mt-2 text-2xl font-semibold">12</h1>
        <p className="ml-0.5 mt-2  text-sm   text-user-gray">
          Total Flash Facts Made
        </p>
      </div>
      <Card2Graph />
    </div>
  );
}
