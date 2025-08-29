import React from "react";

interface TutorialCardProps {
  number: string;
  heading: string;
  description: string;
  image: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  number,
  heading,
  description,
  image,
}) => {
  return (
    <div className="w-full max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg bg-white min-h-[400px] lg:min-h-[500px]">
      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between gap-5 p-5 bg-transparent relative">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-satoshi-bold text-black leading-tight">
            {heading}
          </h3>
          <p className="text-[16px] sm:text-[18px] leading-relaxed dark:text-white/50 text-black/50 font-satoshi-regular">
            {description}
          </p>
        </div>

        {/* Number Section */}
       <div className="relative pl-[13px] pr-[148px] pt-[26px] pb-0 flex items-end">
    {/* Background Number */}
    <span className="absolute bottom-11 left-[46px] text-[229.24px] font-satoshi-bold font-bold leading-[100%] tracking-[-0.02em] bg-gradient-to-b from-black/10 to-black bg-clip-text text-transparent opacity-[0.05] select-none">
      {number}
    </span>

    <div className="relative w-[200px] h-[157px] absolute left-[10px]">
      {/* Blurred blue background */}
      <div
        className="absolute inset-0 z-0 -top-18"
        style={{
          background:
            "radial-gradient(circle at center, rgba(2,118,219,0.6), rgba(62,220,129,0.4), transparent 70%)",
          filter: "blur(40px)",
          opacity: 1,
        }}
      />

      {/* Foreground gradient-stroked number */}
      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
        <defs>
          <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0276DB" />
            <stop offset="100%" stopColor="#3EDC81" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="150"
          fontWeight="700"
          fill="white"
          fillOpacity="0.4"
          stroke="url(#gradStroke)"
          strokeWidth="3"
          fontFamily="Satoshi-Bold, Satoshi, Arial, sans-serif"
        >
          {number}
        </text>
      </svg>
    </div>
  </div>
      </div>

      {/* Image Section - Same height as content */}
      <div className="flex-1 w-full lg:w-auto flex items-center justify-center overflow-hidden">
        <img
          src={`/Images/${image}`}
          alt={heading}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

const TutorialCards: React.FC = () => {
  const tutorialData = [
    {
      number: "01",
      heading: "Set Up Your Account",
      description:
        "Choose between a virtual or simulation account to get started. If you plan to use this for copy trading or prop firm challenges, we recommend upgrading to a simulation account.",
      image: "01.svg",
    },
    {
      number: "02",
      heading: "Configure Your AI Trading Panel",
      description:
        "Define your risk tolerance, trading style preferences, and other key parameters so the AI can tailor its strategy to your goals.",
      image: "02.svg",
    },
    {
      number: "03",
      heading: "Customize Your AI Trading Companion",
      description:
        "Select add-ons, set processing power preferences, and unlock advanced AI features to personalize your trading assistant.",
      image: "03.svg",
    },
    {
      number: "04",
      heading: "Plan With Your AI Companion",
      description:
        "Start your day by telling your AI what you aim to achieve. Whether it’s growth, safety, or securing profits—let it build your trading plan accordingly.",
      image: "04.svg",
    },
  ];

  return (
    <div className="w-full px-4 md:px-[60px] py-[40px] flex flex-col items-center">
      <div className="flex flex-col gap-[40px] md:gap-[60px] w-full">
        {tutorialData.map((tutorial, index) => (
          <TutorialCard
            key={index}
            number={tutorial.number}
            heading={tutorial.heading}
            description={tutorial.description}
            image={tutorial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TutorialCards;
