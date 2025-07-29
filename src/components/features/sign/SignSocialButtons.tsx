import { Button } from "@/components/ui/button";
import { IconApple, IconGoogle, IconLinkedin } from "@/components/ui/icon";

export default function SignSocialButtons() {
  return (
    <div className="flex justify-center items-start gap-3 self-stretch">
      <Button className="flex-[1_0_0] self-stretch">
        <IconApple width={20} height={20} />
      </Button>
      <Button className="flex-[1_0_0] self-stretch">
        <IconGoogle width={20} height={20} />
      </Button>
      <Button className="flex-[1_0_0] self-stretch">
        <IconLinkedin width={20} height={20} />
      </Button>
    </div>
  );
}
