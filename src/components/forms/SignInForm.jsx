"use client";

import Image from "next/image";
import { useState } from "react";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-4 py-5">
      <input
        className="h-[54px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
        type="text"
        placeholder="Email"
      />
      <div className="relative">
        <input
          className="h-[54px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <button
          className={`absolute inset-y-0 right-2 top-2 flex h-10 w-10 items-center justify-center ${!showPassword ? "bg-[#919EAB14]" : "bg-[#919EAB33]"} rounded-full`}
          onClick={() => setShowPassword(!showPassword)}
        >
          <Image
            src="/password.svg"
            alt="Password Icon"
            width={24}
            height={24}
          />
        </button>
      </div>
      <h3 className="flex justify-end text-sm text-[#212B36] leading-[22.4px]">Forgot Password?</h3>
      <button className="rounded-md bg-primary py-3 text-white h-[60px]">Login</button>
      <div className="flex items-center ">
        <div className="w-full border-t border-slate-200"></div>
        <div className="mx-3 text-sm font-medium text-gray">OR</div>
        <div className="w-full border-t border-slate-200"></div>
      </div>
    </div>
  );
};

export default SignInForm;
