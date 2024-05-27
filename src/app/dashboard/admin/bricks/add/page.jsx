"use client";
import { searchIcon } from "@/svgs/topbarSvgs";
import GoBackBar from "../../quiz-bank/_components/GoBackBar";
import { useEffect, useRef, useState } from "react";
import { cross } from "@/svgs/commonSvgs";

const QuizBankAddPage = () => {
  const newTopicRef = useRef(null);
  const [newTopicInput, setNewTopicInput] = useState("");
  const [topics, setTopics] = useState([]);
  const [addTopic, setAddTopic] = useState(false);
  const bullet = "\u2022";
  const bulletWithSpace = `${bullet} `;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (newTopicRef.current && !newTopicRef.current.contains(event.target)) {
        setAddTopic(false);
        if (newTopicRef.current.value.trim() !== "") {
          setTopics((prevTopics) => [...prevTopics, newTopicRef.current.value]);
        }
        setNewTopicInput("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures the effect runs only once
  const handleRemoveTag = (index) => {
    const newTopics = [...topics];
    newTopics.splice(index, 1);
    setTopics(newTopics);
  };

  const handleInput = (event) => {
    const { target } = event;
    const { selectionStart, value } = target;

    if (event.key === "Enter") {
      target.value = [...value]
        .map((c, i) => (i === selectionStart - 1 ? `\n${bulletWithSpace}` : c))
        .join("");
      target.selectionStart = selectionStart + bulletWithSpace.length;
      target.selectionEnd = selectionStart + bulletWithSpace.length;
    }

    if (value[0] !== bullet) {
      target.value = `${bulletWithSpace}${value}`;
    }
  };
  const handleAddTopic = () => {
    setAddTopic(true);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Check if the input value is not empty
      if (newTopicInput.trim() !== "") {
        setTopics((prevTopics) => [...prevTopics, newTopicInput]);
        setNewTopicInput(""); // Clear the input field
      }
    }
  };
  return (
    <div className="flex w-full flex-col py-5">
      <GoBackBar />
      <div className="flex flex-col gap-6 py-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-2">
          <span className="text-[18px]">Add New Brick Collection</span>
          <span className="text-sm text-text-gray">
            Title, Quote, Learning Outcomes, Topics Covered
          </span>
        </div>
        <div className="flex w-full max-w-[793px] flex-col gap-y-8 rounded-xl bg-white px-6 py-7 shadow">
          <div className="relative flex min-h-[54px] w-full items-center rounded-md border border-black/10 px-4 py-3">
            <input
              className="w-full border-none text-sm outline-none focus:border-light-border focus:outline-none focus:ring-white active:border-light-gray "
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            />
            <label
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
              htmlFor="title"
            >
              Brick Collection Title
            </label>
          </div>
          <div className="relative flex w-full items-center rounded-md border border-black/10 px-4 py-3">
            <textarea
              className="min-h-[138px] w-full border-none text-sm outline-none focus:outline-none"
              type="text"
              name="quote"
              id="quote"
              placeholder="Quote"
            ></textarea>
            <label
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
              htmlFor="desc"
            >
              Quote
            </label>
          </div>
          <div className="relative flex w-full items-center rounded-md border border-black/10 px-4 py-3">
            <textarea
              onKeyUp={handleInput}
              className="min-h-[138px] w-full border-none text-sm outline-none focus:outline-none"
              type="text"
              name="learning Outcomes"
              id="learningOutcomes"
              placeholder="learningOutcomes"
            ></textarea>
            <label
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
              htmlFor="learningOutcomes"
            >
              Learning Outcomes
            </label>
          </div>

          <span className="text-center text-sm font-medium text-dark">
            Topics Covered
          </span>
          {addTopic && (
            <div className="relative  flex min-h-[54px] w-[65%] items-center self-center rounded-md border border-black/10 px-4 py-3">
              <input
                className="w-full border-none text-sm outline-none focus:border-light-border focus:outline-none focus:ring-white active:border-light-gray "
                type="topic"
                ref={newTopicRef}
                autoComplete="off"
                name="topic"
                id="topic"
                value={newTopicInput}
                placeholder=""
                onKeyDown={handleKeyDown}
                onChange={(e) => setNewTopicInput(e.target.value)}
              />
              <label
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
                htmlFor="topic"
              >
                Topic Name
              </label>
            </div>
          )}
          <button
            onClick={handleAddTopic}
            className="broder -mt-2  flex w-[199px]  items-center justify-center gap-1 self-center border  border-dashed border-text-gray/50 py-3"
          >
            {addTopic ? "Add Another" : "Add"} {add}
          </button>

          <div className="grid w-full grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {topics.map((topic, index) => (
              <button className="flex items-center   justify-between rounded-md border border-black/20 px-3 py-2 text-sm hover:border-primary/35 hover:bg-primary/5 hover:text-primary">
                {topic}
                <span onClick={() => handleRemoveTag(index)}>{cross}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center lg:mt-12 lg:justify-end">
        <button className="h-[60px] min-w-[305px] rounded-md bg-primary text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default QuizBankAddPage;
const add = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 20.5H13C18 20.5 20 18.5 20 13.5V7.5C20 2.5 18 0.5 13 0.5H7C2 0.5 0 2.5 0 7.5V13.5C0 18.5 2 20.5 7 20.5Z"
      fill="white"
    />
    <path
      d="M6 10.5H14"
      stroke="#121212"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 14.5V6.5"
      stroke="#121212"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
