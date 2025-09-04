"use client";

import { useEffect } from "react";
import Landing from "@/components/features/landing/Landing";

export default function Home() {
  useEffect(() => {
    // Handle scroll to pricing section when URL has #pricing hash
    const handleHashScroll = () => {
      if (window.location.hash === '#pricing') {
        setTimeout(() => {
          const pricingSection = document.getElementById('pricing');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Small delay to ensure page is rendered
      }
    };

    // Check on mount
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return <Landing />;
} 