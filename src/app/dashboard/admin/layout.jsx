import Topbar from "@/components/navbars/Topbar";
import Sidebar from "@/components/navbars/Sidebar";

export const metadata = {
  title: "Admin Dashboard | PASS RX",
  description: "Admin Panel of Pass RX",
};

export default async function RootLayout({ children }) {
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
