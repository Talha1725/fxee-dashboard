export const fadeInUp = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

export const fadeInUpView = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

export const fadeInDownView = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

export const fadeInLeftView = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 1 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

export const fadeInRightView = {
  initial: { opacity: 0, x: 150 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 1 },
};

export const fadeInRightDelayed = {
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, delay: 0.5 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

export const fadeInView = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1 },
};

export const scaleInView = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 1 },
};

// Custom variants with configurable delays
export const createFadeIn = (delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, delay },
});

export const createFadeInUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay },
});

export const createFadeInUpView = (delay: number = 0) => ({
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, delay },
});

export const createFadeInRight = (delay: number = 0) => ({
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, delay },
});

export const createFadeInRightView = (delay: number = 0) => ({
  initial: { opacity: 0, x: 150 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 1, delay },
});

// Stagger animations for multiple elements
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const staggerItemView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};
