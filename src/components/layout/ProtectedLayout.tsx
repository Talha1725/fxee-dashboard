"use client";
import React from "react";
import ProtectedContainer from "@/components/features/protected/ProtectedContainer";
import Sidebar from "@/components/features/protected/sidebar/Sidebar";
import shade from "@/public/images/shade.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const home = pathname === "/home";
  return (
    <div className="flex items-start p-2.5 w-full min-h-screen rounded-[10px] bg-center bg-cover bg-no-repeat bg-[#ecf3f8] dark:bg-background overflow-hidden">
      {home && (
        <div
          style={{
            transform: "scaleX(-1)",
          }}
          className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-50 dark:opacity-10 opacity-5"
        >
          <Image src={shade} alt="shade" className="w-full h-full scale-125" />
        </div>
      )}

      <div className="xl:relative xl:left-0 absolute left-[-100%]">
        <Sidebar />
      </div>
      <ProtectedContainer>{children}</ProtectedContainer>
    </div>
  );
}
