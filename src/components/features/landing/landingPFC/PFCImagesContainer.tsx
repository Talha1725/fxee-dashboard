export default function PFCImagesContainer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col justify-end items-center gap-5 p-4 md:p-5 flex-[1_0_0] h-[260px] min-[400px]:h-[220px] min-[580px]:h-[270px] md:h-[270px] bg-hero-card-gradient border-grey-linear hover-card-green-gradient border-green-gradient-hover relative overflow-hidden group ${className}`}>
        <div className="w-[146px] h-[87px] rounded-full bg-gradient-to-bl from-[#3EDC81] to-[#0276DB] absolute top-2 right-0 blur-[60px] transition-opacity duration-300 group-hover:opacity-0"></div>
      {children}
    </div>
  );
}
