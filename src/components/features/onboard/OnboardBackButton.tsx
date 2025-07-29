"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@/components/ui/icon";

export default function OnboardBackButton({ step }: { step: string }) {
  const router = useRouter();

  if (Number(step) === 1) return;

  return (
    <Button
      className="absolute top-5 sm:top-8 left-5 sm:left-7 inline-flex gap-0.5 p-1.5"
      onClick={() =>
        router.push(
          Number(step) > 1 ? `/onboard/${Number(step) - 1}` : "/onboard/1"
        )
      }
    >
      <ArrowLeft />
      <span className="flex justify-center items-center px-1">Back</span>
    </Button>
  );
}
