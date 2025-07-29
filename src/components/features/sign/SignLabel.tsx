import { Label } from "@/components/ui/label";

interface SignLabelProps {
  label: string;
  required?: boolean;
}

export default function SignLabel({ label, required }: SignLabelProps) {
  return (
    <Label>
      {label}
      {required && (
        <span className="bg-picton-blue text-transparent bg-clip-text">*</span>
      )}
    </Label>
  );
}
