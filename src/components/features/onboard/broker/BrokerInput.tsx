import React from "react";

import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { Input } from "@/components/ui/input";
import { IconKey } from "@/components/ui/icon";

export default function BrokerInput() {
  return (
    <SignInputContainer>
      <SignLabel label="API Key" required />
      <Input
          className="h-10 mt-1 bg-gray-100 dark:bg-white/5"
          placeholder="Enter your API key"
        isPassword={true}
        icon={<IconKey height={20} width={20} />}
      />
    </SignInputContainer>
  );
}
