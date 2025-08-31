import React from "react";
import { TutorialCard } from "./TutorialCard";
import { TUTORIAL_DATA } from "@/data/tutorialData";

export const TutorialCards: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-[60px] py-[40px] flex flex-col items-center">
      <div className="flex flex-col gap-[40px] md:gap-[60px] w-full">
        {TUTORIAL_DATA.map((tutorial) => (
          <TutorialCard
            key={tutorial.number}
            {...tutorial}
          />
        ))}
      </div>
    </div>
  );
};

export default TutorialCards;
