"use client";
import { IconLock } from "../ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function BlurOverlay({ className }: { className?: string }) {
    const { theme } = useTheme();
    return (
        <div 
          className={`absolute inset-0
          bg-white/20 dark:bg-[#1A1A1A]/60 
          rounded-2xl 
          cursor-not-allowed
          flex items-center justify-center 
          z-50 border border-white/40 dark:border-white/20
          ${className || 'scale-105 translate-y-[-6px]'}`}
          style={{
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          }}
        >
          <IconLock 
            width={32} 
            height={32} 
            color={theme === 'dark' ? 'white' : 'black'} 
          />
        </div>
      )}