import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// ===== DISPLAY HEADINGS =====
export const DisplayXL = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={cn(
        "text-[40px] sm:text-[72px] font-space-grotesk font-medium tracking-[-2.4px] sm:tracking-[-3.2px] leading-[120%] bg-hero-title-gradient bg-clip-text text-transparent select-none z-5",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const DisplayLG = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={cn(
        "text-[64px] sm:text-[80px] lg:text-[124px] font-space-grotesk font-medium tracking-[-2.4px] sm:tracking-[-3.2px] lg:tracking-[-6.169px] leading-[100%] bg-hero-title-gradient bg-clip-text text-transparent select-none",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const DisplayMD = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={cn(
        "text-[32px] sm:text-[44px] font-space-grotesk font-medium tracking-[-1.28px] sm:tracking-[-1.76px] leading-[120%] bg-hero-title-gradient bg-clip-text text-transparent select-none",
        className
      )}
    >
      {children}
    </h1>
  );
};

// ===== TITLE HEADINGS =====
export const Title40 = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={cn(
        "text-white liga font-regular text-[32px] sm:text-[40px] font-[700] tracking-[-0.64px] sm:tracking-[-0.8px] select-none",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const Title32 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={cn(
        "text-white liga font-regular text-[24px] sm:text-[32px] tracking-[-0.48px] sm:tracking-[-0.64px] font-medium select-none",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const Title24 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={cn(
        "text-white liga font-regular text-[18px] sm:text-[24px] font-[700] tracking-[-0.36px] sm:tracking-[-0.48px] select-none",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const Title22 = ({ children, className }: TypographyProps) => {
  return (
    <h4
      className={cn(
        "text-white liga font-regular text-[18px] sm:text-[22px] font-[700] tracking-[-0.36px] sm:tracking-[-0.44px] select-none",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const Title20 = ({ children, className }: TypographyProps) => {
  return (
    <h4
      className={cn(
        "text-white liga font-regular text-[18px] sm:text-[20px] font-[700] tracking-[-0.36px] sm:tracking-[-0.4px] select-none",
        className
      )}
    >
      {children}
    </h4>
  );
};

// ===== TEXT COMPONENTS =====
export const Text24 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white liga font-regular text-[20px] sm:text-[24px] font-medium tracking-[-0.4px] sm:tracking-[-0.48px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Text22 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white liga font-regular text-[18px] sm:text-[22px] font-medium tracking-[-0.36px] sm:tracking-[-0.44px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Text20 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white liga font-regular text-[18px] sm:text-[20px] font-medium tracking-[-0.36px] sm:tracking-[-0.4px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Text18 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white liga font-regular text-[16px] sm:text-[18px] font-medium tracking-[-0.32px] sm:tracking-[-0.36px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Text16 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white liga font-regular text-[14px] sm:text-[16px] font-medium tracking-[-0.28px] sm:tracking-[-0.32px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Text14 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white liga font-regular text-[12px] sm:text-[14px] font-medium tracking-[-0.24px] sm:tracking-[-0.28px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Text12 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white liga font-regular text-[10px] sm:text-[12px] font-medium tracking-[-0.2px] sm:tracking-[-0.24px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Text10 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white liga font-regular text-[9px] sm:text-[10px] font-medium tracking-[-0.18px] sm:tracking-[-0.2px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

// ===== DESCRIPTION TEXT =====
export const Description18 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/40 text-[16px] sm:text-[18px] font-regular font-normal tracking-[-0.32px] sm:tracking-[-0.36px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Description16 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/40 text-[14px] sm:text-[16px] font-regular font-normal tracking-[-0.28px] sm:tracking-[-0.32px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Description14 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/60 text-[12px] sm:text-[14px] font-regular font-normal tracking-[-0.24px] sm:tracking-[-0.28px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Description12 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/60 text-[10px] sm:text-[12px] font-regular font-normal tracking-[-0.2px] sm:tracking-[-0.24px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

// ===== BODY TEXT =====
export const Body18 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/80 text-[16px] sm:text-[18px] font-regular font-normal tracking-[-0.32px] sm:tracking-[-0.36px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Body16 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/80 text-[14px] sm:text-[16px] font-regular font-normal tracking-[-0.28px] sm:tracking-[-0.32px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Body14 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/80 text-[12px] sm:text-[14px] font-regular font-normal tracking-[-0.24px] sm:tracking-[-0.28px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Body12 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/80 text-[10px] sm:text-[12px] font-regular font-normal tracking-[-0.2px] sm:tracking-[-0.24px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

// ===== CAPTION TEXT =====
export const Caption = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/60 text-[12px] font-regular font-normal tracking-[-0.24px] uppercase liga select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CaptionSmall = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/60 text-[10px] font-regular font-normal tracking-[-0.2px] uppercase liga select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

// ===== LABEL TEXT =====
export const Label = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white text-[14px] font-regular font-medium liga tracking-[-0.28px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const LabelSmall = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white text-[12px] font-regular font-medium liga tracking-[-0.24px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

// ===== BUTTON TEXT =====
export const ButtonText = ({ children, className }: TypographyProps) => {
  return (
    <span
      className={cn(
        "text-[16px] sm:text-[18px] font-space-grotesk font-[700] tracking-[-0.32px] sm:tracking-[-0.54px] select-none",
        className
      )}
    >
      {children}
    </span>
  );
};

export const ButtonTextSmall = ({ children, className }: TypographyProps) => {
  return (
    <span
      className={cn(
        "text-[14px] font-regular font-medium liga tracking-[-0.28px] select-none",
        className
      )}
    >
      {children}
    </span>
  );
};

// ===== SPECIAL VARIANTS =====
export const TextGradient = ({ children, className }: TypographyProps) => {
  return (
    <span
      className={cn(
        "bg-hero-title-gradient bg-clip-text text-transparent select-none",
        className
      )}
    >
      {children}
    </span>
  );
};

export const TextSuccess = ({ children, className }: TypographyProps) => {
  return (
    <span
      className={cn(
        "text-[#3EDC81] liga font-regular font-medium select-none",
        className
      )}
    >
      {children}
    </span>
  );
};

export const TextWarning = ({ children, className }: TypographyProps) => {
  return (
    <span
      className={cn(
        "text-warning liga font-regular font-medium select-none",
        className
      )}
    >
      {children}
    </span>
  );
};

export const TextDanger = ({ children, className }: TypographyProps) => {
  return (
    <span
      className={cn(
        "text-danger liga font-regular font-medium select-none",
        className
      )}
    >
      {children}
    </span>
  );
};

export const TextMuted = ({ children, className }: TypographyProps) => {
  return (
    <span
      className={cn(
        "text-white/40 liga font-regular font-normal select-none",
        className
      )}
    >
      {children}
    </span>
  );
};

// ===== SPECIALIZED COMPONENTS =====
export const NavbarTitle = ({ children, className }: TypographyProps) => {
  return (
    <div
      className={cn(
        "text-white liga font-regular text-[24px] font-medium tracking-[-0.264px] select-none",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SidebarItem = ({ children, className }: TypographyProps) => {
  return (
    <span
      className={cn(
        "text-white text-[16px] liga font-creato font-medium tracking-[-0.096px] select-none",
        className
      )}
    >
      {children}
    </span>
  );
};

export const PopularBadge = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "bg-popular-gradient text-[6px] text-white liga font-regular font-[700] tracking-[-0.036px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

// ===== UTILITY COMPONENTS =====
export const TextFlow = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white text-[20px] font-space-grotesk font-[700] tracking-[-0.6px] uppercase shrink-0 select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const PricingText = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white text-[32px] sm:text-[40px] font-regular font-[700] tracking-[-0.64px] sm:tracking-[-0.8px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const ReviewText = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-white/90 text-[24px] sm:text-[32px] font-satoshi font-[700] tracking-[-0.48px] sm:tracking-[-0.64px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export const HeroNumber = ({ children, className }: TypographyProps) => {
  return (
    <text
      className={cn(
        "text-[67px] lg:text-[116px] font-regular font-[700] tracking-[-1.34px] lg:tracking-[-2.32px] select-none",
        className
      )}
    >
      {children}
    </text>
  );
};

export const HeroNumberShadow = ({ children, className }: TypographyProps) => {
  return (
    <div
      className={cn(
        "text-[180px] lg:text-[230px] font-regular font-[700] tracking-[-3.6px] lg:tracking-[-4.585px] opacity-5 bg-gradient-to-b from-white/0 to-white bg-clip-text text-transparent select-none",
        className
      )}
    >
      {children}
    </div>
  );
};
