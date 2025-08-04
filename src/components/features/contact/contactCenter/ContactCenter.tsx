import React from "react";
import Image from "next/image";

import ContactCenterCard from "@/components/features/contact/contactCenter/ContactCenterCard";
import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";

import TelegramImage from "@/public/images/contact-tg.png";
import EmailImage from "@/public/images/contact-email.png";
import PartnerImage from "@/public/images/contact-partner.png";
import DocImage from "@/public/images/contact-doc.png";

export default function ContactCenter() {
  return (
    <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px]">
      <div className="flex flex-col items-center w-full max-w-[525px] md:max-w-[1050px] lg:min-w-[1050px]">
        <div className="flex flex-col md:flex-row items-center self-stretch">
          <ContactCenterCard
            title="Telegram Support"
            subtitle="(Fast Response)"
            description="Chat directly with our support team on Telegram for instant help and real-time answers."
            buttonText="Message on Telegram"
          >
            <div className="absolute -right-[50px] -bottom-[30px] w-[284px] h-[225px] sm:w-[327px] sm:h-[280px]">
              <Image src={TelegramImage} fill alt="TelegramImage" />
            </div>
          </ContactCenterCard>
          <ContactCenterCard
            title="Email Support"
            description="Reach out to us via email for detailed assistance — we typically reply within 24 hours, usually much faster"
            buttonText="Email Us"
          >
            <div className="absolute -right-[80px] -bottom-[30px] w-[346px] h-[230px] sm:w-[379px] sm:h-[284px]">
              <Image src={EmailImage} fill alt="EmailImage" />
            </div>
          </ContactCenterCard>
        </div>
        <div className="flex flex-col md:flex-row items-center self-stretch">
          <ContactCenterCard
            title="Partnerships & Collaborations"
            description="Looking to collaborate, integrate, or promote FXEE? We're always open to new partnerships and collaborations."
            buttonText="Email Us"
          >
            <div className="absolute -right-[100px] -bottom-[100px] w-[430px] h-[310px] sm:-right-[160px] sm:-bottom-[125px] sm:w-[518px] sm:h-[389px]">
              <Image src={PartnerImage} fill alt="PartnerImage" />
            </div>
          </ContactCenterCard>
          <ContactCenterCard
            title="Help Center & Docs"
            description="Explore our Knowledge Base to get answers, tutorials, and deep dives into how FXEE AI works"
            buttonText="Access Knowledge Base"
          >
            <div className="absolute -right-[111px] -bottom-[66px] w-[390px] h-[293px] sm:w-[444px] sm:h-[333px]">
              <Image src={DocImage} fill alt="DocImage" />
            </div>
          </ContactCenterCard>
        </div>
      </div>
    </LandingMax1440Container>
  );
}
