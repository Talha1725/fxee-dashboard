import React from "react";

import HomeAI from "@/components/features/protected/home/homeNewsAI/HomeAI";
import HomeNews from "@/components/features/protected/home/homeNewsAI/HomeNews";

export default function HomeNewsAI() {
  return (
    <div className="flex flex-col db:flex-row items-start gap-5 self-stretch">
      <HomeNews />
      <HomeAI            />
    </div>
  );
}
  