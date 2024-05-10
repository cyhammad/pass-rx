import BricksCard from "@/components/userComponents/dashboard/BricksCard";
import Card1 from "@/components/userComponents/dashboard/Card1";
import Card2 from "@/components/userComponents/dashboard/Card2";
import Card3 from "@/components/userComponents/dashboard/Card3";
import FlashFactsPerformanceCard from "@/components/userComponents/dashboard/FlashFactsPerformanceCard";
import QuizPerformanceCard from "@/components/userComponents/dashboard/QuizPerformanceCard";
import StatSlider from "@/components/userComponents/dashboard/StatsSlider";
import SubscriptionCard from "@/components/userComponents/dashboard/SubscriptionCard";
import React from "react";

export default function page() {
  return (
    <main className="flex w-full flex-col gap-y-6 bg-light-gray p-3 py-5 sm:p-6 md:p-7">
      <h1 className="text-2xl">Goodmorning, Vikram</h1>
      {/* Large and higher screen stats */}
      <div className=" hidden justify-between gap-x-3 xl:flex">
        <Card1 />
        <Card2 />
        <Card3 />
        <SubscriptionCard />
      </div>
      {/* medium */}
      <div className="hidden  flex-col justify-between  gap-y-8 md:flex xl:hidden">
        <div className="flex justify-between gap-x-3 ">
          <Card2 />
          <Card3 />
        </div>
        <div className="flex justify-between gap-x-6 ">
          <Card1 />

          <SubscriptionCard />
        </div>
      </div>
      <div className="md:hidden">
        <StatSlider />
      </div>
      <div className="flex justify-between gap-3 flex-col lg:flex-row ">
        <QuizPerformanceCard />
        <FlashFactsPerformanceCard />
        <BricksCard />
      </div>
    </main>
  );
}
