"use client";

import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { FileListContext } from "@/context/store";
import { useConvex } from "convex/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [fileList_, setFileList_] = useState();

  return (
    <html lang="en">
      <FileListContext.Provider value={{ fileList_, setFileList_ }}>
        <ConvexClientProvider>
          <body
            className={cn(
              "min-h-screen antialiased grainy",
              geistSans.variable,
              geistMono.variable,
            )}
          >
            <Navbar />
            <Sidebar />
            <Toaster />
            {children}
          </body>
        </ConvexClientProvider>
      </FileListContext.Provider>
    </html>
  );
}