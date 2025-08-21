"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProtectedContainer from "@/components/features/protected/ProtectedContainer";
import Sidebar from "@/components/features/protected/sidebar/Sidebar";
import shade from "@/public/images/shade.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const home = pathname === "/home";

  // Redirect to signin if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/signin');
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading or redirect if not authenticated
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to signin
  }

  return (
    <div className="flex items-start p-2.5 w-full min-h-screen rounded-[10px] bg-center bg-cover bg-no-repeat bg-[#ecf3f8] dark:bg-background overflow-hidden">
      {home && (
        <div
          style={{
            transform: "scaleX(-1)",
          }}
          className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-50 opacity-10"
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
