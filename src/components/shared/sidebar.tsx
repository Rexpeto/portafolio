"use client";

import Image from "next/image";
import Link from "next/link";
import { NavSidebar } from ".";
import { cn } from "@/libs";

interface Props {
  showMenu: boolean;
  onClose: () => void;
}

const Sidebar = ({ showMenu, onClose }: Props) => {
  return (
    <>
      <aside className={cn("sidebar", showMenu ? "left-0" : "-left-full")}>
        <Link href="/" className="sidebar__link group">
          <Image src="./logo.svg" alt="Logo" width={32} height={32} />
          <div>
            <h1 className="sidebar__link-title">Carlos Gallardo</h1>
            <h3 className="sidebar__link-subtitle">Full Stack Developer</h3>
          </div>
        </Link>

        <NavSidebar onClose={onClose} />
      </aside>
      <div
        onClick={onClose}
        className={cn(
          "bg-black/5 backdrop-blur-md z-40 left-0 top-0 w-full h-full",
          showMenu ? "fixed overflow-hidden " : "hidden",
        )}
      />
    </>
  );
};

export default Sidebar;
