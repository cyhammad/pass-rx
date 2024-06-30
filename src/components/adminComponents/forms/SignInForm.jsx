"use client";

import { authenticate } from "@/app/lib/actions/authActions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} className="flex flex-col gap-4 py-5">
      <input
        className="h-[54px] w-full rounded-md px-4 py-2 text-sm ring-transparent focus:ring-transparent"
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        required
      />
      <div className="relative">
        <input
          className="h-[54px] w-full rounded-md px-4 py-2 text-sm ring-transparent focus:ring-transparent"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
          name="password"
          required
          minLength={6}
        />
        <div
          className={`absolute inset-y-0 right-2 top-2 flex h-10 w-10 items-center justify-center ${!showPassword ? "bg-[#919EAB14]" : "bg-[#919EAB33]"} rounded-full`}
          onClick={() => setShowPassword(!showPassword)}
        >
          <Image
            src="/password.svg"
            alt="Password Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <Link
        href="/auth/forget-password"
        className="flex justify-end text-sm leading-[22.4px] text-[#212B36] hover:text-primary"
      >
        Forgot Password?
      </Link>
      <LoginButton />
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </div>
      <div className="flex items-center">
        <div className="w-full border-t border-slate-200"></div>
        <div className="mx-3 text-sm font-medium text-gray">OR</div>
        <div className="w-full border-t border-slate-200"></div>
      </div>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="h-[60px] rounded-md bg-primary py-3 text-white"
      aria-disabled={pending}
    >
      {pending ? "Loading..." : "Login"}
    </button>
  );
}

export default SignInForm;
