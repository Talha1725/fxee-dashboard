export interface TutorialItem {
  number: string;
  heading: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
}

export const TUTORIAL_DATA: readonly TutorialItem[] = [
  {
    number: "01",
    heading: "Set Up Your Account",
    description: "Choose between a virtual or simulation account to get started. If you plan to use this for copy trading or prop firm challenges, we recommend upgrading to a simulation account.",
    image: "01.svg",
    imagePosition: "left",
  },
  {
    number: "02",
    heading: "Configure Your AI Trading Panel",
    description: "Define your risk tolerance, trading style preferences, and other key parameters so the AI can tailor its strategy to your goals.",
    image: "02.svg",
    imagePosition: "right",
  },
  {
    number: "03",
    heading: "Customize Your AI Trading Companion",
    description: "Select add-ons, set processing power preferences, and unlock advanced AI features to personalize your trading assistant.",
    image: "03.svg",
    imagePosition: "left",
  },
  {
    number: "04",
    heading: "Plan With Your AI Companion",
    description: "Start your day by telling your AI what you aim to achieve. Whether it's growth, safety, or securing profits—let it build your trading plan accordingly.",
    image: "04.svg",
    imagePosition: "right",
  },
  {
    number: "05",
    heading: "Analyze Suggested Trades",
    description: "Review AI-generated trade ideas and match them with your preferences. Use real-time insights to align with current market conditions and your strategy.",
    image: "05.svg",
    imagePosition: "left",
  },
  {
    number: "06",
    heading: "Execute & Monitor Trades",
    description: "Launch trades with one click and let the AI monitor, manage, and optimize them for you—freeing you to explore additional tools.",
    image: "06.svg",
    imagePosition: "right",
  },
  {
    number: "07",
    heading: "Track Progress & Improve",
    description: "Measure your performance, learn from outcomes, and continuously improve your strategy as you dive deeper into FXEE's future-focused trading tech.",
    image: "07.svg",
    imagePosition: "left",
  },
] as const;
