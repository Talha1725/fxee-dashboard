// components/ui/CardBox.tsx
import React, { ReactNode } from "react";

interface ListItem {
  label?: string;       // e.g., "Forex", "Apr 30"
  value: string;        // e.g., "BTC 25%, ETH 10%"
  highlight?: boolean;  // to style headers like "Forex", "Crypto"
}

interface CardBoxProps {
  title?: string;
  children?: ReactNode;     // normal custom content
  listItems?: ListItem[];   // optional list mode
}

export default function CardBox({ title, children, listItems }: CardBoxProps) {
  return (
    <div className="w-[336px] rounded-2xl border border-[#0000001A] p-5 shadow-sm bg-white dark:bg-[#111] dark:border-white/[0.1]">
      {title && (
        <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">
          {title}
        </h2>
      )}

      <div className="space-y-3">
        {/* If listItems provided → render list mode */}
        {listItems
          ? listItems.map((item, idx) => (
              <p
                key={idx}
                className={item.highlight ? "font-medium text-green-600 dark:text-green-400" : "text-black dark:text-white"}
              >
                {item.label ? `${item.label}: ` : ""}
                {item.value}
              </p>
            ))
          : children}
      </div>
    </div>
  );
}
