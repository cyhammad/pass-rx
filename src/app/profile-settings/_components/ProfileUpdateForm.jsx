"use client";

import { Field, Form, Formik } from "formik";

const ProfileUpdateForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div className="flex">
          <div className="flex w-2/3 flex-col gap-y-6 px-4 py-5">
            <div className="flex flex-col gap-y-3">
              <label htmlFor="username" className="text-sm font-medium">
                Name
              </label>
              <Field
                className="h-[54px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
                id="username"
                name="username"
                placeholder="Jane"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Field
                className="h-[54px] w-full rounded-md border border-[#919EAB33] px-4 py-2 text-sm"
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-3 px-2 py-5">
            <span className="text-sm font-medium">Profile Picture</span>
            <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full bg-darkGray">
              <span className="text-[78px] text-white">JS</span>
              <div className="absolute -bottom-2 flex w-full justify-center">
                <div className="rounded-md bg-dark px-2 py-1.5 text-sm text-white">
                  Upload
                </div>
              </div>
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

export default ProfileUpdateForm;
