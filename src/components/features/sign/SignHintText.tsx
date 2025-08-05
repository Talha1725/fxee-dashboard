import { IconInfoFilled } from "@/components/ui/icon";

interface SignHintTextProps {
  text: string;
}

export default function SignHintText({ text }: SignHintTextProps) {
  return (
    <div className="flex items-start gap-1 self-stretch text-black/60 dark:text-white/60">
      <IconInfoFilled height={16} width={16} />
      <p className="text-xs font-regular leading-normal liga font-normal">
        {text}
      </p>
    </div>
  );
}
