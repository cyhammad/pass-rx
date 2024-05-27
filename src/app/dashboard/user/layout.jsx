import Sidebar from "@/components/navbars/Sidebar";
import Topbar from "@/components/navbars/Topbar";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <Topbar />
      <div className="flex max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-83px)]">
        <Sidebar user={"jiji"} />
        <div className="w-full overflow-y-auto ">{children}</div>
      </div>
    </>
  );
}
