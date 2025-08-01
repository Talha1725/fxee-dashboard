import React from "react";

export default function LandingATCContentVRAItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-2 self-stretch py-1">
      <p className="text-white/80 text-[12px] sm:text-[14px] font-regular font-normal liga tracking-[-0.28px]">
        {label}
      </p>
      {children}
    </div>
  );
}
