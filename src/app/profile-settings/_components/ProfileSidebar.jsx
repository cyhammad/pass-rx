"use client";

import { backArrow } from "@/svgs/commonSvgs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const ProfileSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className="flex h-full w-[300px] flex-col">
      <div className="flex items-center gap-x-2">
        <button onClick={() => router.back()}>{backArrow}</button>
        <span className="text-2xl font-semibold tracking-[2%] text-dark">
          My Profile Settings
        </span>
      </div>
      <div className="flex flex-col px-2 py-10">
        <Link
          href="/profile-settings"
          className={`relative flex min-h-[34px] w-[288px] items-center rounded-md px-3.5 py-[7px] text-xs ${pathname === "/profile-settings" ? "profile-nav" : "transition-all duration-200 ease-in-out hover:bg-primary/70 hover:text-white"}`}
        >
          Profile Details
        </Link>
        <Link
          href="/profile-settings/change-password"
          className={`relative flex min-h-[34px] w-[288px] items-center rounded-md px-3.5 py-[7px] text-xs ${pathname === "/profile-settings/change-password" ? "profile-nav" : "transition-all duration-200 ease-in-out hover:bg-primary/70 hover:text-white"}`}
        >
          Change Password
        </Link>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
