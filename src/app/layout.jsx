import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/navbars/Topbar";
import Sidebar from "@/components/navbars/Sidebar";
import StoreProvider from "./StoreProvider";
import { auth } from "@/auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={poppins.className}>
        {session ? (
          <>
            <Topbar user={session.user} />
            <div className="flex max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-83px)]">
              <Sidebar role={session.user.role} />
              <div className="w-full overflow-y-auto">{children}</div>
            </div>
          </>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
