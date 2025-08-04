import { IconArrowLeft, IconArrowRight } from "@/components/ui/icon";

export const ReviewPrevButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      className="group flex items-center justify-center gap-2.5 text-white p-2.5 border border-white/20 hover:bg-white transition-all duration-300"
      {...restProps}
    >
      <IconArrowLeft
        width={24}
        height={24}
        className="stroke-white group-hover:stroke-black"
      />
      {children}
    </button>
  );
};

export const ReviewNextButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      className="group flex items-center justify-center gap-2.5 text-white p-2.5 border border-white/20 hover:bg-white transition-all duration-300"
      {...restProps}
    >
      <IconArrowRight
        width={24}
        height={24}
        className="stroke-white group-hover:stroke-black"
      />
      {children}
    </button>
  );
};
