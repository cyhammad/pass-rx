"use client";

import { backArrow } from "@/svgs/commonSvgs";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="flex gap-x-2 text-xs"
      onClick={() => router.push("/admin/quiz-bank")}
    >
      {backArrow}
      Back
    </button>
  );
};

export default BackButton;
