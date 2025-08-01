export default function LandingHIWContentStepContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex lg:flex-row flex-col items-center self-stretch lg:h-[364px] overflow-hidden shrink-0 ">
      {children}
    </div>
  );
}
