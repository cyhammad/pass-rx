"use client";
import React from "react";
import UserTable from "./_components/tables/UserTable";

export default function page() {
  return (
    <div className="flex flex-col pr-4 sm:px-5  gap-8 md:px-0 md:pl-8">
      <h1 className="mt-8 text-[1.125rem]  font-medium sm:text-2xl">
        Users (15.2K)
      </h1>
      <UserTable />
    </div>
  );
}
