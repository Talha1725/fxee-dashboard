import React from "react";

import CommunityFLGSocialCard from "./CommunityFLGSocialCard";

import InstagramImage from "@/public/images/instagram.png";
import YouTubeImage from "@/public/images/youtube.png";
import TelegramImage from "@/public/images/telegram.png";
import DiscordImage from "@/public/images/discord.png";

export default function CommunityFLGSocials() {
  return (
    <div className="flex flex-col items-start w-full max-w-[525px] md:max-w-[1050px] lg:min-w-[1050px] relative">
      <div className="flex flex-col md:flex-row items-center self-stretch gap-5">
        <CommunityFLGSocialCard
          title="Instagram"
          description="Trading tips, success stories, live stats, and AI-powered insights."
          buttonText="Follow us for real-time Updates"
          className="border-white/30 rounded-lg insta-gradient"
          image={InstagramImage}
        ></CommunityFLGSocialCard>
        <CommunityFLGSocialCard
          title="YouTube"
          description="Weekly content including strategy sessions, AI walkthroughs, tutorials, and trader interviews."
          buttonText="Subscribe Now"
          className="border-white/30 rounded-lg youtube-gradient"
          image={YouTubeImage}
        ></CommunityFLGSocialCard>
      </div>
      <div className="flex flex-col md:flex-row items-center self-stretch gap-5 mt-5">
        <CommunityFLGSocialCard
          title="Telegram Channel"
          description="Instant updates from the AI engine, new features, performance reviews, and exclusive community drops."
          buttonText="Join our live updates"
          className="border-white/30 rounded-lg telegram-gradient"
          image={TelegramImage}
        ></CommunityFLGSocialCard>
        <CommunityFLGSocialCard
          title="Discord (VIP Only)"
          description="A private space for our VIP subscribers. Early access to tools, direct chats with our team, and exclusive events.
"
          buttonText="Upgrade to VIP and unlock"
          className="border-white/30 rounded-lg discord-gradient"
          image={DiscordImage}
        ></CommunityFLGSocialCard>
      </div>
    </div>
  );
}
