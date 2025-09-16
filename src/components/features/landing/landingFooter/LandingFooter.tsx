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
import { useLocalization } from "@/components/localization-provider";

export default function LandingFooter() {
  const router = useRouter();
  const { t } = useLocalization();
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
                {t("trade_smarter")}
              </p>
              <Button
              variant={"white"}
              className="font-satoshi-medium"
              onClick={() => router.push('/signup')}
              >
                {t("join_fxee")}
              </Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between items-start gap-10 sm:gap-20 md:gap-10 px-0 lg:px-12.5 shrink-0">
            <LandingFooterLinks title={t("quick_links")} items={QUICK_LINKS} />
            <LandingFooterLinks title={t("legal_links")} items={LEGAL_LINKS} />
            <div className="flex flex-col items-start gap-12.5 shrink-0">
              <LandingFooterLinks title={t("contact_info")} items={CONTACT_INFO} />
              <div className="flex flex-col items-start gap-2.5">
                <p className="text-white/90 text-center text-[22px] font-space-grotesk font-[700] tracking-[-0.66px]">
                  {t("social_links")}
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
          {t("disclaimer")}
        </p>
      </LandingMax1440Container>
    </div>
  );
}
