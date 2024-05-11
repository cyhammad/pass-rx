"use client";

import { backArrow } from "@/svgs/commonSvgs";
import { useRouter } from "next/navigation";

const GoBackBar = () => {
  const router = useRouter();
  return (
    <div className="flex w-full justify-between">
      <button
        className="flex items-center gap-x-2 text-xs"
        onClick={() => router.back()}
      >
        {backArrow}
        Back
      </button>
      <button
        className="flex min-h-[36px] items-center gap-x-2 rounded-full border border-gray px-4 py-2 text-xs"
        onClick={() => router.back()}
      >
        Cancel
      </button>
    </div>
  );
};

export default GoBackBar;
