"use client";

import React from "react";
import SupportCard from "./SupportCard";
import {
  IconChat,
  IconWhatsApp,
  IconTelegram,
  IconMail,
  IconPhone,
} from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Text16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function SupportCards() {
  const { theme } = useTheme();
  return (
    <div className="flex items-start gap-5 self-stretch flex-wrap">
      <SupportCard
        title="Instant Messaging"
        description="Reach us quickly via Telegram or WhatsApp."
        items={[
          {
            icon: <IconChat width={20} height={20} fill={theme === "dark" ? "white" : "black"} />,
            title: "+1 (800) 123-4567",
          },
          {
            icon: (
              <div className="bg-green border-[4px] border-black dark:border-white w-4 h-4 rounded-full mx-0.5"></div>
            ),
            title: "Mon–Fri: 9AM–5PM (GMT)",
          },
        ]}
      >
        <Button variant="fancy" className="flex-[1_0_0]">
          <IconTelegram width={20} height={20} />
          <Text16 className="!text-white !font-semibold">Telegram</Text16>
        </Button>
        <Button variant="green" className="flex-[1_0_0] gap-2">
          <IconWhatsApp width={20} height={20} />
          <Text16 className="!text-white !font-semibold">WhatsApp</Text16>
        </Button>
      </SupportCard>
      <SupportCard
        title="Email Us"
        description="Drop us an email and we'll respond shortly."
        items={[
          {
            icon: <IconMail width={20} height={20} fill={theme === "dark" ? "white" : "black"} />,
            title: "support@fxee.ai",
          },
          {
            icon: (
              <div className="bg-green border-[4px] border-black dark:border-white w-4 h-4 rounded-full mx-0.5"></div>
            ),
            title: "Mon–Fri: 9AM–9PM (GMT)",
          },
        ]}
      >
        <Button variant={theme === "dark" ? "white" : "black"} className="flex-[1_0_0]">
          <IconMail width={20} height={20} fill={theme === "dark" ? "black" : "white"} />
          <Text16 className="!font-semibold dark:!text-black !text-white">Email Now</Text16>
        </Button>
      </SupportCard>
      <SupportCard
        title="Call Us"
        description="Speak directly with our support team."
        items={[
          {
            icon: <IconPhone width={20} height={20} fill={theme === "dark" ? "white" : "black"} />,
            title: "+1 (800) 123-4567",
          },
          {
            icon: (
              <div className="bg-green border-[4px] border-black dark:border-white w-4 h-4 rounded-full mx-0.5"></div>
            ),
            title: "Mon–Fri: 9AM–5PM (GMT)",
          },
        ]}
      >
        <Button variant={theme === "dark" ? "white" : "black"} className="flex-[1_0_0]">
          <IconPhone width={20} height={20} fill={theme === "dark" ? "black" : "white"} />
          <Text16 className="!font-semibold dark:!text-black !text-white">Call Now</Text16>
        </Button>
      </SupportCard>
    </div>
  );
}
