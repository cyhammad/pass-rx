"use client";

import { useState } from "react";
import BrickTopSection from "./BrickTopSection";
import LearningObjectives from "./LearningObjectives";
import Sections from "./Sections";
import BackButton from "./buttons/BackButton";
import { updateBrick } from "@/app/lib/actions/brickActions";
import { revalidateData } from "@/app/utils/revalidate-data";

const EditableBrick = ({ token, brick }) => {
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(brick.title);
  const [quote, setQuote] = useState(brick.quote);
  const [tags, setTags] = useState(brick.disciplines);
  const [image, setImage] = useState(brick.image);
  const [learningOutcomes, setLearningOutcomes] = useState(
    brick.learningOutcomes,
  );
  const [sections, setSections] = useState(brick.sections);

  const handleUpdateBrick = async () => {
    const res = await updateBrick(
      token,
      brick._id,
      title,
      quote,
      learningOutcomes,
      image,
      tags,
    );
    console.log("RES", res);
    if (res.message === "Updated successfully") {
      revalidateData(`admin/bricks/${brick._id}`);
      setEditable(false);
    }
  };
  return (
    <div className="flex w-full flex-col">
      <BackButton />
      <BrickTopSection
        brick={brick}
        editable={editable}
        setEditable={setEditable}
        title={title}
        setTitle={setTitle}
        quote={quote}
        setQuote={setQuote}
        tags={tags}
        setTags={setTags}
        image={image}
        setImage={setImage}
        handleSave={handleUpdateBrick}
      />
      <div className="mt-10 w-full border border-light-border"></div>
      <div className="flex flex-col justify-between gap-x-[4rem] pb-10 lg:flex-row lg:pr-11 xl:ml-[10rem]">
        <Sections token={token} brickId={brick._id} sections={sections} />
        <LearningObjectives
          editable={editable}
          setEditable={setEditable}
          learningObjectives={learningOutcomes}
          setLearningObjectives={setLearningOutcomes}
        />
      </div>
    </div>
  );
};

export default EditableBrick;
