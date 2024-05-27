import { auth } from "@/auth";
import Sidebar from "@/components/navbars/Sidebar";
import Topbar from "@/components/navbars/Topbar";
import { redirect } from "next/navigation";
import React from "react";

export default async function layout({ children }) {
  const session = await auth();
  if (session.user.role !== "user") {
    return redirect("/admin")
  }
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
