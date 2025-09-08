import React from "react";
import { TutorialCard } from "./TutorialCard";
import { TUTORIAL_DATA } from "@/data/tutorialData";

export const TutorialCards: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-[60px] py-[40px] flex flex-col items-center">
      <div className="flex flex-col gap-[40px] md:gap-[60px] w-full">
        {TUTORIAL_DATA.map((tutorial, index) => (
          <React.Fragment key={tutorial.number}>
            <TutorialCard {...tutorial} />
            {index < TUTORIAL_DATA.length - 1 && (
              <div className="tutorial-card-border"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TutorialCards;
