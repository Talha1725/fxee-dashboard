"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";

export default function OnboardBackButton({ step }: { step: string }) {
  const router = useRouter();

  // if (Number(step) === 1) return;

  return (
    <Button
      className={`h-9 bg-[#7474741A] dark:bg-white/10 dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none absolute top-6 left-4`}
      onClick={() =>
        router.push(
          Number(step) > 1 ? `/onboard/${Number(step) - 1}` : "/onboard/1"
        )
      }
    >
      <ChevronLeftIcon className="size-4 dark:text-white/80 text-black/60" />{" "}
      <p className="dark:text-white/80 text-black/60">Back</p>
    </Button>
  );
}
