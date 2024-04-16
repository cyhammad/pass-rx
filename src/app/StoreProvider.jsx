"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../lib/store";
import Topbar from "@/components/navbars/Topbar";
import Sidebar from "@/components/navbars/Sidebar";
import { usePathname } from "next/navigation";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  const pathname = usePathname();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      {pathname.startsWith("/auth") ? (
        children
      ) : (
        <>
          <Topbar />
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </>
      )}
    </Provider>
  );
}
