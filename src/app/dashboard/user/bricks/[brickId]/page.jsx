"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { backArrow } from "@/svgs/commonSvgs";
import { useRouter } from "next/navigation";
import ChapterDropdown from "./_components/dropdowns/ChapterDropdown";
import Button from "./_components/buttons/Button";
import { cross } from "@/svgs/commonSvgs";
import { pencil } from "@/svgs/commonSvgs";
import { addSquare } from "@/svgs/commonSvgs";
import LearningObjectives from "./_components/LearningObjectives";
import Topics from "./_components/Topics";
export default function page() {
  const router = useRouter();
  const [tags, setTags] = useState([
    "Biostatistics and Study Design",
    "Public Health",
  ]);
  const newTagRef = useRef(null);
  const [editable, setEditable] = useState(false);
  const [buttonTitle1, setButtonTitle1] = useState("Delete");
  const [buttonTitle2, setButtonTitle2] = useState("Edit");
  const [newTagInput, setNewTagInput] = useState("");
  const [addTag, setAddTag] = useState(false);

  const [text, setText] = useState("Biostatistics");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (newTagRef.current && !newTagRef.current.contains(event.target)) {
        setAddTag(false);
        if (newTagRef.current.value.trim() !== "") {
          setTags(prevTags => [...prevTags, newTagRef.current.value]);
        }
        setNewTagInput("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures the effect runs only once
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleEditClick = () => {
    setEditable(true);
    setButtonTitle1("Discard");
    setButtonTitle2("Save");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleAddTag = () => {
    setAddTag(true);
  };
  const handleSave = () => {
    setButtonTitle1("Delete");
    setButtonTitle2("Edit");
    setEditable(false);

  };
  return (
    <div className="flex w-full flex-col ">
      <div className="mt-7 flex items-center  gap-x-2">
        <button onClick={() => router.back()}>{backArrow}</button>
        <span className="text-xs font-medium ">Back</span>
      </div>
      <div className="flex justify-between lg:flex-row flex-col xl:flex-nowrap flex-wrap">
      <div className="mt-7 flex  xl:flex-nowrap flex-wrap justify-start gap-6">
        <div className="relative flex-shrink-0">
          <Image
            src={"/bricks/brick.svg"} // Use forward slash for the path
            className="rounded-lg"
            width={347}
            height={264}
          />
          {editable && (
            <div>
              <button className=" absolute right-3  top-[13.5rem]  w-[68px]  rounded-full border border-dark  bg-light-gray py-1.5 text-sm font-medium ">
                Upload
              </button>
            </div>
          )}
        </div>

        <div className="xl:flex-nowrap flex-wrap">
          <div className="flex xl:flex-nowrap flex-wrap  ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder=""
              className={` -mt-2.5 bricks border border-light-gray focus:ring-light-gray focus:border-b-black/20 focus:border-light-gray focus:outline-none  max-w-72 bg-transparent md:text-[40px] text-3xl font-semibold outline-none placeholder:text-black  ${editable ? " text-text-gray border-b-black/20 broder-b " : "pointer-events-none "}`}
              value={text}
              onChange={handleChange}
              disabled={!editable}
            />
            {!editable && <ChapterDropdown />}
          </div>
          {!editable && (
            <div className="mt-4 flex gap-2 text-2xl font-normal">
              28 <p className="font-bold">Bricks</p>
            </div>
          )}

          <p
            className={` text-base font-normal ${editable ? "mt-10" : "mt-3"}`}
          >
            "Research is formalized curiosity. It is poking and prying with a
            purpose."
          </p>
          <p className="mt-3 text-sm">-ZORA NEALE HURSTON</p>
          <p className="mt-5 text-lg text-text-secondary ">Covered Topics:</p>
          <div className="mt-1 flex flex-wrap  flex-col sm:items-center gap-2 text-sm sm:flex-row">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex w-fit items-center justify-center gap-3 rounded-md border border-gray-border border-opacity-20 bg-white px-3 py-2"
              >
                {tag}
                {editable && (
                  <span onClick={() => handleRemoveTag(index)}>{cross}</span>
                )}
              </div>
            ))}
            {addTag ? (
              <input
                type="text"
                ref={newTagRef}
                placeholder="Type Name"
                value={newTagInput}
                className="min-w[126.81px] w-fit rounded-md border border-gray-border border-opacity-20 bg-white  px-3 py-2 outline-none"
                onChange={(e) => setNewTagInput(e.target.value)}
              />
            ) : (
              editable && <span onClick={handleAddTag}>{addSquare}</span>
            )}
          </div>
        </div>
        </div>
        <div className="flex gap-3 mt-8">
          <Button icon={!editable ? cross : null} title={buttonTitle1} />
          <Button
            icon={!editable ? pencil : null}
            title={buttonTitle2}
            onClick={editable?handleSave:handleEditClick}
            bgColor={"primary"}
            textColor={"white"}
          />
        </div>
      </div>
      <div className="mt-10  w-full border border-light-border"></div>
      <div className=" mt-6 flex flex-col justify-between gap-x-[4rem] lg:flex-row lg:pr-11 pb-10 ">
        <Topics />
        <LearningObjectives />
      </div>
    </div>
  );
}
