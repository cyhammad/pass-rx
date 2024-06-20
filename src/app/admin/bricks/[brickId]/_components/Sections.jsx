"use client";

import { grayPencil } from "@/svgs/commonSvgs";
import { option } from "@/svgs/commonSvgs";
import ChapterDropdown from "./dropdowns/ChapterDropdown";
import AddSectionCard from "./cards/AddSectionCard";
import { useState } from "react";
import { addSection } from "@/app/lib/actions/BrickSectionActions";
import { revalidateData } from "@/app/utils/revalidate-data";

export default function Sections({ token, brickId, sections }) {
  const [newSectionTitle, setNewSectionTitle] = useState("");
  const [newChapterTitle, setNewChapterTitle] = useState("");
  const [showAddSection, setShowAddSection] = useState(false);

  const handleSave = async () => {
    const res = await addSection(token, brickId, newSectionTitle);
    console.log("Add Section", res);
    if (res.message === "Created successfully") {
      revalidateData(`admin/bricks/${brickId}`);
    }
  };
  return (
    <div className="md:w-[624.23px]">
      <div className="relative w-full">
        {sections.map((section) => (
          <div className="flex w-full flex-col" key={section._id}>
            <div className="flex w-full justify-between px-4">
              <p className="flex items-center gap-x-[14px] text-lg font-bold">
                {section.title}
                {grayPencil}
              </p>
              {option}
            </div>
            {section.chapters.map((chapter) => {
              console.log("Chapter", chapter);
              return <ChapterDropdown key={chapter._id} chapter={chapter} />;
            })}
          </div>
        ))}
        {showAddSection ? (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="text"
                id="text"
                className="brick-title w-fit border-b border-text-secondary bg-transparent p-0 py-2 text-[18px] font-semibold placeholder:text-black/40 focus:ring-transparent"
                value={newSectionTitle}
                placeholder="Section Name"
                onChange={(e) => setNewSectionTitle(e.target.value)}
              />
              <div className="flex w-full items-center justify-between gap-3 rounded-[12px] px-3 py-[5px] text-sm text-dark shadow">
                <input
                  className="flex w-full items-center justify-between gap-1 bg-transparent px-0 text-xs ring-transparent focus:ring-transparent"
                  type="text"
                  id="newChapter"
                  name="newChapter"
                  placeholder="First Chapter Name"
                  value={newChapterTitle}
                  onChange={(e) => setNewChapterTitle(e.target.value)}
                />
                <div className="flex items-center gap-2">{chevron}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button
                className="max-h-[60px] min-h-[50px] w-[137px] rounded-md border border-black/20 bg-transparent"
                onClick={() => setShowAddSection(false)}
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
          </div>
        ) : (
          <AddSectionCard onClick={() => setShowAddSection(true)} />
        )}
      </div>
    </div>
  );
}

const lock = (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.96303 1C4.85522 1 3.14501 2.8243 3.14501 5.07445V7.25643H2.58619C1.71626 7.25643 1 8.01796 1 8.94761V15.3088C1 16.2385 1.71626 17 2.58619 17H11.4173C12.2872 17 13 16.2385 13 15.3088V8.94761C13 8.01796 12.2872 7.25643 11.4173 7.25643H10.7836V5.07445C10.7836 2.8243 9.07085 1 6.96303 1ZM6.96303 1.94118C8.59939 1.94118 9.90328 3.33055 9.90328 5.07445V7.25643H4.02536V5.07445C4.02536 3.33055 5.32666 1.94118 6.96303 1.94118ZM2.58619 8.19761H3.58346H10.3417H11.4173C11.8157 8.19761 12.1196 8.5242 12.1196 8.94761V15.3088C12.1196 15.7322 11.8157 16.0588 11.4173 16.0588H2.58619C2.18771 16.0588 1.88035 15.7322 1.88035 15.3088V8.94761C1.88035 8.5242 2.18771 8.19761 2.58619 8.19761ZM7.00172 9.86489C6.15965 9.86489 5.46454 10.6047 5.46454 11.5046C5.46454 12.2408 5.92961 12.8671 6.55982 13.0708V13.9228C6.56005 13.9846 6.57166 14.0457 6.59399 14.1027C6.61631 14.1597 6.64893 14.2115 6.68996 14.255C6.731 14.2985 6.77965 14.333 6.83314 14.3564C6.88663 14.3799 6.94391 14.3918 7.00172 14.3915C7.11787 14.3911 7.22913 14.3415 7.31126 14.2537C7.39338 14.1659 7.43972 14.047 7.44018 13.9228V13.0717C8.07092 12.8689 8.53547 12.2418 8.53546 11.5046C8.53546 10.6047 7.84379 9.86489 7.00172 9.86489ZM7.00172 10.8061C7.36906 10.8061 7.65511 11.1144 7.65511 11.5046C7.65511 11.8948 7.36906 12.1994 7.00172 12.1994C6.63438 12.1994 6.34489 11.8948 6.34489 11.5046C6.34489 11.1144 6.63438 10.8061 7.00172 10.8061Z"
      fill="Black"
      stroke="Black"
      strokeWidth="0.1"
    />
  </svg>
);

const chevron = (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.754393 1.27295L1.24506 0.787109L5.6535 5.23802L9.99357 0.969427L10.478 1.46182L5.64694 6.21315L0.754393 1.27295Z"
      fill="black"
      fillOpacity="0.6"
      stroke="#121212"
    />
  </svg>
);
