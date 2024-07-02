"use client";

import { searchIcon } from "@/svgs/topbarSvgs";

const FlashFactSearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div className="items-center justify-center rounded-lg border border-border-color bg-white px-4 py-1 shadow-[0px_2px_12px_0px_#C9C9C938] md:flex">
      <button>{searchIcon}</button>
      <input
        type="search"
        name="search"
        autoComplete="off"
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search flash card"
        className="text-sm  focus:ring-transparent md:w-[180px] lg:w-[280px]"
      />
    </div>
  );
};

export default FlashFactSearchBar;
