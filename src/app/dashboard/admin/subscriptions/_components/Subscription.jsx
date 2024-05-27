"use client";
import React from "react";
import Card from "./cards/Card";
import SubscribersTable from "./tables/SubscribersTable";
export default function Subscription() {
  return (
    <div className="flex w-full flex-col">
      <div className=" h-[780px] w-full bg-white drop-shadow md:h-[360px]">
        <div className="flex flex-col pr-4 sm:px-5  md:px-0 md:pl-8">
          <h1 className="mt-8 text-[1.125rem]  font-medium sm:text-2xl">
            Subscription
          </h1>
          <p className="mt-3 text-sm font-medium text-text-gray">
            Subscription Plans
          </p>
          <div className="mt-1 flex flex-col items-center justify-center gap-5 md:flex-row  ">
            <Card  title={"Monthly Subscription"} text={"Display stars in Google organic search risult and showcase reviews on your website"} value={"$110"}/>
            <Card  title={"Yearly Subscription"} text={"Display stars in Google organic search risult and showcase reviews on your website"} value={"$330"}/>
          </div>
        </div>
      </div>
      <div className="md:mt-[111px] mt-12 flex  flex-col bg-light-gray pr-4 sm:px-5 md:px-8">
        <SubscribersTable />
      </div>
    </div>
  );
}
