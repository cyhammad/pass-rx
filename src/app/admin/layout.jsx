import React from "react";
import { Poppins } from "next/font/google";
import StoreProvider from "../StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Admin Dashboard | PASS RX",
  description: "Admin Panel of Pass RX",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
