import Topbar from "@/components/navbars/Topbar";
import Sidebar from "@/components/navbars/Sidebar";
import { auth } from "@/auth";
import { permanentRedirect } from "next/navigation";

export const metadata = {
  title: "Admin Dashboard | PASS RX",
  description: "Admin Panel of Pass RX",
};

export default async function RootLayout({ children }) {
  // const session = await auth();

  // if (session.user.role !== "admin") {
  //   return permanentRedirect("/user");
  // }
  return (
    <>
      <Topbar />
      <div className="flex max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-83px)]">
        <Sidebar />
        <div className="w-full overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
