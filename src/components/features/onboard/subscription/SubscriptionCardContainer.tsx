import React from "react";

export default function SubscriptionCardContainer({
  children,
  fitfor,
}: {
  children: React.ReactNode;
  fitfor?: string;
}) {
  return (
    <div className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch gap-5">
      <div className="flex flex-col items-start gap-5 self-stretch">
        {children}
      </div>
      <p className="dark:text-white/80 text-black/80 liga font-regular text-[14px] text-center font-normal self-stretch">
        {fitfor}
      </p>
    </div>
  );
}
