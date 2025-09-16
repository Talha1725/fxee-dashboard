"use client";
import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingYTSHead from "@/components/features/landing/landingYTS/LandingYTSHead";
import LandingYTSContent from "@/components/features/landing/landingYTS/LandingYTSContent";
import { EllipsLight } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLocalization } from "@/components/localization-provider";

export default function LandingYTS() {
  const router = useRouter();
  const { t } = useLocalization();
  return (
    <div className="relative">
        <EllipsLight className="absolute sm:top-0 top-56 -right-[92%] sm:-right-[20%] z-50" opacity="0.2" />
      <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px] relative">
        <LandingYTSHead />
        <LandingYTSContent />
        <Button onClick={() => router.push('/home')} variant={"white"} className="font-satoshi-medium">{t("see_ai_action")}</Button>
      </LandingMax1440Container>
    </div>
  );
}
