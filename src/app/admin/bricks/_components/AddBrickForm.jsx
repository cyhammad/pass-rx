"use client";

import { useRef, useState } from "react";
import { cross } from "@/svgs/commonSvgs";
import { addBrick } from "@/app/lib/actions/brickActions";
import { AnimatePresence, motion } from "framer-motion";

const AddBrickForm = ({ token, revalidateData }) => {
  const [title, setTitle] = useState("");
  const [quote, setQuote] = useState("");
  const [learningOutcomes, setLearningOutcomes] = useState("");
  const newTopicRef = useRef(null);
  const [newTopicInput, setNewTopicInput] = useState("");
  const [topics, setTopics] = useState([]);
  const [addTopic, setAddTopic] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const bullet = "\u2022";
  const bulletWithSpace = `${bullet} `;
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
  const handleSaveBrick = async () => {
    console.log("Title", title);
    console.log("Quote", quote);
    console.log("Learning Outcomes", learningOutcomes);
    console.log("Topics", topics);
    const res = await addBrick(
      token,
      title,
      quote,
      learningOutcomes,
      "",
      topics,
    );
    console.log("RES", res);
    if (res.message === "Brick created successfully") {
      setSuccess(res.message);
      setTimeout(() => {
        revalidateData();
        setTitle("");
        setQuote("");
        setLearningOutcomes("");
        setTopics([]);
      }, 2000);
    } else {
      setError(res.message);
    }
  };
  return (
    <div className="flex w-full max-w-[793px] flex-col gap-5">
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-5"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setError("")}
            ></div>

            <div className="z-50  flex  h-[300px] max-w-lg flex-col items-center justify-between rounded-lg bg-white shadow-md md:h-[412.35px]">
              <div className="flex w-full items-center justify-between border-b border-black/10 px-6 py-2 md:gap-56 md:py-3">
                <p className="text-lg font-semibold ">Error</p>
                <span onClick={() => setError("")} className="cursor-pointer">
                  {cross}
                </span>
              </div>
              <div className="mt-[-2rem] flex w-2/3 flex-col  items-center">
                <span className="">{alert}</span>
                <p className="text-center text-sm sm:text-lg ">{error}</p>
              </div>
              <div className="mb-3 flex w-full justify-center">
                <button
                  className="hover:bg-gray-400 mr-2 w-1/2 rounded-lg border  border-black/10 py-2 font-medium focus:outline-none md:py-4"
                  onClick={() => setError("")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-5"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setSuccess("")}
            ></div>

            <div className="z-50  flex  h-[300px] max-w-lg flex-col items-center justify-between rounded-lg bg-white shadow-md md:h-[412.35px]">
              <div className="flex w-full items-center justify-between border-b border-black/10 px-6 py-2 md:gap-56 md:py-3">
                <p className="text-lg font-semibold ">Success</p>
                <span onClick={() => setSuccess("")} className="cursor-pointer">
                  {cross}
                </span>
              </div>
              <div className="mt-[-2rem] flex w-2/3 flex-col  items-center">
                <span className="">{successIcon}</span>
                <p className="text-center text-sm sm:text-lg ">{success}</p>
              </div>
              <div className="mb-3 flex w-full justify-center">
                <button
                  className="hover:bg-gray-400 mr-2 w-1/2 rounded-lg border  border-black/10 py-2 font-medium focus:outline-none md:py-4"
                  onClick={() => setSuccess("")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex w-full flex-col gap-y-8 rounded-xl bg-white px-6 py-7 shadow-[0px_4px_24px_0px_#0000000F]">
        <div className="relative flex h-[54px] w-full items-center rounded-md border border-black/10 px-1">
          <input
            className="w-full border-none text-sm outline-none focus:border-light-border focus:outline-none focus:ring-white active:border-light-gray"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
            htmlFor="title"
          >
            Brick Collection Title
          </label>
        </div>
        <div className="relative flex w-full items-center rounded-md border border-black/10 px-1 py-1">
          <textarea
            className="min-h-[138px] w-full border-none text-sm ring-transparent focus:ring-transparent"
            type="text"
            name="quote"
            id="quote"
            placeholder="Quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          ></textarea>
          <label
            className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
            htmlFor="desc"
          >
            Quote
          </label>
        </div>
        <div className="relative flex w-full items-center rounded-md border border-black/10 p-1">
          <textarea
            onKeyUp={handleInput}
            className="min-h-[138px] w-full border-none text-sm ring-transparent focus:ring-transparent"
            type="text"
            name="learning Outcomes"
            id="learningOutcomes"
            placeholder="Learning Outcomes"
            value={learningOutcomes}
            onChange={(e) => setLearningOutcomes(e.target.value)}
          ></textarea>
          <label
            className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
            htmlFor="learningOutcomes"
          >
            Learning Outcomes
          </label>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-center text-sm font-medium text-dark">
            Topics Covered
          </span>
          {addTopic && (
            <div className="relative flex h-[54px] w-[65%] items-center justify-between self-center rounded-md border border-black/10 pl-4">
              <input
                className="w-full border-none text-sm outline-none focus:border-light-border focus:outline-none focus:ring-white active:border-light-gray"
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
              <button onClick={() => setAddTopic(false)}>{closeIcon}</button>
            </div>
          )}
          <button
            onClick={handleAddTopic}
            className="flex max-h-[51px] w-[199px] items-center justify-center gap-1 self-center rounded-md border border-dashed border-text-gray/50 py-3 text-sm"
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
        <button
          className="h-[60px] min-w-[305px] rounded-md bg-primary text-white"
          onClick={() => handleSaveBrick()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

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
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.5V6.5"
      stroke="#121212"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const closeIcon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9043 24.9189L24.7424 15.0808"
      stroke="#121212"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.7424 24.9192L14.9043 15.0811"
      stroke="#121212"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const successIcon = (
  <svg
    width="82"
    height="82"
    viewBox="0 0 82 82"
    fill="none"
    className="h-[100px] w-[100px] md:h-[156px] md:w-[156px]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M41 0.375C30.227 0.375 19.891 4.6562 12.273 12.273C4.6558 19.8902 0.375 30.226 0.375 41C0.375 51.774 4.6562 62.109 12.273 69.727C19.8902 77.3442 30.226 81.625 41 81.625C51.774 81.625 62.109 77.3438 69.727 69.727C77.3442 62.1098 81.625 51.774 81.625 41C81.6133 30.23 77.332 19.902 69.715 12.285C62.0978 4.6678 51.77 0.387 41 0.375ZM59.875 32.668L39.043 53.5C37.8203 54.7188 35.8438 54.7188 34.625 53.5L22.125 41C21.4141 39.7461 21.6484 38.1719 22.6953 37.1836C23.7461 36.1953 25.332 36.0508 26.543 36.832L36.832 47L55.457 28.5C56.6679 27.7149 58.2539 27.8594 59.3047 28.8477C60.3516 29.836 60.5859 31.4141 59.875 32.668Z"
      fill="green"
    />
  </svg>
);

const alert = (
  <svg
    viewBox="0 0 177 178"
    fill="none"
    className="h-[100px] w-[100px] md:h-[156px] md:w-[156px]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M166.38 120.565L109.814 26.7549C105.165 19.4831 97.1304 15.083 88.4999 15.083C79.8694 15.083 71.8345 19.4831 67.1861 26.7549L10.6199 120.565C6.55291 127.344 6.41234 135.779 10.2511 142.69C14.6907 150.472 22.9747 155.262 31.9336 155.227H145.066C153.964 155.322 162.234 150.653 166.749 142.985C170.702 135.998 170.561 127.418 166.38 120.565ZM88.4999 125.727C84.4268 125.727 81.1249 122.425 81.1249 118.352C81.1249 114.279 84.4268 110.977 88.4999 110.977C92.573 110.977 95.8749 114.279 95.8749 118.352C95.8749 122.425 92.573 125.727 88.4999 125.727ZM88.4999 103.602C92.573 103.602 95.8749 100.3 95.8749 96.2274V66.7274C95.8749 62.6543 92.573 59.3524 88.4999 59.3524C84.4268 59.3524 81.1249 62.6543 81.1249 66.7274V96.2274C81.1249 100.3 84.4268 103.602 88.4999 103.602Z"
      fill="#FF5630"
    />
  </svg>
);

export default AddBrickForm;
