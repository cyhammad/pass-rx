"use client";

import { useSearchParams } from "next/navigation";
import Editor from "./_components/Editor";

const AddTopicPage = ({ params }) => {
  const { brickId } = params;
  const searchParams = useSearchParams();
  const sectionId = searchParams.get("sectionId");
  const chapterId = searchParams.get("chapterId");

  return (
    <div className="flex w-full justify-center p-5 pb-16">
      <Editor />
    </div>
  );
};

export default AddTopicPage;
