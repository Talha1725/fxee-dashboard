import { Label } from "@/components/ui/label";

interface SettingsLabelProps {
  label: string;
  required?: boolean;
  className?: string;
}

export default function SettingsLabel({ label, required, className }: SettingsLabelProps) {
  return (
    <Label className={`font-satoshi text-[18px] ${className}`}>
      {label}
      {required && (
        <span className="bg-picton-blue text-transparent bg-clip-text">*</span>
      )}
    </Label>
  );
}
