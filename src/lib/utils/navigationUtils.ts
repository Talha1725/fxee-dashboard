import { useRouter } from "next/navigation";

export const usePricingNavigation = () => {
  const router = useRouter();

  const navigateToPricing = () => {
    if (window.location.pathname === '/') {
      // If on home page, scroll to pricing section
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home page with pricing hash
      router.push('/#pricing');
    }
  };

  return { navigateToPricing };
};

export const useAuthNavigation = () => {
  const router = useRouter();

  const navigateToSignup = () => {
    router.push('/signup');
  };

  const navigateToHome = () => {
    router.push('/home');
  };

  return { navigateToSignup, navigateToHome };
};
