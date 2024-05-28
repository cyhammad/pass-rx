"use client";

import { verifyEmailOTP } from "@/app/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import OTPInput from "react-otp-input";

const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  const [error, setError] = useState("");
  console.log("searchParams", searchParams.get("email"));
  const [otp, setOtp] = useState("");
  const handleVerify = async () => {
    const verification = await verifyEmailOTP(email, otp);
    const verificationObj = JSON.parse(verification);
    console.log("verificationObj", verificationObj);
    if (verificationObj.status === 400) {
      setError(verificationObj.message);
    } else {
      setError("");
    }
    if (verificationObj.success) {
      router.push("/auth/sign-in");
    }
  };
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
      <p className="my-3 text-center text-sm leading-[22.4px] text-text-gray">
        We've emailed a 6-digit confirmation code to{" "}
        <span className="text-primary">{email}</span>, please enter the code in
        below box to verify your email.
      </p>
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
      <button
        onClick={() => handleVerify()}
        className="mt-6 h-[50px] w-full cursor-pointer rounded-md bg-primary py-3 text-center text-white"
      >
        Verify
      </button>
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

export default VerifyEmailPage;
