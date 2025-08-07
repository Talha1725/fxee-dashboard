import React from "react";

export default function DashboardHeadBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center p-[7px] rounded-[7px] bg-button-grey-gradient border dark:border-none border-black/15">
      {children}
    </div>
  );
}
