"use client";

import React from "react";
import Link from "next/link";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingFooterLinks from "@/components/features/landing/landingFooter/LandingFooterLinks";
import {
  IconLogo1,
  IconTGLink,
  IconXLink,
} from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { QUICK_LINKS, LEGAL_LINKS, CONTACT_INFO } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingFooter() {
  const router = useRouter();
  return (
    <div className="relative">
      <LandingMax1440Container className="pt-25 pb-10 gap-10">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-0 justify-between items-start self-stretch">
          <div className="flex flex-col items-start gap-10 lg:gap-[70px]">
            <Link href="/">
              <IconLogo1 width={150} height={38} className="shrink-0" />
            </Link>
            <div className="flex flex-col items-start gap-5">
              <p className="text-white/90 text-[26px] sm:text-[34px] font-space-grotesk font-[700] tracking-[-1.02px]">
                Trade Smarter with FXEE
              </p>
              <Button
              variant={"white"}
              className="font-satoshi-medium"
              onClick={() => router.push('/signup')}
              >
                Join FXEE Today
              </Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between items-start gap-10 sm:gap-20 md:gap-10 px-0 lg:px-12.5 shrink-0">
            <LandingFooterLinks title="Quick Links" items={QUICK_LINKS} />
            <LandingFooterLinks title="Legal Links" items={LEGAL_LINKS} />
            <div className="flex flex-col items-start gap-12.5 shrink-0">
              <LandingFooterLinks title="Contact Info" items={CONTACT_INFO} />
              <div className="flex flex-col items-start gap-2.5">
                <p className="text-white/90 text-center text-[22px] font-space-grotesk font-[700] tracking-[-0.66px]">
                  Social Links
                </p>
                <div className="flex items-start gap-1.5">
                  <Link href="/">
                    <IconTGLink width={24} height={24} />
                  </Link>
                  <Link href="/">
                    <IconXLink width={24} height={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="h-[1px] bg-white/10 self-stretch" />
        <p className="text-white/60 text-[12px] sm:text-[16px] font-regular tracking-[-0.32px]">
          Trading cryptocurrencies involves significant risks, and you should
          carefully consider your investment objectives and risk tolerance
          before trading. The cryptocurrency market is highly volatile and can
          be subject to sudden price fluctuations. We do not provide financial
          advice, and you are solely responsible for your trading decisions. It
          is important to conduct your own research and understand the risks
          involved before trading cryptocurrencies on our platform. We are not
          responsible for any losses incurred as a result of trading
          cryptocurrencies on our platform. By using our platform, you
          acknowledge and accept the risks associated with trading
          cryptocurrencies. Please read our terms of use and privacy policy
          carefully before using our platform. If you have any questions, please
          contact our customer support team.
        </p>
      </LandingMax1440Container>
    </div>
  );
}
