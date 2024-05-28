"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card2 from "./components/Card2";
import Card1 from "./components/Card1";
import Finished from "@/components/userComponents/modals/Finished";
function Box({ bg, text, count }) {
  return (
    <div
      className={`${bg} ${text}  flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[10.5px] hover:border  hover:border-primary `}
    >
      {count}
    </div>
  );
}
export default function page() {
  const [IsFliped, setIsFliped] = useState(false);
  const [IsAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleFinish = () => {
    setIsOpen(!isOpen);
  };
  function handelFlip() {
    if (!IsAnimating) {
      setIsFliped(!IsFliped);
      setIsAnimating(true);
    }
  }
  return (
    <div className=" mt-9 flex flex-col justify-between pr-3 sm:pl-3 md:pl-[34px] md:pr-[54px]">
      <AnimatePresence>
        {isOpen && (
         <Finished text1={"Deck Finished"} toggleFinish={toggleFinish} text2={"You’ve successfully finished the deck"}/>
        )}
      </AnimatePresence>
      <div className="flex  w-full flex-row  flex-wrap justify-center gap-3 self-center xl:justify-between xl:gap-0">
        <Box bg={"bg-primary"} text={"text-white"} count={"1"} />
        <Box bg={"border border-text-gray-2"} text={"text-black"} count={"2"} />
        <Box bg={"bg-primary"} text={"text-white"} count={"3"} />
        <Box bg={"border border-text-gray-2"} text={"text-black"} count={"4"} />
        <Box bg={"border border-text-gray-2"} text={"text-black"} count={"5"} />
        <Box bg={"border border-text-gray-2"} text={"text-black"} count={"5"} />
        <Box bg={"border border-text-gray-2"} text={"text-black"} count={"7"} />
        <Box bg={"border border-text-gray-2"} text={"text-black"} count={"8"} />
        <Box bg={"bg-primary"} text={"text-white"} count={"9"} />
        <Box bg={"bg-primary"} text={"text-white"} count={"10"} />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"11"}
        />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"12"}
        />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"13"}
        />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"14"}
        />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"15"}
        />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"16"}
        />
        <Box bg={"bg-primary"} text={"text-white"} count={"17"} />
        <Box bg={"bg-primary"} text={"text-white"} count={"18"} />
        <Box bg={"bg-primary"} text={"text-white"} count={"19"} />
        <Box bg={"bg-primary"} text={"text-white"} count={"20"} />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"21"}
        />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"22"}
        />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"23"}
        />
        <Box
          bg={"border border-text-gray-2"}
          text={"text-black"}
          count={"24"}
        />
      </div>
      <div className="mt-8 flex justify-between">
        <h2 className="text-[37px] font-semibold">Card 5</h2>

        <div className="flex items-center gap-1 ">
          <span
            onClick={handelFlip}
            className="flex size-11 items-center  justify-center rounded-full shadow"
          >
            {rotate}
          </span>
          <span className="flex size-11 items-center justify-center rounded-full bg-primary shadow">
            {save}
          </span>
        </div>
      </div>

      <div className="flip-card relative min-h-[406px] w-full  self-center md:w-[588px] lg:w-[683.66px] ">
        <motion.div
          className="flip-card-inner max-w-[683.66px]"
          initial={false}
          animate={{ rotateY: IsFliped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <Card1 handelFlip={handelFlip} />
          <Card2 />
        </motion.div>
      </div>

      <div className="mt-9  mx-auto flex gap-4">
        <div className="broder cursor-pointer flex  size-[70px] items-center  justify-center  gap-1 self-end rounded-full border border-text-gray-2 text-sm">
          <span>{back}</span>Back
        </div>
        <div onClick={toggleFinish} className="broder flex  cursor-pointer size-[70px] items-center  justify-center  gap-1 self-end rounded-full border border-text-gray-2 text-sm">
          <span>{back}</span>Next
        </div>
      </div>
    </div>
  );
}
const rotate = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.25 11.25L13.7707 13.7707C12.5485 14.9929 10.861 15.75 9 15.75C5.27805 15.75 2.25 12.7219 2.25 9H0C0 13.9626 4.0374 18 9 18C11.4813 18 13.7313 16.9907 15.361 15.361L18 18V11.25H11.25Z"
      fill="#121212"
    />
    <path
      d="M6.75 6.75L4.22933 4.22933C5.45153 3.00713 7.13903 2.25 9 2.25C12.7219 2.25 15.75 5.27805 15.75 9H18C18 4.0374 13.9626 0 9 0C6.5187 0 4.2687 1.00935 2.63903 2.63903L0 0V6.75H6.75Z"
      fill="#121212"
    />
  </svg>
);
const save = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 8C1 5.82088 1.00274 4.29561 1.1858 3.22784C1.31991 2.44544 1.55353 1.89145 1.92609 1.49224C2.29869 1.09307 2.81574 0.842758 3.54598 0.699076C4.54257 0.502935 5.96616 0.5 8 0.5C10.0338 0.5 11.4574 0.502935 12.454 0.699076C13.1843 0.842758 13.7013 1.09307 14.0739 1.49224C14.4465 1.89145 14.6801 2.44544 14.8142 3.22784C14.9973 4.29561 15 5.82088 15 8C15 10.1791 14.9973 11.7044 14.8142 12.7722C14.6801 13.5546 14.4465 14.1085 14.0739 14.5078C13.7013 14.9069 13.1843 15.1572 12.454 15.3009C11.4574 15.4971 10.0338 15.5 8 15.5C5.96616 15.5 4.54257 15.4971 3.54598 15.3009C2.81574 15.1572 2.29869 14.9069 1.92609 14.5078C1.55353 14.1085 1.31991 13.5546 1.1858 12.7722C1.00274 11.7044 1 10.1791 1 8ZM5.50267 1.17292C4.76166 1.19546 4.15407 1.24246 3.65593 1.34049C3.07383 1.45507 2.65352 1.63519 2.35652 1.95341C2.05951 2.27163 1.8914 2.72196 1.78446 3.34564C1.60596 4.387 1.6087 5.87477 1.6087 8C1.6087 10.1252 1.60596 11.613 1.78446 12.6544C1.8914 13.278 2.05951 13.7284 2.35652 14.0466C2.62712 14.3365 3.00006 14.5118 3.50452 14.6274C3.47343 14.0291 3.47283 13.2879 3.47283 12.3696C3.47283 10.9349 3.47537 9.93068 3.59148 9.22768C3.68043 8.68923 3.8388 8.30933 4.08586 8.03461C4.33527 7.75727 4.67976 7.5802 5.16861 7.48038C5.80215 7.35097 6.70705 7.34783 8 7.34783C9.29294 7.34783 10.1978 7.35097 10.8314 7.48038C11.3202 7.5802 11.6647 7.75727 11.9141 8.03461C12.1612 8.30933 12.3196 8.68923 12.4085 9.22768C12.5246 9.93068 12.5272 10.9349 12.5272 12.3696C12.5272 13.2879 12.5266 14.0291 12.4955 14.6274C12.9999 14.5118 13.3729 14.3365 13.6435 14.0466C13.9405 13.7284 14.1086 13.278 14.2155 12.6544C14.394 11.613 14.3913 10.1252 14.3913 8C14.3913 5.87477 14.394 4.387 14.2155 3.34564C14.1086 2.72196 13.9405 2.27163 13.6435 1.95341C13.3465 1.63519 12.9262 1.45507 12.3441 1.34049C11.8459 1.24246 11.2383 1.19546 10.4973 1.17292C10.5103 1.47508 10.5109 1.84246 10.5109 2.28924C10.5109 3.05024 10.5083 3.58283 10.4466 3.95575C10.3939 4.27417 10.296 4.49685 10.1497 4.65932C10.0011 4.82432 9.79782 4.93393 9.5066 4.99332C9.16946 5.06208 8.68802 5.06522 8 5.06522C7.31198 5.06522 6.83054 5.06208 6.4934 4.99332C6.20218 4.93393 5.99887 4.82432 5.85028 4.65932C5.70396 4.49685 5.60608 4.27417 5.55339 3.95575C5.49168 3.58283 5.48913 3.05024 5.48913 2.28924C5.48913 1.84246 5.48966 1.47508 5.50267 1.17292ZM4.1201 14.7329C5.05608 14.8499 6.31281 14.8478 8 14.8478C9.68719 14.8478 10.9439 14.8499 11.8799 14.7329C11.9192 14.1236 11.9185 13.3504 11.9185 12.3696C11.9185 10.9869 11.921 10.0189 11.8091 9.34136C11.746 8.95943 11.651 8.68197 11.4758 8.48713C11.2521 8.23837 10.9098 8.13341 10.4064 8.07121C9.8211 7.9989 9.0406 8 8 8C6.9594 8 6.1789 7.9989 5.59356 8.07121C5.09021 8.13341 4.74789 8.23837 4.5242 8.48713C4.34897 8.68197 4.25397 8.95943 4.1909 9.34136C4.07897 10.0189 4.08152 10.9869 4.08152 12.3696C4.08152 13.3504 4.08076 14.1236 4.1201 14.7329ZM9.88779 1.15976C9.32757 1.15181 8.70091 1.15217 8 1.15217C7.29909 1.15217 6.67243 1.15181 6.11221 1.15976C6.09722 1.45914 6.09783 1.82999 6.09783 2.28924C6.09783 2.88667 6.09695 3.33476 6.13058 3.67083C6.15565 3.92151 6.18795 4.09503 6.28831 4.20647C6.38604 4.31501 6.53921 4.34978 6.75917 4.37689C7.06097 4.41414 7.46343 4.41304 8 4.41304C8.53656 4.41304 8.93903 4.41414 9.24083 4.37689C9.46079 4.34978 9.61396 4.31501 9.71169 4.20647C9.81205 4.09503 9.84435 3.92151 9.86942 3.67083C9.90305 3.33476 9.90217 2.88667 9.90217 2.28924C9.90217 1.82999 9.90278 1.45914 9.88779 1.15976Z"
      fill="white"
      stroke="white"
      strokeWidth="0.6"
    />
  </svg>
);
const back = (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 1L2 6L7 11"
      stroke="#121212"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
