"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OTPInput from "react-otp-input";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex max-w-[400px] flex-col items-center justify-center px-5 py-10">
      <Image
        src="/forget-password/envelope-icon.svg"
        width={96}
        height={96}
        alt="locks icon"
      />
      <span className="mt-5 text-[28px] leading-[44.8px]">
        Please check your email!
      </span>
      <span className="mt-3 text-center text-sm leading-[22.4px] text-text-gray">
        We've emailed a 6-digit confirmation code to acb@domain, please enter
        the code in below box to verify your email.
      </span>
      <input
        className="mb-5 mt-10 h-[48px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
        type="text"
        placeholder="Email"
      />
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<div className="w-2"></div>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          width: "54px",
          height: "54px",
          borderRadius: "8px",
          border: "1px solid #919EAB33",
          fontSize: "16px",
          textAlign: "center",
        }}
      />
      <Link
        href="/auth/forget-password/reset-password"
        className="mt-6 h-[50px] w-full cursor-pointer rounded-md bg-primary py-3 text-center text-white"
      >
        Verify
      </Link>
      <h3 className="mt-5 text-xs leading-[22.4px] text-text-gray lg:text-sm">
        Don’t have a code?&nbsp;
        <button className="text-primary">Resend code</button>
      </h3>
      <Link
        href="/auth/sign-up"
        className="mt-5 flex items-center gap-1 text-center text-sm hover:text-primary"
      >
        {chevronLeft}
        Return to sign up
      </Link>
    </div>
  );
};

const chevronLeft = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 13.28L6.15331 8.9333C5.63998 8.41997 5.63998 7.57997 6.15331 7.06664L10.5 2.71997"
      stroke="#121212"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OtpPage;
