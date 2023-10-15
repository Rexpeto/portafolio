"use client";

import { Sidebar } from "@/components/shared";
import { GetIcon } from "@/components/ui";
import { useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />

      <button
        className="lg:hidden p-4 m-4 border border-gray-700/40 rounded-md"
        onClick={() => setShowMenu(true)}
      >
        <GetIcon icon="RiMenuLine" className="text-xl" />
      </button>

      <main className="lg:pl-[16vw] h-full container px-4 lg:mx-auto py-5 lg:py-8">
        {children}
      </main>
    </>
  );
}
