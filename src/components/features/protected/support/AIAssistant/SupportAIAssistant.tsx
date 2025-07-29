import React from "react";

import SupportAIImage from "../SupportAIImage";
import SupportAIAssistantSuggestion from "./SupportAIAssistantSuggestion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Text14, Text16, Title20 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { IconMic, IconSend } from "@/components/ui/icon";

export default function SupportAIAssistant() {
  return (
    <div className="fixed bottom-0 right-0">
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex flex-col justify-center items-center shrink-0 w-15 h-15 cursor-pointer">
            <SupportAIImage />
          </div>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          className="w-120 h-171 flex flex-col justify-center items-center gap-4 py-6 px-5 shrink-0 rounded-[16px] border-green-gradient bg-landing-card-green-gradient border-none"
        >
          <div className="flex flex-col gap-4 justify-between items-center flex-[1_0_0] self-stretch">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <Title20 className="self-stretch text-center">
                Chat with FXEE AI Assistant
              </Title20>
              <div className="flex items-start gap-2.5 self-stretch">
                <SupportAIImage className="w-9 h-9" />
                <div className="flex flex-col items-start gap-2.5 flex-[1_0_0]">
                  <div className="h-9 flex justify-between items-center self-stretch">
                    <Text16 className="font-[700]">AI Assistant</Text16>
                    <Text14 className="text-white/80">14:03, 15 Nov</Text14>
                  </div>
                  <Text14>Hello Sophia, How can I help you today?</Text14>
                  <SupportAIAssistantSuggestion />
                </div>
              </div>
            </div>
            <Input
              placeholder="Type Message"
              className="gap-3 p-4 border-none text-white"
              backIcon={
                <div className="flex items-center gap-3">
                  <IconMic width={20} height={20} opacity={0.6} />
                  <IconSend width={20} height={20} />
                </div>
              }
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
