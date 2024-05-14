import React from "react";

export default function Card2() {
  return (
    <div className="flip-card-back mt-6  min-h-[406px] max-w-[683.66px] grid  rounded-3xl bg-[url('/user/bg2.svg')] bg-cover bg-no-repeat pt-[26px]">
    <p className="text-center px-8 sm:text-[27px] self-center">
      List the layers of the anterior abdominal wall lateral to the deep inguinal ring, from parietal peritoneum to external oblique aponeurosis.
    </p>
    <div className="flex w-full self-end sm:text-2xl text-sm  font-semibold text-white">
      <button className="rounded-bl-3xl bg-[#E04852] w-full py-8 px-1  ">
        Don’t Know
      </button>
      <button className="bg-[#DFC717] w-full py-8  px-1 ">
        OK
      </button>
      <button className="rounded-br-3xl bg-[#1D6656] w-full py-8  px-1 ">
        Nailed It
      </button>
    </div>
  </div>
  
  );
}
