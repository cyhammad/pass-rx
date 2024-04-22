import React from "react";

export default function FlashFactsPageLayout({ children }) {
  return (
    <main className="flex w-full bg-light-gray  px-3 py-4 sm:px-6 md:px-7">
      {children}
    </main>
  );
}
