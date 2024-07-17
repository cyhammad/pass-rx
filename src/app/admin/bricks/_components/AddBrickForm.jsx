"use client";

import { useRef, useState } from "react";
import { cross } from "@/svgs/commonSvgs";
import { addBrick } from "@/app/lib/actions/brickActions";
import { AnimatePresence, motion } from "framer-motion";
import { revalidateData } from "@/app/utils/revalidate-data";
import InputField from "@/components/adminComponents/inputs/InputField";
import CustomTextarea from "@/components/adminComponents/inputs/CustomTextarea";
import Image from "next/image";

const AddBrickForm = ({ token }) => {
  const imageRef = useRef(null);
  const [title, setTitle] = useState("");
  const [quote, setQuote] = useState("");
  const [learningOutcomes, setLearningOutcomes] = useState("");
  const newTopicRef = useRef(null);
  const [newTopicInput, setNewTopicInput] = useState("");
  const [topics, setTopics] = useState([]);
  const [addTopic, setAddTopic] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [image, setImage] = useState(null);

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
    const formData = new FormData();
    formData.append("title", title);
    formData.append("quote", quote);
    formData.append("learningOutcomes", learningOutcomes);
    formData.append("image", image, "banner.jpg");
    formData.append("disciplines", topics);
    const res = await addBrick(token, formData);
    console.log("RES", res);
    const resObj = JSON.parse(res);
    if (resObj.message == "Brick created successfully") {
      setSuccess(res.message);
      setTimeout(() => {
        revalidateData(`admin/bricks`);
        setTitle("");
        setQuote("");
        setLearningOutcomes("");
        setTopics([]);
      }, 2000);
    } else {
      setError(res.message);
    }
  };

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    console.log("FILE", file);
    if (file) {
      setImage(file);
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
                  className="hover:bg-gray-400 mr-2 w-1/2 rounded-lg border  border-black/10 py-2 font-medium  md:py-4"
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
                  className="hover:bg-gray-400 mr-2 w-1/2 rounded-lg border  border-black/10 py-2 font-medium  md:py-4"
                  onClick={() => setSuccess("")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex w-full flex-col gap-y-5 rounded-xl bg-white px-6 py-7 shadow-[0px_4px_24px_0px_#0000000F]">
        <InputField
          title={"Brick Collection Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          id="title"
          name="title"
        />
        <CustomTextarea
          title={"Quote"}
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          titleClassName={"bg-white"}
          placeholder={"Quote"}
          height={"190px"}
        />
        <CustomTextarea
          onKeyUp={handleInput}
          title={"Learning Outcomes"}
          className="min-h-[138px] w-full  text-sm ring-transparent focus:ring-transparent"
          name="learning Outcomes"
          id="learningOutcomes"
          placeholder="Learning Outcomes"
          value={learningOutcomes}
          onChange={(e) => setLearningOutcomes(e.target.value)}
          titleClassName={"bg-white"}
          height={"200px"}
        />
        <div className="flex flex-col gap-5">
          <span className="text-center text-sm font-medium text-dark">
            Topics Covered
          </span>
          {addTopic && (
            <div className="flex w-full items-center justify-center">
              <InputField
                title={"Topic Name"}
                value={newTopicInput}
                onChange={(e) => setNewTopicInput(e.target.value)}
                placeholder="Topic Name"
                id="topic"
                name="topic"
                onKeyDown={handleKeyDown}
                titleClassName={"bg-white"}
                inputClassName="max-w-[350px]"
                autoComplete="off"
                ref={newTopicRef}
                closeIcon={true}
                handleClose={() => setAddTopic(false)}
                containerClassName="max-w-[350px] w-full"
              />
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
        <input
          className="hidden"
          type="file"
          name="image"
          id="image"
          ref={imageRef}
          accept="image/*"
          onChange={(e) => handleImageInput(e)}
        />
        {image ? (
          <button
            onClick={() => imageRef.current.click()}
            className="group relative flex items-center justify-center"
          >
            <span className="absolute inset-0 z-20 hidden items-center justify-center bg-black/50 text-sm font-medium text-white group-hover:flex">
              Change Image
            </span>
            <Image
              src={URL.createObjectURL(image)}
              alt="image"
              width={250}
              height={250}
              className="w-full rounded-md"
            />
          </button>
        ) : (
          <button
            onClick={() => imageRef.current.click()}
            className={`mb-1.5 flex min-h-[250px] w-full cursor-pointer items-center justify-center gap-2 rounded border border-dashed border-black/20 text-black/20 transition-all duration-200 ease-in-out hover:border-solid hover:border-primary hover:text-primary`}
          >
            {imageIcon} <span className="">Add Image</span>
          </button>
        )}
      </div>
      <div className="mt-5 flex w-full justify-center lg:justify-end">
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

const imageIcon = (
  <svg
    width="44"
    height="46"
    viewBox="0 0 44 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.42531 45.6167H37.5747C39.1215 45.6149 40.6043 44.9997 41.698 43.906C42.7917 42.8123 43.407 41.3294 43.4087 39.7827V6.21631C43.4069 4.66964 42.7917 3.18683 41.698 2.09321C40.6043 0.999588 39.1214 0.384472 37.5747 0.382812H6.42531C4.87863 0.384472 3.39577 0.999588 2.30206 2.09321C1.20834 3.18683 0.593101 4.66964 0.591309 6.21631V39.7827C0.593082 41.3294 1.2083 42.8123 2.30201 43.906C3.39571 44.9997 4.87858 45.6149 6.42531 45.6167ZM37.5747 43.6167H6.42531C5.48116 43.6138 4.57145 43.2618 3.87119 42.6285C3.17093 41.9953 2.72959 41.1254 2.6321 40.1863L15.5239 28.4106L20.2861 33.1724C20.379 33.2652 20.4892 33.3389 20.6105 33.3892C20.7318 33.4395 20.8619 33.4653 20.9932 33.4653C21.1245 33.4653 21.2545 33.4395 21.3758 33.3892C21.4972 33.3389 21.6074 33.2652 21.7002 33.1724L32.9429 21.9297L41.4087 30.395V39.7827C41.4076 40.7992 41.0033 41.7738 40.2846 42.4926C39.5658 43.2113 38.5912 43.6156 37.5747 43.6167ZM6.42531 2.38281H37.5747C38.5912 2.38387 39.5657 2.78808 40.2844 3.50676C41.0032 4.22543 41.4075 5.19988 41.4087 6.21631V27.567L33.6499 19.8086C33.5571 19.7157 33.4469 19.642 33.3256 19.5918C33.2042 19.5415 33.0742 19.5156 32.9429 19.5156C32.8116 19.5156 32.6815 19.5415 32.5602 19.5918C32.4389 19.642 32.3287 19.7157 32.2359 19.8086L20.9932 31.0513L16.2622 26.3208C16.0803 26.1387 15.8352 26.0338 15.5778 26.0279C15.3205 26.0221 15.0708 26.1158 14.8809 26.2895L2.59133 37.5151V6.21631C2.59252 5.19989 2.99685 4.22544 3.71562 3.50676C4.43439 2.78809 5.40888 2.38388 6.42531 2.38281Z"
      fill="currentColor"
    />
    <path
      d="M17.4365 18.8159C18.3113 18.816 19.1664 18.5566 19.8937 18.0707C20.621 17.5847 21.1879 16.894 21.5227 16.0859C21.8574 15.2778 21.9451 14.3885 21.7744 13.5306C21.6038 12.6726 21.1826 11.8846 20.564 11.2661C19.9455 10.6475 19.1574 10.2263 18.2995 10.0557C17.4416 9.88503 16.5523 9.97264 15.7442 10.3074C14.9361 10.6422 14.2453 11.2091 13.7594 11.9364C13.2735 12.6637 13.0141 13.5188 13.0142 14.3936C13.0155 15.566 13.4819 16.6901 14.3109 17.5191C15.14 18.3482 16.2641 18.8146 17.4365 18.8159ZM17.4365 11.9707C17.9157 11.9707 18.3841 12.1127 18.7825 12.3789C19.1809 12.645 19.4915 13.0233 19.6749 13.466C19.8583 13.9087 19.9063 14.3958 19.8129 14.8657C19.7194 15.3357 19.4888 15.7674 19.15 16.1062C18.8112 16.445 18.3796 16.6758 17.9096 16.7693C17.4397 16.8629 16.9526 16.8149 16.5099 16.6316C16.0672 16.4483 15.6888 16.1378 15.4226 15.7395C15.1563 15.3411 15.0142 14.8727 15.0142 14.3936C15.0149 13.7513 15.2703 13.1355 15.7244 12.6813C16.1785 12.2271 16.7943 11.9716 17.4365 11.9707Z"
      fill="currentColor"
    />
  </svg>
);

export default AddBrickForm;
