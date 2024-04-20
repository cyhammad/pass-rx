"use client";

import SalesGraph from "@/components/graphs/SalesGraph";
import Card1 from "@/components/sections/dashboard/Card1";
import Card2 from "@/components/sections/dashboard/Card2";
import StatSlider from "@/components/sections/dashboard/StatSlider";
import NewSubscribersTable from "@/components/tables/NewSubscribersTable";

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-y-6 p-3 py-5 sm:p-6 md:p-7">
      <h1 className="text-2xl">Goodmorning, Vikram</h1>
      {/* Large and higher screen stats */}
      <div className="hidden gap-3 pr-5 lg:flex xl:gap-6">
        <Card1 />
        <Card2 />
        <SalesGraph />
      </div>
      {/* Medium Screen Stats */}
      <div className="hidden flex-col gap-3 pr-5 sm:flex lg:hidden xl:gap-6">
        <div className="flex gap-3">
          <Card1 />
          <Card2 />
        </div>
        <SalesGraph />
      </div>
      {/* Mobile Screen Stats */}
      <div className="sm:hidden">
        <StatSlider />
      </div>
      <NewSubscribersTable />
    </main>
  );
}
