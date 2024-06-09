"use client";

import { useRouter } from "next/navigation";
import { backArrow } from "@/svgs/commonSvgs";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="mt-7 flex items-center  gap-x-2">
      <button onClick={() => router.back()}>{backArrow}</button>
      <span className="text-xs font-medium ">Back</span>
    </div>
  );
};

export default BackButton;
