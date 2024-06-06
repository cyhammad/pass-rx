"use client";

import ThreeDotLoader from "@/components/loaders/ThreeDotLoader";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <ThreeDotLoader />
    </div>
  );
};

export default Loading;
