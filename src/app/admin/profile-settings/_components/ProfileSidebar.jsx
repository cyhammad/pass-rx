"use client";

import { backArrow } from "@/svgs/commonSvgs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const ProfileSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="mr-5 flex h-full flex-col md:w-[300px]">
      <div className="flex items-center gap-x-2">
        <Link href="/admin">{backArrow}</Link>
        <span className="text-2xl font-semibold tracking-[2%] text-dark">
          My Profile Settings
        </span>
      </div>
      <div className="flex flex-col px-2 py-5 md:py-10">
        <Link
          href="/admin/profile-settings"
          className={`relative flex min-h-[34px] w-full items-center rounded-md px-3.5 py-[7px] text-xs md:w-[288px] ${pathname === "/admin/profile-settings" ? "profile-nav" : "transition-all duration-200 ease-in-out hover:bg-primary/70 hover:text-white"}`}
        >
          Profile Details
        </Link>
        <Link
          href="/admin/profile-settings/change-password"
          className={`relative flex min-h-[34px] w-full items-center rounded-md px-3.5 py-[7px] text-xs md:w-[288px] ${pathname === "/admin/profile-settings/change-password" ? "profile-nav" : "transition-all duration-200 ease-in-out hover:bg-primary/70 hover:text-white"}`}
        >
          Change Password
        </Link>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
