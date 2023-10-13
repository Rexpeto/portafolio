import { Sidebar } from "@/components/shared";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { cn } from "@/libs";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Gallardo | FullStack Developer",
  description: "Portafolio de Carlos Gallardo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={cn("bg-dark text-gray-300", font.className)}>
        <Sidebar />
        <main className="pl-[16vw]">{children}</main>
      </body>
    </html>
  );
}
