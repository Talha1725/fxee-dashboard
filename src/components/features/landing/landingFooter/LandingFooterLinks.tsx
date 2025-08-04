import Link from "next/link";
import React from "react";

interface ItemProps {
  link: string;
  text: string;
}

export default function LandingFooterLinks({
  title,
  items,
}: {
  title: string;
  items: ItemProps[];
}) {
  return (
    <div className="flex flex-col items-start gap-2.5 shrink-0">
      <p className="text-white/90 text-center text-[20px] sm:text-[22px] font-space-grotesk font-[700] tracking-[-0.66px]">
        {title}
      </p>
      {items.map((item, index) => (
        <div className="flex flex-col items-start gap-1.5" key={index}>
          <Link href={`/${item.link}`}>
            <p className="text-white/70 text-center text-[16px] sm:text-[18px] font-regular font-medium tracking-[-0.36px]">
              {item.text}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
