"use client";

import { useRouter } from "next/navigation";
import { backArrow } from "@/svgs/commonSvgs";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mt-7 flex items-center gap-x-2"
    >
      {backArrow}
      <span className="text-xs font-medium ">Back</span>
    </button>
  );
};

export default BackButton;
