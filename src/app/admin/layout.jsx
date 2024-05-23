import Topbar from "@/components/navbars/Topbar";
import Sidebar from "@/components/navbars/Sidebar";
import { auth } from "@/auth";

export const metadata = {
  title: "Admin Dashboard | PASS RX",
  description: "Admin Panel of Pass RX",
};

export default async function RootLayout({ children }) {
  const auth1 = await auth();
  console.log("AUTH", auth1 ? auth1: "NO USER")
  return (
    <>
      <Topbar />
      <div className="flex max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-83px)]">
        <Sidebar />
        <div className="w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
}
