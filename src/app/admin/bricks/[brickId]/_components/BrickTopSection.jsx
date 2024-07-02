"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cross } from "@/svgs/commonSvgs";
import { pencil } from "@/svgs/commonSvgs";
import { addSquare } from "@/svgs/commonSvgs";
import Button from "./buttons/Button";
import UnlockDropdown from "./dropdowns/UnlockDropdown";

const BrickTopSection = ({
  brick,
  editable,
  setEditable,
  title,
  setTitle,
  quote,
  setQuote,
  tags,
  setTags,
  image,
  setImage,
  handleSave,
}) => {
  const newTagRef = useRef(null);
  const [newTagInput, setNewTagInput] = useState("");
  const [addTag, setAddTag] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (newTagRef.current && !newTagRef.current.contains(event.target)) {
        setAddTag(false);
        if (newTagRef.current.value.trim() !== "") {
          setTags((prevTags) => [...prevTags, newTagRef.current.value]);
        }
        setNewTagInput("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleAddTag = () => {
    setAddTag(true);
  };
  // If enter is pressed add the tag
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTags((prevTags) => [...prevTags, newTagInput]);
      setNewTagInput("");
      setAddTag(false);
    }
  };

  const handleTagInputChange = (e) => {
    setNewTagInput(e.target.value);
  };
  return (
    <div className="flex flex-col flex-wrap justify-between lg:flex-row xl:flex-nowrap">
      <div className="mt-7 flex w-full flex-wrap justify-start gap-6 xl:flex-nowrap">
        <div className="relative h-fit">
          <Image
            src={"/bricks/brick.png"} // Use forward slash for the path
            className="w-full rounded-lg"
            width={347}
            height={264}
            alt="Brick Image"
          />
          {editable && (
            <button className="absolute bottom-5 right-5 h-[32px] w-[68px] rounded-full border border-dark bg-light-gray py-1.5 text-sm font-medium">
              Upload
            </button>
          )}
        </div>
        <div className="flex-wrap xl:flex-nowrap">
          <div className="flex flex-wrap items-center gap-x-5 xl:flex-nowrap">
            {editable ? (
              <input
                type="text"
                name="text"
                id="text"
                placeholder=""
                className="brick-title w-full border-b border-text-secondary bg-transparent p-0 text-[40px] font-semibold text-text-secondary focus:ring-transparent"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h1 className="text-[40px] font-semibold">{title}</h1>
            )}
            {!editable && <UnlockDropdown />}
          </div>
          <div
            className={`mt-4 flex gap-2 text-2xl font-normal ${editable && "opacity-0"}`}
          >
            28 <p className="font-bold">Bricks</p>
          </div>
          {editable ? (
            <textarea
              type="text"
              name="text"
              id="text"
              placeholder=""
              className="w-full bg-transparent p-0 underline focus:ring-transparent"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              rows={4}
            ></textarea>
          ) : (
            <p className="mt-3 text-base font-normal">
              {quote.substring(0, quote.lastIndexOf("-"))} <br />
              {quote.substring(quote.lastIndexOf("-"))}
            </p>
          )}
          <p className="mt-5 text-lg text-text-secondary">Covered Topics:</p>
          <div className="mt-1 flex flex-col  flex-wrap gap-2 text-sm sm:flex-row sm:items-center">
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
                className="min-w[126.81px] w-fit rounded-md border border-gray-border border-opacity-20 bg-white  px-3 py-2 "
                onChange={handleTagInputChange}
                onKeyDown={handleKeyDown}
              />
            ) : (
              editable && <span onClick={handleAddTag}>{addSquare}</span>
            )}
          </div>
        </div>
      </div>
      {editable ? (
        <div className="mt-8 flex h-fit gap-3">
          <button
            className="max-h-[60px] w-[137px] rounded-md border border-black/20 bg-transparent"
            onClick={() => setEditable(false)}
          >
            Discard
          </button>
          <button
            className="max-h-[60px] min-h-[50px] w-[137px] rounded-md border border-black/20 bg-primary text-white"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="mt-8 flex h-fit gap-3">
          <button className="flex max-h-[60px] w-[137px] items-center justify-center gap-2 rounded-md border border-black/20 bg-transparent">
            {cross} Delete
          </button>
          <button
            className="flex max-h-[60px] min-h-[50px] w-[137px] items-center justify-center gap-2 rounded-md border border-black/20 bg-primary text-white"
            onClick={() => setEditable(true)}
          >
            {pencil} Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default BrickTopSection;
