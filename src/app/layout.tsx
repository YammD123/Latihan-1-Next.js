"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NAvbar from "./Navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(0);
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathname) && <NAvbar />}
        {/* <div> layout {state}</div> */}
        {/* <button onClick={() => setState(state + 1)}>Click</button> */}
        {children}
      </body>
    </html>
  );
}
