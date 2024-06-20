import { auth } from "@/auth";
import Sidebar from "@/components/navbars/Sidebar";
import Topbar from "@/components/navbars/Topbar";
import { permanentRedirect } from "next/navigation";

export default async function layout({ children }) {
  const session = await auth();
  console.log(session.user);
  // if (session && session.user.role !== "user") {
  //   return permanentRedirect("/admin")
  // }
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
