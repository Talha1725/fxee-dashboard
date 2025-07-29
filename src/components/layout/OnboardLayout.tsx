export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center self-stretch flex-[1_0_0]">
      {children}
    </div>
  );
}
