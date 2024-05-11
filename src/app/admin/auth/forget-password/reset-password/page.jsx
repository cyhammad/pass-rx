"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const OtpPage = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  return (
    <div className="flex w-full max-w-[400px] flex-col items-center justify-center px-5 py-10">
      <Image
        src="/forget-password/envelope-icon.svg"
        width={96}
        height={96}
        alt="locks icon"
      />
      <span className="mt-5 text-[28px] leading-[44.8px]">
        Reset Your Password
      </span>
      <div className="relative mt-10 w-full">
        <input
          className="h-[54px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
          type={showNewPassword ? "text" : "password"}
          placeholder="New Password"
        />
        <button
          className={`absolute inset-y-0 right-2 top-2 flex h-10 w-10 items-center justify-center ${!showNewPassword ? "bg-[#919EAB14]" : "bg-[#919EAB33]"} rounded-full`}
          onClick={() => setShowNewPassword(!showNewPassword)}
        >
          <Image
            src="/password.svg"
            alt="Password Icon"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="relative mt-5 w-full">
        <input
          className="h-[54px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
          type={showConfirmNewPassword ? "text" : "password"}
          placeholder="Confirm New Password"
        />
        <button
          className={`absolute inset-y-0 right-2 top-2 flex h-10 w-10 items-center justify-center ${!showConfirmNewPassword ? "bg-[#919EAB14]" : "bg-[#919EAB33]"} rounded-full`}
          onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
        >
          <Image
            src="/password.svg"
            alt="Password Icon"
            width={24}
            height={24}
          />
        </button>
      </div>
      <Link
        href="/auth/sign-in"
        className="mt-6 h-[50px] w-full cursor-pointer rounded-md bg-primary py-3 text-center text-white"
      >
        Finish and Login
      </Link>
    </div>
  );
};

export default OtpPage;
