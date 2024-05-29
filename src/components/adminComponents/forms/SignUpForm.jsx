"use client";

import { signUp } from "@/app/lib/actions/authActions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, dispatch] = useFormState(signUp, undefined);
  return (
    <form action={dispatch} className="flex flex-col gap-4 py-5">
      <div className="flex gap-x-4">
        <input
          className="h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm md:h-[54px]"
          type="text"
          placeholder="First name"
          name="firstname"
          id="firstname"
        />
        <input
          className="h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm md:h-[54px]"
          type="text"
          placeholder="Last name"
          name="lastname"
          id="lastname"
        />
      </div>
      <input
        className="h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm md:h-[54px]"
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="relative">
        <input
          className="h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm md:h-[54px]"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
          name="password"
        />
        <div
          className={`absolute inset-y-0 right-1 top-1 flex h-10 w-10 items-center justify-center md:right-2 md:top-2 ${!showPassword ? "bg-[#919EAB14]" : "bg-[#919EAB33]"} rounded-full`}
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
      <CreateAccountButton />
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && errorMessage === "Success" ? (
          redirect("/auth/sign-up/verify-email?email=" + email)
        ) : (
          <p className="text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
      <span className="text-center text-xs leading-[22.4px] text-text-gray md:text-sm">
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
    </form>
  );
};

function CreateAccountButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="h-[50px] rounded-md bg-primary py-3 text-white md:h-[60px]"
      aria-disabled={pending}
    >
      {pending ? "Loading..." : "Create Account"}
    </button>
  );
}

export default SignUpForm;
