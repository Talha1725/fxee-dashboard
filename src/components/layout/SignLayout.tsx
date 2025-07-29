import SignHeroImage from "@/components/features/sign/SignHeroImage";

export default function SignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between shrink-0 flex-[1_0_0] self-stretch">
      <SignHeroImage />
      {children}
    </div>
  );
}
