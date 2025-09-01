import React from 'react';

interface RoundedGradientBorderProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  background?: string;
}

export default function RoundedGradientBorder({
  children,
  className = '',
  padding = 'p-[1px]',
  background = 'bg-black'
}: RoundedGradientBorderProps) {
  return (
    <div className={`rounded-gradient-border ${padding} text-white font-satoshi-medium text-lg overflow-hidden ${className}`}>
      <div className={`${background} h-full w-full`}>
        {children}
      </div>
    </div>
  );
}
