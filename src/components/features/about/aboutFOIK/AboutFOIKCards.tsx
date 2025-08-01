import React from "react";
import Image from "next/image";

import AboutFOIKCard from "@/components/features/about/aboutFOIK/AboutFOIKCard";

import FOIKImage1 from "@/public/images/foik-1.png";
import FOIKImage2 from "@/public/images/foik-2.png";
import FOIKImage3 from "@/public/images/foik-3.png";
import FOIKImage4 from "@/public/images/landing-hiw-2.png";

export default function AboutFOIKCards() {
  return (
    <div className="flex flex-col items-center gap-5 sm:gap-10 self-stretch">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 sm:gap-10 self-stretch">
        <AboutFOIKCard
          title="Simulation-First Core"
          description="Built entirely around simulation-first architecture."
        >
          <React.Fragment>
            <div className="absolute -bottom-5 right-0 w-[200px] sm:w-[270px] h-[200px] sm:h-[250px]">
              <Image src={FOIKImage1} alt="FOIK Image 1" fill />
            </div>
            <div className="w-[197px] h-[197px] absolute right-0 -bottom-[81px] bg-green blur-[160px] block lg:hidden"></div>
          </React.Fragment>
        </AboutFOIKCard>
        <AboutFOIKCard
          title="Unified Trading Hub"
          description="Combines Forex and Crypto trading in one unified AI dashboard."
        >
          <React.Fragment>
            <div className="absolute bottom-0 right-3 w-[180px] sm:w-[232px] h-[150px] sm:h-[220px] z-1">
              <Image src={FOIKImage2} alt="FOIK Image 2" fill />
            </div>
            <div className="w-[197px] h-[197px] absolute right-0 -bottom-[81px] bg-green blur-[160px]"></div>
          </React.Fragment>
        </AboutFOIKCard>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 sm:gap-10 self-stretch">
        <AboutFOIKCard
          title="AI-Powered Insights"
          description="Powered by real market data, sentiment engines, and deep technical analysis."
        >
          <React.Fragment>
            <div className="absolute bottom-0 right-2 sm:bottom-5 sm:right-5 w-[150px] sm:w-[192px] h-[150px] sm:h-[192px] z-1">
              <Image src={FOIKImage3} alt="FOIK Image 3" fill />
            </div>
            <div className="w-[197px] h-[197px] absolute right-[102px] -bottom-[22px] bg-green blur-[160px]"></div>
          </React.Fragment>
        </AboutFOIKCard>
        <AboutFOIKCard
          title="Unified Trading Hub"
          description="Combines Forex and Crypto trading in one unified AI dashboard."
        >
          <React.Fragment>
            <div className="absolute bottom-0 right-0 w-[200px] sm:w-[260px] h-[160px] sm:h-[212px] z-1">
              <Image src={FOIKImage4} alt="FOIK Image 4" fill />
            </div>
            <div className="w-[197px] h-[197px] absolute right-0 -bottom-[81px] bg-green blur-[160px] block lg:hidden"></div>
          </React.Fragment>
        </AboutFOIKCard>
      </div>
    </div>
  );
}
