"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-4 py-5">
      <div className="flex gap-x-4">
        <input
          className="h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm md:h-[54px]"
          type="text"
          placeholder="First name"
        />
        <input
          className="h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm md:h-[54px]"
          type="text"
          placeholder="Last name"
        />
      </div>
      <input
        className="h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm md:h-[54px]"
        type="text"
        placeholder="Email"
      />
      <div className="relative">
        <input
          className="h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm md:h-[54px]"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <button
          className={`absolute inset-y-0 right-1 md:right-2 top-1 md:top-2 flex h-10 w-10 items-center justify-center ${!showPassword ? "bg-[#919EAB14]" : "bg-[#919EAB33]"} rounded-full`}
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
      <button className="h-[50px] md:h-[60px] rounded-md bg-primary py-3 text-white">
        Create Account
      </button>
      <span className="text-center text-xs md:text-sm leading-[22.4px] text-text-gray">
        By signing up, I agree to{" "}
        <Link className="text-primary underline" href="#">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link className="text-primary underline" href="#">
          Privacy Policy.
        </Link>
      </span>
      <div className="flex items-center ">
        <div className="w-full border-t border-slate-200"></div>
        <div className="mx-3 text-sm font-medium text-gray">OR</div>
        <div className="w-full border-t border-slate-200"></div>
      </div>
    </div>
  );
};

export default SignUpForm;
