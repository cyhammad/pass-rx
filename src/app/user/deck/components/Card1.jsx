import React from "react";

export default function Card1({handelFlip}) {
  return (
    <div onClick={handelFlip} className=" flip-card-front mt-6 flex min-h-[406px] max-w-[683.66px] flex-col justify-between self-center rounded-3xl bg-primary bg-[url('/user/bg.svg')] bg-cover bg-no-repeat px-8 pt-[26px]">
      <span className="self-end">{bookmark}</span>
      <p className="text-justify text-white   sm:text-[27px]">
        List the layers of the anterior abdominal wall lateral to the deep
        inguinal ring, from parietal peritoneum to external oblique aponeurosis.
      </p>
      <p className="self-center pb-[30px] cursor-pointer text-[20px] text-white">
        TAP FOR ANSWER
      </p>
    </div>
  );
}
const bookmark = (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6191 12.5698V37.1967C12.6191 38.818 14.4261 39.7851 15.7752 38.8857L23.6731 33.6205C24.355 33.1659 25.2433 33.1659 25.9252 33.6205L33.8231 38.8857C35.1721 39.7851 36.9791 38.818 36.9791 37.1967V12.5698C36.9791 10.3275 35.1614 8.50977 32.9191 8.50977H16.6791C14.4369 8.50977 12.6191 10.3275 12.6191 12.5698Z"
      stroke="white"
      stroke-width="4.06"
    />
  </svg>
);
