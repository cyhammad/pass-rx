import { searchIcon } from "@/svgs/topbarSvgs";
import Image from "next/image";
import ProfileDropdown from "../adminComponents/dropdowns/ProfileDropdown";
import ExampleDropdown from "../adminComponents/dropdowns/ExampleDropdown";
import LogoutButton from "../adminComponents/buttons/LogoutButton";

const Topbar = () => {
  return (
    <header className="flex h-[83px] w-full items-center border-b border-border-color">
      <div className="px-5 py-3 sm:px-10 sm:py-5">
        <button className="w-32 border-r border-border-color sm:w-60">
          <Image
            src="/logos/logo.png"
            width={100}
            height={36}
            quality={100}
            alt="logo"
          />
        </button>
      </div>
      <div className="flex w-full items-center justify-end md:pl-8 md:pr-8 pr-4 py-4 sm:justify-between">
        <div className="hidden items-center justify-center gap-x-2 rounded-lg border border-border-color px-4 py-1 shadow-[0px_2px_12px_0px_#C9C9C938] sm:flex">
          <button>{searchIcon}</button>
          <input
            type="search"
            name="search"
            autoComplete="off"
            id="search"
            placeholder="Search"
            className="md:min-w-[280px]  py-[0.55rem]  focus:border-white  focus:ring-white  border border-white"
          />
        </div>
        <ProfileDropdown logoutButton={<LogoutButton />} />
        {/* <ExampleDropdown /> */}
      </div>
    </header>
  );
};

export default Topbar;
