import React from "react";
import { Poppins } from "next/font/google";
import StoreProvider from "../StoreProvider";
import { auth } from "@/auth";
import LogoutButton from "@/components/adminComponents/buttons/LogoutButton";
import Topbar from "@/components/navbars/Topbar";
import Sidebar from "@/components/navbars/Sidebar";
import { cookies } from "next/headers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Admin Dashboard | PASS RX",
  description: "Admin Panel of Pass RX",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  console.log("session", session);
  const cookieStore = cookies();
  const token = cookieStore.get("authjs.session-token");
  console.log("token", token);
  return (
    <>
      <Topbar />
      <div className="flex max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-83px)]">
        <Sidebar />
        <div className="w-full overflow-y-auto">
          <LogoutButton />
          {children}
        </div>
      </div>
    </>
  );
}
