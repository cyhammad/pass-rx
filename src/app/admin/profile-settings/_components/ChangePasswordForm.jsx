"use client";

import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";

const ChangePasswordForm = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  return (
    <Formik
      initialValues={{
        oldpassword: "",
        email: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div className="flex flex-col gap-y-6 px-4 py-5">
          <div className="flex flex-col gap-y-3">
            <label htmlFor="oldpassword" className="text-sm font-medium">
              Old Password
            </label>
            <div className="relative">
              <Field
                className="h-[54px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
                id="oldpassword"
                name="oldpassword"
                type={showOldPassword ? "text" : "password"}
              />
              <button
                className={`absolute inset-y-0 right-2 top-2 flex h-10 w-10 items-center justify-center ${!showOldPassword ? "bg-[#919EAB14]" : "bg-[#919EAB33]"} rounded-full`}
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                <Image
                  src="/password.svg"
                  alt="Password Icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <label className="text-sm font-medium" htmlFor="email">
              New Password
            </label>
            <div className="relative">
              <Field
                className="h-[54px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
                id="newpassword"
                name="newpassword"
                type={showNewPassword ? "text" : "password"}
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
          </div>
          <div className="flex flex-col gap-y-3">
            <label className="text-sm font-medium" htmlFor="email">
              Confirm New Password
            </label>
            <div className="relative">
              <Field
                className="h-[54px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
                id="confirmnewpassword"
                name="confirmnewpassword"
                type={showConfirmNewPassword ? "text" : "password"}
              />
              <button
                className={`absolute inset-y-0 right-2 top-2 flex h-10 w-10 items-center justify-center ${!showConfirmNewPassword ? "bg-[#919EAB14]" : "bg-[#919EAB33]"} rounded-full`}
                onClick={() =>
                  setShowConfirmNewPassword(!showConfirmNewPassword)
                }
              >
                <Image
                  src="/password.svg"
                  alt="Password Icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 py-10">
          <button
            className="h-[60px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
            type="reset"
          >
            Discard Changes
          </button>
          <button
            className="h-[60px] w-full rounded-md bg-primary py-3 text-white"
            type="submit"
          >
            Update
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ChangePasswordForm;
