export default function SignPageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start flex-[1_0_0] self-stretch shrink-0 py-2 pl-0 overflow-y-auto max-h-screen scrollbar-hide">
      <div className="relative flex flex-col justify-between items-center flex-[1_0_0] self-stretch">
        {children}
      </div>
    </div>
  );
}
