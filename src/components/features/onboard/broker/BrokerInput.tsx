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
        placeholder="Enter your API key"
        isPassword={true}
        icon={<IconKey height={20} width={20} />}
      />
    </SignInputContainer>
  );
}
