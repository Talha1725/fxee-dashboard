"use client";
import LandingMax1440Container from "./LandingMax1440Container";

export default function LandingVideoSection() {
  return (
    <LandingMax1440Container className="mb-24">
      <div className="w-full max-w-[1100px] mx-auto aspect-video rounded-gradient-border-2 overflow-hidden relative">
        <iframe
          src="https://player.vimeo.com/video/1118737788?h=5af4127672&badge=0&autopause=0&player_id=0&app_id=58479&controls=1&muted=0&autoplay=0&loop=0&portrait=0&title=0&byline=0&responsive=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo Video"
          className="w-full h-full"
        />
      </div>
    </LandingMax1440Container>
  );
}
