import {
  IconOandaLogo,
  IconBinanceLogo,
  IconTradingViewLogo,
  IconLogo4,
  IconOpenAILogo,
  ForexLogo,
  RedditLogo,
} from "@/components/ui/icon";
import LandingMax1440Container from "../LandingMax1440Container";
import LandingEBSHead from "./LandingEBSHead";
import { createFadeIn } from "@/lib/motion-variants";
import * as motion from "motion/react-client";
import RoundedGradientBorder from "@/components/ui/RoundedGradientBorder";

export default function LandingEBS() {
  return (
    <LandingMax1440Container className="gap-12.5 mt-24">
      <LandingEBSHead />
      <div className="lg:w-[70%] w-[100%] sm:w-[90%] mx-auto overflow-x-hidden mt-[-100px]">
        <motion.div
          className="relative flex items-center gap-7 sm:gap-15 sm:h-[420px] h-[350px] mt-3 overflow-visble"
          {...createFadeIn(0.5)}
        >
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] sm:w-[80px] sm:h-[80px] h-[40px] z-20 bg-black"></div>
          <div className="absolute inset-0 mask-landing-pfs-partner z-1"></div>
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[150px] h-[100px] bg-[#0a0a0a] sm:opacity-80 opacity-50 z-2 blur-md"></div>
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-[150px] h-[100px] bg-[#0a0a0a] sm:opacity-60 opacity-50 z-2 blur-md"></div>

          {/* Marquee content */}
          <div className="marquee-content2 flex items-center gap-7 sm:gap-15">
            <IconOandaLogo className="sm:w-[130px] w-[80px] h-[37px] opacity-50 md:opacity-100" />
            <ForexLogo className="sm:w-[130px] w-[80px] h-auto opacity-50 md:opacity-100" />
            <IconBinanceLogo className="sm:w-[130px] w-[80px] h-[26px] opacity-50 md:opacity-100" />
            <RedditLogo className="sm:w-[130px] w-[80px] h-auto opacity-50 md:opacity-100" />
            <IconOandaLogo className="sm:w-[130px] w-[80px] h-[37px] opacity-50 md:opacity-100" />
            <ForexLogo className="sm:w-[130px] w-[80px] h-auto opacity-50 md:opacity-100" />
            <IconBinanceLogo className="sm:w-[130px] w-[80px] h-[26px] opacity-50 md:opacity-100" />
            <RedditLogo className="sm:w-[130px] w-[80px] h-auto opacity-50 md:opacity-100" />
            <IconOandaLogo className="sm:w-[130px] w-[80px] h-[37px] opacity-50 md:opacity-100" />
            <ForexLogo className="sm:w-[130px] w-[80px] h-auto opacity-50 md:opacity-100" />
            <IconBinanceLogo className="sm:w-[130px] w-[80px] h-[26px] opacity-50 md:opacity-100" />
            <RedditLogo className="sm:w-[130px] w-[80px] h-auto opacity-50 md:opacity-100" />
            <IconOandaLogo className="sm:w-[130px] w-[80px] h-[37px] opacity-50 md:opacity-100" />
            <ForexLogo className="sm:w-[130px] w-[80px] h-auto opacity-50 md:opacity-100" />
            <IconBinanceLogo className="sm:w-[130px] w-[80px] h-[26px] opacity-50 md:opacity-100" />
            <RedditLogo className="sm:w-[130px] w-[80px] h-auto opacity-50 md:opacity-100" />
          </div>

          {/* Center Logo - Fixed Position */}
          <IconLogo4
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] sm:w-[120px] multi-dropshadow z-30"
            opacity={1}
          />
         
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 gap-y-8 md:gap-y-12 xl:w-[75%] mx-auto">
          <div className="md:col-span-2">
            <div className="flex flex-col gap-3 items-center justify-center">
              <RoundedGradientBorder>
                <div className="px-4 py-2 w-full h-full bg-gradient-to-r from-white/10 via-white-5 to-transparent">
                  Multi-Source Data Fusion
                </div>
              </RoundedGradientBorder>
              <p className="text-center text-white/40 font-satoshi-regular md:text-lg">
                FXEE aggregates and synthesizes real-time and historical market
                data from Oanda,
                <br /> Binance, Forex.com, TradingView, Finance.com, Reddit,
                Twitter, and more—not just one or two feeds.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <RoundedGradientBorder>
                <div className="px-4 py-2 w-full h-full bg-gradient-to-r from-white/10 via-white-5 to-transparent">
                  Actionable Recommendations
                </div>
              </RoundedGradientBorder>
              <p className="text-center text-white/40 font-satoshi-regular md:text-lg">
                Instead of canned advice, FXEE delivers simulated trade ideas
                and risk assessments based on the latest data and true-to-market
                conditions.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <RoundedGradientBorder>
                <div className="px-4 py-2 w-full h-full bg-gradient-to-r from-white/10 via-white-5 to-transparent">
                  Proprietary “Hive Mind” AI{" "}
                </div>
              </RoundedGradientBorder>
              <p className="text-center text-white/40 font-satoshi-regular md:text-lg">
                Our system mimics the expertise of numerous traders, analyzing
                price changes, market sentiment, and news to create a realistic
                trading simulation environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LandingMax1440Container>
  );
}
