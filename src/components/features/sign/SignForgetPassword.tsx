import Link from "next/link";
import { Description14 } from "@/components/ui/typography";

export default function SignForgetPassword() {
  return (
    <div className="flex items-center gap-1 self-stretch">
      <Link href="/forgot-password">
        <Description14 className="text-sm leading-5 tracking-[-0.084px] underline">
          Forgot password?
        </Description14>
      </Link>
    </div>
  );
}
