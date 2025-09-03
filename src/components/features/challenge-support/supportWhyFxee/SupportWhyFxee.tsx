import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import SupportWhyFxeeCards from "@/components/features/challenge-support/supportWhyFxee/SupportWhyFxeeCards";
import SupportWhyFxeeHead from "@/components/features/challenge-support/supportWhyFxee/SupportWhyFxeeHead";
import { Button } from "@/components/ui/button";

export default function SupportWhyFxee() {
  return (
    <div className="relative">
      <LandingMax1440Container className="!pb-0 md:!pb-10 pt-28 md:pt-10">
        <div className="flex flex-col items-center lg:gap-[164px] gap-[100px]">
          <div className="flex flex-col items-center lg:gap-[70px] sm:gap-[50px] gap-3">
            <SupportWhyFxeeHead />
            <SupportWhyFxeeCards />
            <Button variant="white" className="font-satoshi-medium mt-10 md:mt-0">
              See the AI in Action
            </Button>
          </div>
        </div>
      </LandingMax1440Container>
    </div>
  );
}
