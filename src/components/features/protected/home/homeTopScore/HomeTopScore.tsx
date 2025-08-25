import React from "react";

import HomeTopPicks from "@/components/features/protected/home/homeTopScore/HomeTopPicks";
import HomeScore from "@/components/features/protected/home/homeTopScore/HomeScore";

export default function HomeTopScore({ openModal }: { openModal: () => void }) {
  return (
    <div className="flex flex-col-reverse db:flex-row items-start gap-5 self-stretch">
      <HomeTopPicks openModal={openModal} />
      <HomeScore />
    </div>
  );
}
