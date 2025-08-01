import { IconHugeArrowLeft, IconHugeArrowRight } from "@/components/ui/icon";

export const LandingPFSPrevButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      className="group md:hidden flex items-center justify-center gap-2.5 text-white cursor-pointer transition-all duration-300"
      {...restProps}
    >
      <IconHugeArrowLeft
        width={24}
        height={24}
        className="stroke-white group-hover:translate-x-[-4px] transition-all duration-300"
      />
      {children}
    </button>
  );
};

export const LandingPFSNextButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      className="group md:hidden flex items-center justify-center gap-2.5 text-white cursor-pointer transition-all duration-300"
      {...restProps}
    >
      <IconHugeArrowRight
        width={24}
        height={24}
        className="stroke-white group-hover:translate-x-[4px] transition-all duration-300"
      />
      {children}
    </button>
  );
};
