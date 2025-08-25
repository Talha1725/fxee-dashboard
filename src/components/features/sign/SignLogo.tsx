import Link from "next/link";

import { IconLogo1 } from "@/components/ui/icon";

export default function SignLogo() {
  return (
    <div className="flex p-5 md:p-10 justify-between items-center">
      <Link href="/" prefetch={true}>
        <IconLogo1 width={156.608} height={40} />
      </Link>
    </div>
  );
}
