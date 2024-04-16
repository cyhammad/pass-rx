"use client";

import { searchIcon } from "@/svgs/topbarSvgs";
import Image from "next/image";

const Topbar = () => {
  return (
    <header className="border-border-color flex h-[83px] w-full items-center border-b">
      <div className="px-5 py-3 sm:px-10 sm:py-5">
        <button className="border-border-color w-32 border-r sm:w-60">
          <Image
            src="/logos/logo.png"
            width={100}
            height={36}
            quality={100}
            alt="logo"
          />
        </button>
      </div>
      <div className="flex w-full items-center justify-end px-8 py-4 sm:justify-between">
        <div className="border-border-color hidden items-center justify-center gap-x-8 rounded-lg border px-4 py-3 shadow-[0px_2px_12px_0px_#C9C9C938] sm:flex">
          <button>{searchIcon}</button>
          <input type="search" name="search" id="search" />
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-dark text-center">
          <span className="leading-6 text-white">JS</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
