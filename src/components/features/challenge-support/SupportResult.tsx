import * as motion from "motion/react-client";

import { fadeInDownView } from "@/lib/motion-variants";
import LandingDescription from "../landing/LandingDescription";
import LandingMax1440Container from "../landing/LandingMax1440Container";
import LandingTitle from "../landing/LandingTitle";
import { Button } from "@/components/ui/button";

export default function SupportResult() {
  return (
    <LandingMax1440Container className="py-5 mb-15 gap-12.5 sm:gap-[70px]">
      <motion.div
        className="flex flex-col items-center gap-5"
        {...fadeInDownView}
      >
        <LandingTitle className="text-center tracking-[-3.6px] leading-[120%]">
        Designed for Results        </LandingTitle>
        <LandingDescription className="text-center max-w-[734px]">
        We don’t just guess the market — we calculate it. FXEE’s prop challenge module was engineered to pass real accounts, with real data, in real time.
        </LandingDescription>
      </motion.div>

      <Button variant="white" className="font-satoshi-medium">See the AI in Action</Button>
    </LandingMax1440Container>
  );
}
