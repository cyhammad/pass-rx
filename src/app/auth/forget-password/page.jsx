"use client";

import { forgetPassword } from "@/app/lib/actions/authActions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSendRequest = async () => {
    const res = await forgetPassword(email);
    const resObj = JSON.parse(res);
    if (resObj.success) {
      router.push(`/auth/forget-password/otp?email=${email}`);
    }
  };

  // on press enter key submit form
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendRequest();
    }
  };

  return (
    <div className="flex max-w-[400px] flex-col items-center justify-center px-5 py-10">
      <Image
        src="/forget-password/locks-icon.png"
        width={96}
        height={96}
        alt="locks icon"
      />
      <span className="mt-5 text-[28px] leading-[44.8px]">
        Forgot your password?
      </span>
      <span className="mt-3 text-center text-sm leading-[22.4px] text-text-gray">
        Please enter the email address associated with your account, and we'll
        email you a link to reset your password.
      </span>
      <input
        className="mt-10 h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={() => handleSendRequest()}
        className="mt-6 h-[50px] w-full cursor-pointer rounded-md bg-primary py-3 text-center text-white"
      >
        Send Request
      </button>
    </div>
  );
};

export default ForgetPasswordPage;
