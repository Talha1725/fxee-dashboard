"use client";

import { Button } from "@/components/ui/button";
import { IconApple, IconGoogle, IconLinkedin } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function SignSocialButtons() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center items-start gap-3 self-stretch">
      <Button className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}>
        <IconApple width={20} height={20} />
      </Button>
      <Button className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}>
        <IconGoogle width={20} height={20} />
      </Button>
      <Button className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}>
        <IconLinkedin width={20} height={20} />
      </Button>
    </div>
  );
}
