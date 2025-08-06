import { cn } from "@/lib/utils";

export default function NavbarSwitchToggleItem({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-1.5 px-3 py-1.5 rounded-[6px] cursor-pointer select-none transition-all duration-300 shrink-0 sm:flex-auto flex-[1_0_0] font-satoshi-medium",
        isActive ? "dark:bg-white dark:text-[#111] bg-black text-white" : "bg-transparent dark:text-white/80 text-black/60"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
